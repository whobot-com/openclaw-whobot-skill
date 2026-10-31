#!/usr/bin/env node
// 生成 docs/llms-full.txt：按 _data/nav.yml 的顺序拼接所有文档页，并附上 SKILL.md。
// 用法：node docs/scripts/build-llms.mjs        （写入）
//       node docs/scripts/build-llms.mjs --check（只校验是否最新，CI 用）
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const docs = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repo = path.resolve(docs, "..");
const site = "https://whobot-com.github.io/openclaw-whobot-skill";

// nav.yml 结构固定，只取 title 和 path，避免引入 YAML 依赖
const nav = await readFile(path.join(docs, "_data/nav.yml"), "utf8");
const pages = [...nav.matchAll(/\{\s*title:\s*([^,]+?),\s*path:\s*([^\s}]+)\s*\}/g)]
  .map((m) => ({ title: m[1].trim(), path: m[2].trim() }));
if (pages.length === 0) throw new Error("nav.yml 中没有解析到页面");

const pageUrl = (p) => `${site}/${p.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, ".html")}`;

function stripFrontMatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n/);
  return { body: m ? src.slice(m[0].length) : src, meta: m ? m[1] : "" };
}

// 把站内相对 .md 链接改成绝对网址，方便模型直接引用
function absolutize(body, fromPath) {
  const dir = path.posix.dirname(fromPath);
  return body.replace(/\]\((?!https?:|#|mailto:)([^)\s]+)\)/g, (all, target) => {
    const [file, hash = ""] = target.split("#");
    let resolved = path.posix.normalize(path.posix.join(dir, file || path.posix.basename(fromPath)));
    if (resolved.endsWith("/")) resolved += "index.md";
    if (!/\.(md|txt)$/.test(resolved) && !resolved.includes(".")) resolved += "/index.md";
    const url = resolved.endsWith(".md") ? pageUrl(resolved) : `${site}/${resolved}`;
    return `](${url}${hash ? "#" + hash : ""})`;
  });
}

// 首页卡片是 HTML，在纯文本里去掉
const dropHtml = (s) => s.replace(/<ul class="cards">[\s\S]*?<\/ul>\n?/g, "").replace(/<p class="lead">([\s\S]*?)<\/p>/g, "$1")
  .replace(/<div class="prompt">([\s\S]*?)<\/div>/g, (_, t) => "> " + t.trim());

let out = `# 呼波特电话数字员工 Skill 文档（全文）

> 本文件由 docs/scripts/build-llms.mjs 生成，汇总 ${site}/ 的全部页面与 SKILL.md 原文，供大模型一次读取。索引见 ${site}/llms.txt 。

`;
for (const p of pages) {
  const src = await readFile(path.join(docs, p.path), "utf8");
  const { body } = stripFrontMatter(src);
  out += `\n---\n\n<!-- 来源：${pageUrl(p.path)} -->\n\n${absolutize(dropHtml(body), p.path).trim()}\n`;
}

const skill = await readFile(path.join(repo, "SKILL.md"), "utf8");
out += `\n---\n\n<!-- 来源：https://github.com/whobot-ai/skills/blob/main/skills/whobot-phonecall-skill/SKILL.md -->\n\n# 附录：SKILL.md 原文\n\n\`\`\`markdown\n${skill.trim()}\n\`\`\`\n`;

const target = path.join(docs, "llms-full.txt");
if (process.argv.includes("--check")) {
  const current = await readFile(target, "utf8").catch(() => "");
  if (current !== out) {
    console.error("docs/llms-full.txt 不是最新，请运行 node docs/scripts/build-llms.mjs");
    process.exit(1);
  }
  console.log("llms-full.txt 已是最新");
} else {
  await writeFile(target, out);
  console.log(`已写入 ${path.relative(repo, target)}（${pages.length} 页，${out.length} 字符）`);
}
