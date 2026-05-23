const { questions } = require("../../data/questions");
const store = require("../../data/store");

Page({
  data: {
    questions: [],
    filtered: [],
    keyword: "",
    modeOptions: ["全部来源", "专项训练", "真题训练", "专业题"],
    modeIndex: 0,
    categoryOptions: ["全部题型"],
    categoryIndex: 0,
    statusOptions: ["全部状态", "已练习", "未练习"],
    statusIndex: 0
  },

  onShow() {
    this.refresh();
  },

  refresh() {
    const statuses = store.getStatuses();
    const enriched = questions.map((item) => ({
      ...item,
      status: statuses[item.id] || {},
      cuesText: item.cues.join("  ")
    }));
    const categories = ["全部题型"].concat([...new Set(questions.map((item) => item.category))]);
    this.setData({ questions: enriched, categoryOptions: categories });
    this.applyFilters();
  },

  applyFilters() {
    const mode = this.data.modeOptions[this.data.modeIndex];
    const category = this.data.categoryOptions[this.data.categoryIndex];
    const status = this.data.statusOptions[this.data.statusIndex];
    const keyword = this.data.keyword.trim();
    const filtered = this.data.questions.filter((item) => {
      const haystack = `${item.text} ${item.source} ${item.category} ${item.cuesText}`;
      if (keyword && !haystack.includes(keyword)) return false;
      if (mode !== "全部来源" && item.mode !== mode) return false;
      if (category !== "全部题型" && item.category !== category) return false;
      if (status === "已练习" && !item.status.done) return false;
      if (status === "未练习" && item.status.done) return false;
      return true;
    });
    this.setData({ filtered });
  },

  onKeywordInput(event) {
    this.setData({ keyword: event.detail.value });
    this.applyFilters();
  },

  onModeChange(event) {
    this.setData({ modeIndex: Number(event.detail.value) });
    this.applyFilters();
  },

  onCategoryChange(event) {
    this.setData({ categoryIndex: Number(event.detail.value) });
    this.applyFilters();
  },

  onStatusChange(event) {
    this.setData({ statusIndex: Number(event.detail.value) });
    this.applyFilters();
  },

  openQuestion(event) {
    const id = event.currentTarget.dataset.id;
    getApp().globalData.currentQuestionId = id;
    wx.setStorageSync("currentQuestionId", id);
    wx.switchTab({ url: "/pages/practice/index" });
  }
});
