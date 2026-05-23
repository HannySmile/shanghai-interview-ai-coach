const { questions } = require("../../data/questions");
const store = require("../../data/store");

Page({
  data: {
    records: []
  },

  onShow() {
    const records = [];
    questions.forEach((question) => {
      store.getAttempts(question.id).forEach((attempt) => {
        records.push({
          key: `${question.id}-${attempt.id}`,
          question,
          attempt
        });
      });
    });
    records.reverse();
    this.setData({ records });
  }
});
