# Handoff

## What This Project Is

AI MVP Starter Kit is a static, dependency-free public GitHub project for preparing MVP briefs, AI-agent tasks, readiness checklists, starter structures, and examples.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage
- SVG
- Node.js built-in modules for validation only

## Important Files

- `README.md` — main bilingual documentation.
- `public/index.html` — main web app.
- `public/assets/js/app.js` — generator, checklist, and lead-form logic.
- `public/assets/js/translations.js` — EN/RU/KK translations.
- `public/assets/js/security.js` — safe rendering helpers.
- `ai/` — AI-agent rules and prompts.
- `docs/` — practical documentation.
- `starter/` — reusable starter template.
- `examples/` — runnable examples.
- `scripts/validate.mjs` — repository validation script.

## Install And Run

No installation is required. Open:

```text
public/index.html
```

Or run:

```bash
python -m http.server 8000 -d public
```

## Deploy

Deploy as a static site. GitHub Pages can serve the root `index.html`, which redirects to the app in `public/index.html`.

## Do Not Change Without Understanding

- Translation key names used by `data-i18n` attributes.
- LocalStorage keys in `storage.js`.
- Safe rendering helpers in `security.js`.
- Relative path assumptions for GitHub Pages compatibility.

## Unfinished Tasks

- No automated browser test suite is included in v0.1.0.
- No backend starter is included yet.
- No deployment workflow is included yet.

## Future Improvements

- Add Markdown export for generated prompts.
- Add GitHub issue templates.
- Add optional backend starter.
- Add browser automation tests.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
