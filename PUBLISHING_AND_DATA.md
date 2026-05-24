# 本地网页发布与数据保存说明

## 为什么昨天的记录今天看不到

当前网页是纯前端应用，记录默认存在浏览器本地存储里。下面这些地址在浏览器看来是不同站点，数据不会互通：

- `file:///Users/.../index.html`
- `http://127.0.0.1:4199/`
- `http://localhost:4199/`
- 发布后的线上域名

所以建议固定使用同一个地址，例如一直用：

`http://localhost:4199/`

不要在 `file://`、`127.0.0.1`、`localhost` 之间来回切换。

## 已加入的数据备份功能

侧边栏新增了「数据备份」：

- `导出数据`：下载一个 JSON 备份文件，包含训练记录、录音、文字稿、题目状态、分数和复盘。
- `导入数据`：把备份文件恢复到当前网页。

建议每次重要练习后点一次「导出数据」。如果以后换电脑、换浏览器、发布到线上，只要导入这个文件，记录就能恢复。

## 发布方式 1：只在自己电脑用

在项目目录运行：

```bash
python3 -m http.server 4199 --bind 127.0.0.1
```

然后打开：

`http://localhost:4199/`

这种方式最简单，录音权限也比较稳定。

## 发布方式 2：发布成公开网页

这是静态网页，可以发布到：

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

上传这些文件即可：

- `index.html`
- `styles.css`
- `app.js`
- `word-questions.js`
- `professional-questions.js`
- 其他同目录 JS / CSS 文件

注意：静态发布后，数据仍然默认保存在访问者自己的浏览器里，不会自动同步到云端。你需要用「导出数据 / 导入数据」迁移。

## 当前本地保存的 key

项目仍然保留浏览器本地保存逻辑，当前主要使用 `localStorage`，没有使用 IndexedDB API。主要 key 如下：

- `interviewHistory`：练习记录数组，保存题目、模式、分数、四项分、文字稿、复盘、正式模拟子题等。录音是本地 `data:`/`blob:` 地址，只适合当前浏览器使用。
- `manualQuestionStatus`：按题干保存的练习状态对象，包含 `status`、`score`、`updatedAt`。
- `reviewDrafts`：按题干保存的复盘草稿，当前结构主要是 `{ "question|题干": { "review": "..." } }`。
- `questionAttempts`：按题干保存的多次作答记录，包含序号、用时、文字稿和本地录音地址。
- `customQuestions`：自建题数组，包含题型、难度、来源、题干、标签和要点。
- `deletedQuestionTexts`：被隐藏或删除的内置题题干数组。
- `mockViewMode`：正式模拟听题/看题偏好。
- `preferredMaleVoiceName`：本机可用男声偏好。

## 发布方式 3：Supabase 云端保存

当前版本已接入 Supabase：

- 使用 Supabase Auth 做邮箱注册、登录、退出。
- 登录后，新增练习记录会先保存到本地，再尝试同步到 `practice_records`。
- 自建题会先保存到本地，再尝试同步到 `custom_questions`。
- 「迁移本地数据到云端」会把本地练习记录、练习状态、复盘草稿、多次作答文字稿、自建题迁移到云端，并写入 `sync_logs`。
- 「从云端同步数据」会按当前登录用户 `user_id` 拉取数据并合并到本地。
- 录音暂不做跨设备云端同步，仍然保留本地逻辑。

建议 Supabase 表至少包含这些字段，或者包含兼容的 `user_id`、`local_id`、`payload/jsonb` 类字段：

- `practice_records`：`user_id`、`local_id`、`record_type`、`mode`、`category`、`focus`、`question_text`、`score`、`transcript`、`review_notes`、`actual_seconds`、`scores`、`child_questions`、`payload`、`created_at`、`updated_at`。
- `custom_questions`：`user_id`、`local_id`、`category`、`difficulty`、`source`、`question_text`、`cues`、`points`、`is_deleted`、`payload`、`created_at`、`updated_at`。
- `sync_logs`：`user_id`、`action`、`status`、`message`、`counts`、`payload`、`created_at`。

前端只使用 Supabase Publishable key。不要把 `sb_secret_` 开头的 Secret key 写入前端代码。

## 其他后端选择

如果要做到“换设备也自动看到所有记录”，需要接后端数据库，例如：

- Supabase
- Firebase
- 腾讯云开发
- 自己的 Node.js 后端

需要保存的数据主要是：

- `interviewHistory`
- `manualQuestionStatus`
- `reviewDrafts`
- `questionAttempts`

录音文件建议单独上传对象存储，只在数据库里保存文件地址。不要长期把大量录音都塞进浏览器本地存储，否则容易触发浏览器容量上限。
