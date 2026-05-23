const ATTEMPTS_KEY = "questionAttempts";
const STATUS_KEY = "questionStatus";
const REVIEW_KEY = "questionReviews";

function read(key, fallback) {
  try {
    return wx.getStorageSync(key) || fallback;
  } catch (error) {
    return fallback;
  }
}

function write(key, value) {
  wx.setStorageSync(key, value);
}

function getAttempts(questionId) {
  const all = read(ATTEMPTS_KEY, {});
  return all[questionId] || [];
}

function saveAttempt(questionId, attempt) {
  const all = read(ATTEMPTS_KEY, {});
  const list = all[questionId] || [];
  const next = {
    ...attempt,
    id: `${Date.now()}`,
    name: `${list.length + 1}`,
    createdAt: new Date().toLocaleString()
  };
  all[questionId] = list.concat(next);
  write(ATTEMPTS_KEY, all);
  return all[questionId];
}

function deleteAttempt(questionId, attemptId) {
  const all = read(ATTEMPTS_KEY, {});
  const list = (all[questionId] || [])
    .filter((item) => item.id !== attemptId)
    .map((item, index) => ({ ...item, name: `${index + 1}` }));
  all[questionId] = list;
  write(ATTEMPTS_KEY, all);
  return list;
}

function getStatuses() {
  return read(STATUS_KEY, {});
}

function saveStatus(questionId, patch) {
  const all = read(STATUS_KEY, {});
  all[questionId] = { ...(all[questionId] || {}), ...patch };
  write(STATUS_KEY, all);
  return all[questionId];
}

function getReviews() {
  return read(REVIEW_KEY, {});
}

function saveReview(questionId, review) {
  const all = read(REVIEW_KEY, {});
  all[questionId] = review;
  write(REVIEW_KEY, all);
}

module.exports = {
  getAttempts,
  saveAttempt,
  deleteAttempt,
  getStatuses,
  saveStatus,
  getReviews,
  saveReview
};
