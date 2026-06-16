/**
 * Project: AI MVP Starter Kit
 * File: scripts/validate.mjs
 * Author: Beck Sarbassov
 * Version: 0.1.0
 * Date released: 2026-06-16
 * Last updated: 2026-06-16
 * Copyright: © Beck Sarbassov. All rights reserved.
 *
 * EN: Dependency-free repository validation script.
 * RU: Dependency-free validation script для проверки структуры репозитория.
 */

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(__filename), "..");

const requiredFiles = [
  "README.md",
  "LICENSE",
  "CHANGELOG.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  ".gitignore",
  ".env.example",
  "index.html",
  "AI_RULES.md",
  "TASK.md",
  "PROJECT_CONTEXT.md",
  "HANDOFF.md",
  "Codex_History.md",
  "public/index.html",
  "public/manifest.json",
  "public/robots.txt",
  "public/sitemap.xml",
  "public/assets/css/app.css",
  "public/assets/js/translations.js",
  "public/assets/js/i18n.js",
  "public/assets/js/storage.js",
  "public/assets/js/security.js",
  "public/assets/js/app.js",
  "public/assets/img/preview.svg",
  "ai/AI_RULES.md",
  "ai/TASK.md",
  "ai/PROJECT_CONTEXT.md",
  "ai/HANDOFF.md",
  "ai/CODEX_PROMPTS.md",
  "ai/CLAUDE_PROMPTS.md",
  "ai/CURSOR_PROMPTS.md",
  "ai/PROMPT_LIBRARY.md",
  "docs/QUICK_START.md",
  "docs/PROJECT_STRUCTURE.md",
  "docs/AI_WORKFLOW.md",
  "docs/LOCALIZATION.md",
  "docs/DEPLOYMENT.md",
  "docs/SECURITY_CHECKLIST.md",
  "docs/ROADMAP.md",
  "starter/README.md",
  "starter/.env.example",
  "starter/public/index.html",
  "starter/public/assets/css/starter.css",
  "starter/public/assets/js/starter.js",
  "starter/src/Core/README.md",
  "starter/src/Modules/README.md",
  "starter/src/App/README.md",
  "starter/database/schema.sql",
  "examples/landing-page/index.html",
  "examples/landing-page/README.md",
  "examples/lead-form/index.html",
  "examples/lead-form/README.md",
  "examples/mini-crm/index.html",
  "examples/mini-crm/README.md",
  "scripts/validate.mjs"
];

const requiredDocs = [
  "README.md",
  "HANDOFF.md",
  "PROJECT_CONTEXT.md",
  "Codex_History.md",
  "TASK.md",
  "AI_RULES.md",
  "ai/AI_RULES.md",
  "ai/TASK.md",
  "ai/PROJECT_CONTEXT.md",
  "ai/HANDOFF.md",
  "docs/QUICK_START.md",
  "docs/PROJECT_STRUCTURE.md",
  "docs/AI_WORKFLOW.md",
  "docs/LOCALIZATION.md",
  "docs/DEPLOYMENT.md",
  "docs/SECURITY_CHECKLIST.md",
  "docs/ROADMAP.md"
];

const secretPatterns = [
  /sk-[A-Za-z0-9_-]{20,}/,
  /AKIA[0-9A-Z]{16}/,
  /-----BEGIN PRIVATE KEY-----/,
  /password\s*=\s*["'][^"']+["']/i
];

const failures = [];

function relative(filePath) {
  return path.relative(repoRoot, filePath).replaceAll("\\", "/");
}

function pass(message) {
  console.log(`OK  ${message}`);
}

function fail(message) {
  failures.push(message);
  console.error(`ERR ${message}`);
}

function readRequired(relativePath) {
  return readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function walkFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if ([".git", "node_modules", "vendor", "dist", "build"].includes(entry)) {
      continue;
    }

    const absolute = path.join(dir, entry);
    const stats = statSync(absolute);
    if (stats.isDirectory()) {
      results.push(...walkFiles(absolute));
    } else {
      results.push(absolute);
    }
  }
  return results;
}

console.log("AI MVP Starter Kit validation");
console.log(`Repository: ${repoRoot}`);
console.log("");

for (const file of requiredFiles) {
  const absolute = path.join(repoRoot, file);
  if (!existsSync(absolute)) {
    fail(`Missing required file: ${file}`);
    continue;
  }

  const stats = statSync(absolute);
  if (stats.size === 0) {
    fail(`Required file is empty: ${file}`);
  } else {
    pass(`Found ${file}`);
  }
}

for (const file of requiredDocs) {
  const content = existsSync(path.join(repoRoot, file)) ? readRequired(file).trim() : "";
  if (content.length < 120) {
    fail(`Documentation file is too thin: ${file}`);
  }
}

const readme = existsSync(path.join(repoRoot, "README.md")) ? readRequired("README.md") : "";
if (!readme.includes("# AI MVP Starter Kit") || !readme.includes("# AI MVP Starter Kit / Стартовый набор для MVP с ИИ")) {
  fail("README.md must contain English and Russian sections in one file.");
} else {
  pass("README.md contains the required bilingual section headings.");
}

const publicIndex = existsSync(path.join(repoRoot, "public/index.html")) ? readRequired("public/index.html") : "";
for (const relativeAsset of ["./assets/css/app.css", "./assets/js/app.js", "./assets/js/translations.js"]) {
  if (!publicIndex.includes(relativeAsset)) {
    fail(`public/index.html is missing relative asset path: ${relativeAsset}`);
  }
}

const translations = existsSync(path.join(repoRoot, "public/assets/js/translations.js"))
  ? readRequired("public/assets/js/translations.js")
  : "";

for (const language of ["en", "ru", "kk"]) {
  const pattern = new RegExp(`\\b${language}\\s*:`);
  if (!pattern.test(translations)) {
    fail(`translations.js is missing language key: ${language}`);
  } else {
    pass(`translations.js contains ${language}`);
  }
}

for (const file of walkFiles(repoRoot)) {
  const stats = statSync(file);
  const rel = relative(file);
  if (stats.size === 0) {
    fail(`Empty file found: ${rel}`);
  }

  const extension = path.extname(file).toLowerCase();
  if (rel === "scripts/validate.mjs") {
    continue;
  }

  if ([".md", ".html", ".js", ".mjs", ".css", ".json", ".xml", ".txt", ".env", ".sql", ".svg"].includes(extension) || path.basename(file).startsWith(".")) {
    const content = readFileSync(file, "utf8");
    for (const pattern of secretPatterns) {
      if (pattern.test(content)) {
        fail(`Possible secret pattern found in ${rel}`);
      }
    }
  }
}

console.log("");
if (failures.length) {
  console.error(`Validation failed with ${failures.length} issue(s).`);
  process.exit(1);
}

console.log("Validation passed. Required files, documentation, translations, and basic safety checks look good.");
process.exit(0);
