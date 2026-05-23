const { questions } = require("../../data/questions");
const store = require("../../data/store");

const recorder = wx.getRecorderManager();

function formatTime(seconds) {
  const safe = Math.max(0, seconds);
  const mm = String(Math.floor(safe / 60)).padStart(2, "0");
  const ss = String(safe % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function paragraphize(text) {
  return text
    .replace(/\s+/g, "")
    .replace(/(第一|第二|第三|首先|其次|再次|最后|总之)/g, "\n$1")
    .replace(/^\n/, "")
    .trim();
}

Page({
  data: {
    questions,
    question: questions[0],
    currentIndex: 0,
    status: {},
    attempts: [],
    transcript: "",
    review: "",
    recording: false,
    timer: 0,
    timerText: "00:00",
    score: {}
  },

  onLoad() {
    recorder.onStop((res) => {
      const transcript = paragraphize(this.data.transcript);
      const attempts = store.saveAttempt(this.data.question.id, {
        audioPath: res.tempFilePath,
        transcript
      });
      this.setData({ recording: false, attempts, transcript });
      wx.showToast({ title: "录音已保存", icon: "success" });
    });
    recorder.onError(() => {
      this.setData({ recording: false });
      wx.showToast({ title: "录音失败，请检查权限", icon: "none" });
    });
    this.loadCurrent();
  },

  onShow() {
    const app = getApp();
    const targetId = app.globalData.currentQuestionId || wx.getStorageSync("currentQuestionId");
    if (targetId) {
      const index = questions.findIndex((item) => item.id === targetId);
      if (index >= 0 && index !== this.data.currentIndex) {
        this.setData({ currentIndex: index, question: questions[index] });
      }
    }
    this.loadCurrent();
  },

  loadCurrent() {
    const question = this.data.question;
    const statuses = store.getStatuses();
    const reviews = store.getReviews();
    const status = statuses[question.id] || {};
    this.setData({
      status,
      attempts: store.getAttempts(question.id),
      review: reviews[question.id] || "",
      score: status.scoreDetail || {}
    });
  },

  nextQuestion() {
    const statuses = store.getStatuses();
    const unpracticed = questions
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => !statuses[item.id]?.done);
    const pool = unpracticed.length ? unpracticed : questions.map((item, index) => ({ item, index }));
    const picked = pool[Math.floor(Math.random() * pool.length)];
    this.setData({
      currentIndex: picked.index,
      question: picked.item,
      transcript: "",
      timer: 0,
      timerText: "00:00",
      score: {}
    });
    wx.setStorageSync("currentQuestionId", picked.item.id);
    this.loadCurrent();
  },

  startRecord() {
    wx.authorize({
      scope: "scope.record",
      success: () => {
        recorder.start({
          duration: 720000,
          sampleRate: 16000,
          numberOfChannels: 1,
          encodeBitRate: 48000,
          format: "mp3"
        });
        this.setData({ recording: true, timer: 0, timerText: "00:00" });
        this.startTimer();
      },
      fail: () => wx.showToast({ title: "请在微信权限中允许录音", icon: "none" })
    });
  },

  stopRecord() {
    if (this.data.recording) recorder.stop();
    this.stopTimer();
  },

  startTimer() {
    this.stopTimer();
    this.timerId = setInterval(() => {
      const timer = this.data.timer + 1;
      this.setData({ timer, timerText: formatTime(timer) });
    }, 1000);
  },

  stopTimer() {
    if (this.timerId) clearInterval(this.timerId);
    this.timerId = null;
  },

  resetAnswer() {
    this.stopTimer();
    this.setData({ transcript: "", timer: 0, timerText: "00:00", score: {} });
  },

  onTranscriptInput(event) {
    this.setData({ transcript: event.detail.value });
  },

  onReviewInput(event) {
    const review = event.detail.value;
    this.setData({ review });
    store.saveReview(this.data.question.id, review);
  },

  scoreAnswer() {
    const text = this.data.transcript.trim();
    const lengthScore = Math.min(25, Math.floor(text.length / 18));
    const structureHit = ["首先", "其次", "最后", "第一", "第二", "第三"].filter((word) => text.includes(word)).length;
    const review = Math.min(88, 55 + lengthScore + (text.length > 20 ? 6 : 0));
    const structure = Math.min(88, 54 + structureHit * 6 + lengthScore);
    const content = Math.min(86, 50 + lengthScore + this.data.question.cues.filter((cue) => text.includes(cue.slice(0, 2))).length * 4);
    const expression = Math.min(86, 56 + Math.min(18, Math.floor(text.length / 30)));
    const total = Math.round((review + structure + content + expression) / 4);
    const score = { total, review, structure, content, expression };
    store.saveStatus(this.data.question.id, {
      done: true,
      score: total,
      scoreDetail: score,
      updatedAt: new Date().toLocaleString()
    });
    this.setData({ score });
    this.loadCurrent();
  },

  markDone() {
    store.saveStatus(this.data.question.id, { done: true, updatedAt: new Date().toLocaleString() });
    this.loadCurrent();
  },

  markTodo() {
    store.saveStatus(this.data.question.id, { done: false, updatedAt: new Date().toLocaleString() });
    this.loadCurrent();
  },

  removeAttempt(event) {
    const attempts = store.deleteAttempt(this.data.question.id, event.currentTarget.dataset.id);
    this.setData({ attempts });
  }
});
