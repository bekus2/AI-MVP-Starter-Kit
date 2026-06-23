# Quick Start

AI MVP Starter Kit runs without installation, build tools, external services, or API keys.

## 1. Clone The Repository

```bash
git clone https://github.com/bekus2/AI-MVP-Starter-Kit.git
cd AI-MVP-Starter-Kit
```

## 2. Open The App

Open this file directly in your browser:

```text
public/index.html
```

Or run a local static server:

```bash
python -m http.server 8000 -d public
```

Then open:

```text
http://localhost:8000
```

## 3. Use The Generators

1. Select a UI language: English, Русский, or Қазақша.
2. Fill in the MVP Project Brief Generator.
3. Generate the brief.
4. Fill in the AI Agent Task Generator.
5. Generate the AI-ready task.
6. Copy the generated output into Codex, Claude Code, Cursor, Windsurf, Cline, or another AI coding agent.

## 4. Use The Starter Folder

The `starter/` folder contains a small static MVP template with:

- landing section;
- feature section;
- contact or lead form demo;
- simple JavaScript validation;
- responsive CSS;
- example SQL schema.

Copy it into a new repository when you want a clean starting point.

## 5. Customize The Project

- Edit `public/index.html` for structure.
- Edit `public/assets/css/app.css` for layout and styling.
- Edit `public/assets/js/translations.js` for EN/RU/KK text.
- Edit `ai/` files for AI-agent rules and prompt templates.
- Edit `docs/` when workflow or deployment notes change.

## 6. Validate

Run:

```bash
node scripts/validate.mjs
```

The script checks required files, documentation, translations, and empty placeholder risks.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-23  
Copyright: © Beck Sarbassov. All rights reserved.
