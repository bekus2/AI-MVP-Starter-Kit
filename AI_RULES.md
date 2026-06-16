# AI Rules

These root rules apply to AI MVP Starter Kit and future work in this repository.

## Required Reading Before Changes

- `README.md`
- `HANDOFF.md`
- `PROJECT_CONTEXT.md`
- `Codex_History.md`
- `TASK.md`
- `AI_RULES.md`
- `ai/AI_RULES.md`

## Development Rules

- Build complete working features, not empty demos or unfinished scaffolds.
- Keep the project dependency-free unless the task explicitly requires otherwise.
- Keep the app runnable by opening `public/index.html` directly in a browser.
- Use relative paths.
- Preserve English, Русский, and Қазақша UI support.
- Update relevant documentation when behavior changes.
- Keep naming clear and maintainable.
- Do not fake completed features or validation.

## Security Rules

- Do not commit real secrets, tokens, API keys, passwords, private configuration, logs, or dumps.
- Escape user-entered data before rendering.
- Validate form input before processing.
- Treat LocalStorage as demo-only storage.
- Do not add analytics or tracking scripts by default.

## Testing Rules

- Run `node scripts/validate.mjs` before final delivery.
- Manually open `public/index.html` or serve it locally when changing UI behavior.
- Check mobile layout when changing CSS.

## Final Report Format

Include what changed, changed files, how to run, how to validate, security notes, documentation updates, limitations, and recommended next steps.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
