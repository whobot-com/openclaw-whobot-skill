# 标杆介绍页

供宿主能把本地 HTML 作为交付物在预览面板打开时使用（WorkBuddy 的 `present_files`）。数据来自本次 `whobot agents show <agent>` 的详情，不用别的标杆或记忆补。

## 怎么生成

1. 用宿主的写文件工具（不用命令行）写到当前任务目录 `outputs/benchmarks/<标杆名称>.html`；文件名去掉 `/ \ : * ? " < > |` 这些字符。同一个标杆再次介绍时覆盖同一个文件。
2. 照下面的模板填写，只替换花括号里的内容，不改样式，不加脚本、不加其他外部资源。
3. 写好后用 `present_files` 交付这个文件，右侧预览面板会打开它。

## 填写规则

- 文字（名称、行业、简介、场景名、场景说明、每句对话）写入前把 `&` 换成 `&amp;`、`<` 换成 `&lt;`、`>` 换成 `&gt;`、`"` 换成 `&quot;`；原文照录，包括 `****` 脱敏，不删改、不总结。
- 地址（视频、录音）只用 `https://` 开头的原值；不是 https 的那一项不写。
- 呼出或呼入：`callType=inbound` 写“呼入”，其余写“呼出”。
- 不放封面图（`media.covers`）和录音时长（`duration`）。
- 详情里没有的字段，把模板里对应的整块删掉：没有视频删“介绍视频”标题和 `video`；没有录音删“案例录音”整节；不是呼入或没有 `experiencePhone` 删“体验号码”整节。
- 介绍视频只放一个 `video`，用 `media.videos` 的第一个；其余的不放。`media.scenes` 每段一个 `div class="scene"`；`lines` 每句一行，`agent` 用 `line agent` 和“数字员工”，`user` 用 `line user` 和“客户”。介绍页里每段案例都放完整对话。
- `experiencePhone` 完整写出，不脱敏。

## 模板

```html
<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{名称}</title>
<style>
body{margin:0;font:14px/1.6 -apple-system,"PingFang SC","Microsoft YaHei",sans-serif;color:#1f2329;background:#f5f6f8}
.card{max-width:720px;margin:16px auto;background:#fff;border-radius:12px;padding:20px}
h1{font-size:20px;margin:0 0 4px}
h2{font-size:16px;margin:20px 0 8px}
.meta{color:#646a73;font-size:13px}
video{width:100%;border-radius:8px;margin-top:8px;background:#000}
.scene{border:1px solid #e5e6eb;border-radius:8px;padding:12px;margin-bottom:12px}
audio{width:100%;margin:8px 0}
.line{margin:4px 0}
.who{display:inline-block;min-width:64px;font-weight:600;color:#646a73}
.agent .who{color:#3370ff}
.phone{font-size:18px;font-weight:600}
</style>
</head>
<body>
<div class="card">
<h1>{名称}</h1>
<div class="meta">{行业} · {呼出或呼入}</div>
<p>{简介}</p>
<h2>介绍视频</h2>
<video controls preload="metadata" src="{视频地址}"></video>
<h2>案例录音</h2>
<div class="scene">
<b>{场景名}</b>
<div class="meta">{场景说明}</div>
<audio controls preload="metadata" src="{录音地址}"></audio>
<div class="line user"><span class="who">客户</span>{这一句}</div>
<div class="line agent"><span class="who">数字员工</span>{这一句}</div>
</div>
<h2>体验号码</h2>
<p>直接拨打这个号码就能体验，不需要登录。</p>
<p class="phone">{体验号码}</p>
</div>
</body>
</html>
```
