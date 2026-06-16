# Claude Code Prompts

Use these prompts with Claude Code for repository-level work.

## Architecture-First MVP Build

```text
Read the project documentation first:
- README.md
- AI_RULES.md
- TASK.md
- PROJECT_CONTEXT.md
- HANDOFF.md

Then build a complete MVP for:
[PROJECT NAME]

Priorities:
1. Working local run.
2. Clean structure.
3. Safe input and output handling.
4. Responsive UI.
5. Accurate documentation.

Before final response, run validation and summarize what changed, how to test, and what limitations remain.
```

## Security Hardening Review

```text
Review this project for practical security issues:
- exposed secrets;
- unsafe rendering;
- missing validation;
- insecure authentication assumptions;
- debug output;
- unsafe file access;
- weak deployment notes.

Fix what is in scope and document anything that requires a future backend or hosting change.
```

## Documentation Cleanup

```text
Make documentation consistent with the current code.

Rules:
- Do not invent features.
- Do not claim production readiness if checks are missing.
- Keep README practical and GitHub-friendly.
- Update handoff/context/task files only where behavior changed.
```

## Russian Note

Claude Code часто полезен для глубокого review. Просите его сначала прочитать контекст, а потом исправлять код и документацию.

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
