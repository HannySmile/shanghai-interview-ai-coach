# 微信小程序迁移操作

当前网页是纯前端版本，核心数据在 `app.js`、`word-questions.js`、`professional-questions.js` 和浏览器 `localStorage`。迁移到微信小程序时，不建议直接把 HTML 放进 WebView，因为录音、文件存储和权限会受限；建议按下面方式重建为原生小程序。

我已经在本项目下创建了可导入微信开发者工具的第一版小程序工程：

`wechat-miniprogram/`

当前已把网页题库汇总到小程序 `wechat-miniprogram/data/questions.js`，共 181 道题。

## 0. 现在怎么打开

1. 打开「微信开发者工具」。
2. 选择「导入项目」。
3. 项目目录选择：`/Users/hanny/Documents/Codex/2026-05-19/1-ai-2-3-ai-4/wechat-miniprogram`
4. 没有正式 AppID 时，先使用测试号或 `touristappid` 预览。
5. 点击「编译」，即可在模拟器里使用。

说明：我可以把工程文件做好，但无法直接替你发布到微信。真正上线需要你的微信小程序 AppID、开发者身份、上传代码、提交审核。

## 1. 页面拆分

- `pages/practice/index`：练习主页面，对应现在的题面、计时、录音、文字稿、评分和复盘。
- `pages/bank/index`：题库总览，对应筛选、练习状态、分数。
- `pages/records/index`：训练记录，对应历史作答、录音、文字稿、复盘。

## 2. 数据迁移

- 把 `word-questions.js` 和 `professional-questions.js` 转成 JSON：
  - `miniprogram/data/word-questions.json`
  - `miniprogram/data/professional-questions.json`
- 当前浏览器里的这些数据可迁移到小程序本地缓存：
  - `interviewHistory`：训练记录
  - `manualQuestionStatus`：题目练习状态
  - `reviewDrafts`：复盘草稿
  - `questionAttempts`：每题多次录音和文字稿

## 3. 录音替换

网页用的是 `MediaRecorder`，小程序要改成：

```js
const recorder = wx.getRecorderManager()
recorder.start({ duration: 720000, format: 'mp3' })
recorder.onStop((res) => {
  // res.tempFilePath 就是本次录音文件
})
```

每道题多次录音建议保存结构：

```js
{
  questionId: "题目文本或 hash",
  attempts: [
    {
      name: "1",
      audioPath: "wxfile://...",
      transcript: "分段后的文字稿",
      seconds: 125,
      createdAt: 1780000000000
    }
  ]
}
```

## 4. 语音识别与朗读

- 朗读题目：小程序原生没有浏览器 `speechSynthesis`，需要接入云函数或第三方 TTS，把题目转成音频播放。
- 语音转文字：小程序原生录音后需要接入微信同声传译插件、腾讯云 ASR 或其他语音识别接口。

## 5. 本地存储

网页的 `localStorage.setItem()` 对应改成：

```js
wx.setStorageSync('questionAttempts', data)
wx.getStorageSync('questionAttempts')
```

## 6. 样式迁移

- `styles.css` 的变量和布局可以迁移到 `app.wxss` / 页面 `.wxss`。
- HTML 标签需要改为小程序组件：
  - `section/div` -> `view`
  - `button` -> `button`
  - `textarea` -> `textarea`
  - `audio` -> `audio` 或 `InnerAudioContext`

## 7. 推荐执行顺序

1. 先迁移题库和训练状态，不接语音。
2. 再迁移计时、答题文字稿、复盘保存。
3. 再接入录音，完成多次录音保存和删除。
4. 最后接 TTS 读题和 ASR 转写。
