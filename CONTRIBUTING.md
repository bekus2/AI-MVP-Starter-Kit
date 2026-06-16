# Contributing

Thank you for considering a contribution to AI MVP Starter Kit.

## Good Contribution Areas

- Clearer documentation.
- Better AI prompt patterns.
- Safer starter templates.
- Accessibility improvements.
- Better English, Russian, or Kazakh translations.
- Additional dependency-free examples.
- Validation script improvements.

## Before You Start

1. Read `README.md`.
2. Read `ai/AI_RULES.md`.
3. Read `docs/PROJECT_STRUCTURE.md`.
4. Check open issues or describe the change clearly before doing large work.

## Development Rules

- Keep the project dependency-free unless a future task explicitly changes that decision.
- Keep `public/index.html` runnable through direct browser opening.
- Use relative paths.
- Do not add analytics, tracking scripts, real secrets, or external CDN dependencies.
- Preserve multilingual support for English, Русский, and Қазақша.
- Escape user-entered data before rendering it.
- Update documentation when behavior changes.

## Pull Request Checklist

- The app still opens from `public/index.html`.
- `node scripts/validate.mjs` passes.
- No required documentation file is missing.
- No empty placeholder files were added.
- UI works on desktop and mobile widths.
- New user-facing text has translations where needed.
- The change is documented in `CHANGELOG.md` when meaningful.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
