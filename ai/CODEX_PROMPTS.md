# Codex Prompts

Use these prompts with Codex when starting or improving an MVP project.

## Create A New MVP

```text
You are working in this repository. Read README.md, AI_RULES.md, TASK.md, PROJECT_CONTEXT.md, and HANDOFF.md before editing.

Build a complete working MVP for:
[PROJECT NAME]

Problem:
[PROBLEM]

Target users:
[USERS]

Required features:
[FEATURES]

Stack:
[STACK]

Requirements:
- Create complete working code, not placeholders.
- Keep architecture clean and maintainable.
- Validate inputs and escape user-entered output.
- Do not commit real secrets.
- Update documentation.
- Run available validation commands.
- Summarize limitations honestly.
```

## Review And Fix Existing Project

```text
Review the repository for missing files, broken links, JavaScript errors, translation gaps, security risks, mobile layout issues, and documentation inconsistencies.

Fix the issues you find. Keep changes focused. Run validation before finishing. Do not push or commit unless explicitly asked.
```

## Add Multilingual Support

```text
Add multilingual UI support for English, Russian, and Kazakh.

Requirements:
- Add a language switcher.
- Save language selection in LocalStorage.
- Default to English.
- Use human-readable translations.
- Do not leave empty translation values.
- Keep existing behavior working.
```

## Russian Note

Codex хорошо работает, когда задача описывает не только "что сделать", но и критерии приемки, безопасность, ограничения и файлы документации.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
