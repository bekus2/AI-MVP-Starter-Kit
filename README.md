# AI MVP Starter Kit

AI MVP Starter Kit is a dependency-free, GitHub-ready starter repository for developers, freelancers, students, vibe coders, AI-assisted developers, and small business automation specialists who want to start clean MVP projects with AI coding agents.

The toolkit includes an interactive web app, reusable AI prompt files, practical documentation, example mini projects, and a starter template that can be copied into a new project.

## Why This Project Exists

AI coding agents are powerful, but they work best when the project has clear context, clean requirements, safe rules, and a predictable structure. This repository helps you prepare those inputs before asking Codex, Claude Code, Cursor, Windsurf, Cline, or similar tools to build an MVP.

The goal is not to replace professional review. AI-generated code should always be reviewed, tested, and security-checked before production use.

## Who This Project Is For

- Developers who want a structured MVP kickoff workflow.
- Freelancers preparing project scopes for clients.
- Students learning practical project architecture.
- Vibe coders who want cleaner prompts and less rework.
- Small business automation specialists building internal tools.
- Teams that want reusable AI handoff documents.

## Features

- Interactive MVP project brief generator.
- AI agent task generator for Codex, Claude Code, Cursor, Windsurf, Cline, and other tools.
- MVP readiness checklist with LocalStorage progress.
- Starter project structure viewer.
- Local demo lead form with safe rendering and LocalStorage persistence.
- Multilingual UI support for English, Русский, and Қазақша.
- Reusable AI documentation templates.
- Static starter template with example SQL schema.
- Runnable examples: landing page, lead form, and mini CRM.
- No backend, database, build step, external CDN, API key, tracking script, or paid service required.

## Live Demo Instruction

Open the project directly in a browser:

```text
public/index.html
```

You can also run it through a local static server:

```bash
python -m http.server 8000 -d public
```

Then open:

```text
http://localhost:8000
```

For GitHub Pages, enable Pages for the repository and open the published repository URL. The root `index.html` redirects to `public/index.html`, so the project is compatible with GitHub Pages without a build step.

## Quick Start

1. Clone or download the repository.
2. Open `public/index.html` in a browser.
3. Choose a UI language: English, Русский, or Қазақша.
4. Fill in the MVP Project Brief Generator.
5. Generate an AI Agent Task.
6. Copy the generated prompt into Codex, Claude Code, Cursor, Windsurf, Cline, or another coding agent.
7. Use the `starter/` folder as a clean starting structure for the generated MVP.
8. Review, test, and document the generated code before using it in production.

## Project Structure

```text
Experimental-Project-003/
├── README.md
├── LICENSE
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
├── public/
│   ├── index.html
│   └── assets/
│       ├── css/app.css
│       ├── js/
│       └── img/preview.svg
├── ai/
│   ├── AI_RULES.md
│   ├── TASK.md
│   ├── PROJECT_CONTEXT.md
│   ├── HANDOFF.md
│   └── prompt files for Codex, Claude Code, Cursor, and reusable patterns
├── docs/
│   └── practical project documentation
├── starter/
│   └── reusable static MVP starter template
├── examples/
│   ├── landing-page/
│   ├── lead-form/
│   └── mini-crm/
└── scripts/
    └── validate.mjs
```

See `docs/PROJECT_STRUCTURE.md` for a detailed folder-by-folder explanation.

## Multilingual Support

The project UI supports:

- English
- Русский
- Қазақша

Translations are stored in `public/assets/js/translations.js` as a global dictionary so the app works when opened with `file://`. The language switcher saves the selected language in LocalStorage and falls back to English when no saved language exists.

## AI Agent Workflow

Recommended workflow:

1. Define the project idea.
2. Generate a project brief.
3. Generate an AI-ready task.
4. Ask the AI coding agent to create or improve the project.
5. Review the generated code.
6. Test locally.
7. Fix issues and security gaps.
8. Deploy only after validation.
9. Update documentation after each meaningful change.

## Included AI Files

- `ai/AI_RULES.md` — rules for AI coding agents.
- `ai/TASK.md` — reusable MVP task template.
- `ai/PROJECT_CONTEXT.md` — context for understanding this starter kit.
- `ai/HANDOFF.md` — continuation guide for another developer or agent.
- `ai/CODEX_PROMPTS.md` — prompts tailored for Codex.
- `ai/CLAUDE_PROMPTS.md` — prompts tailored for Claude Code.
- `ai/CURSOR_PROMPTS.md` — prompts tailored for Cursor.
- `ai/PROMPT_LIBRARY.md` — reusable prompt patterns for common project work.

## Security Principles

- Do not commit real secrets, tokens, API keys, passwords, private configuration, logs, or database dumps.
- Use `.env.example` for example configuration only.
- Treat LocalStorage as demo-only storage, not secure storage.
- Validate user input before processing it.
- Escape user-entered data before rendering.
- Review AI-generated code before production use.
- Keep dependencies minimal and review them before adoption.
- Do not include analytics or tracking scripts by default.

## Deployment Options

This project can be deployed as a static site using:

- GitHub Pages
- Static hosting
- Shared hosting
- VPS with any static web server
- Plesk file hosting
- Netlify-like static hosting

No deployment automation is included in this initial release. See `docs/DEPLOYMENT.md` for practical deployment notes.

## Roadmap

- v0.1.0 — Initial static toolkit.
- v0.2.0 — More starter templates.
- v0.3.0 — Export generated prompts as Markdown.
- v0.4.0 — GitHub issue templates.
- v0.5.0 — Optional backend starter.
- v1.0.0 — Stable release.

## Contributing

Contributions are welcome when they improve clarity, safety, documentation quality, starter templates, accessibility, localization, or practical AI workflows. Please read `CONTRIBUTING.md` before opening a pull request.

## License

This project is released under the MIT License. See `LICENSE`.

## Suggested GitHub repository description

Production-ready MVP starter kit for Codex, Claude Code, Cursor and AI-assisted web development.

## Suggested GitHub topics

```text
ai-coding
codex
claude-code
cursor
vibe-coding
mvp
starter-kit
javascript
html
css
open-source
project-template
```

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.

---

# AI MVP Starter Kit / Стартовый набор для MVP с ИИ

AI MVP Starter Kit — это готовый к GitHub стартовый набор без зависимостей для разработчиков, фрилансеров, студентов, vibe coders, AI-assisted developers и специалистов по автоматизации малого бизнеса.

Проект помогает быстро подготовить чистую структуру MVP, понятный бриф, задачу для AI-агента и набор документации для дальнейшей разработки.

## Зачем Нужен Проект

AI-агенты пишут код лучше, когда получают ясный контекст, требования, архитектурные правила и критерии приемки. Этот репозиторий помогает подготовить такие материалы перед работой с Codex, Claude Code, Cursor, Windsurf, Cline и похожими инструментами.

Проект не заменяет профессиональную проверку. Код, созданный с помощью ИИ, необходимо проверять, тестировать и анализировать с точки зрения безопасности перед использованием в production.

## Для Кого Проект

- Для разработчиков, которым нужен понятный старт MVP.
- Для фрилансеров, готовящих техническое задание для клиента.
- Для студентов, изучающих практическую структуру проектов.
- Для vibe coders, которые хотят получать более чистый результат от AI-агентов.
- Для специалистов по автоматизации малого бизнеса.
- Для команд, которым нужны повторяемые AI-документы и правила.

## Возможности

- Интерактивный генератор брифа MVP.
- Генератор задач для Codex, Claude Code, Cursor, Windsurf, Cline и других AI-агентов.
- Чек-лист готовности MVP с сохранением прогресса в LocalStorage.
- Просмотр структуры стартового проекта.
- Локальная демонстрационная форма лидов с безопасным выводом данных.
- Поддержка интерфейса на English, Русский и Қазақша.
- Готовые AI-документы и prompt-шаблоны.
- Стартовый шаблон проекта со структурой и примером SQL-схемы.
- Примеры: landing page, lead form, mini CRM.
- Нет backend, базы данных, сборки, CDN, API-ключей, трекинга и платных сервисов.

## Как Запустить

Откройте файл напрямую в браузере:

```text
public/index.html
```

Или запустите локальный сервер:

```bash
python -m http.server 8000 -d public
```

Затем откройте:

```text
http://localhost:8000
```

Для GitHub Pages достаточно включить Pages в настройках репозитория. Корневой `index.html` перенаправляет на `public/index.html`.

## Структура Проекта

```text
Experimental-Project-003/
├── README.md
├── LICENSE
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
├── public/
│   ├── index.html
│   └── assets/
├── ai/
├── docs/
├── starter/
├── examples/
└── scripts/
```

Подробное описание находится в `docs/PROJECT_STRUCTURE.md`.

## Мультиязычность

Интерфейс проекта поддерживает:

- English
- Русский
- Қазақша

Переводы находятся в `public/assets/js/translations.js`. Они подключаются напрямую через JavaScript, без `fetch`, чтобы проект корректно работал при открытии через `file://`. Выбранный язык сохраняется в LocalStorage, а по умолчанию используется English.

## Работа С AI-Агентами

Рекомендуемый рабочий процесс:

1. Определить идею проекта.
2. Сгенерировать бриф.
3. Сгенерировать задачу для AI-агента.
4. Передать задачу в Codex, Claude Code, Cursor, Windsurf, Cline или другой инструмент.
5. Проверить созданный код.
6. Протестировать проект локально.
7. Исправить ошибки и риски безопасности.
8. Выполнить деплой только после проверки.
9. Обновить документацию после изменений.

## Файлы Для AI-Разработки

- `ai/AI_RULES.md` — правила для AI-агентов.
- `ai/TASK.md` — шаблон задачи для нового MVP.
- `ai/PROJECT_CONTEXT.md` — контекст проекта.
- `ai/HANDOFF.md` — инструкция для передачи разработки.
- `ai/CODEX_PROMPTS.md` — prompts для Codex.
- `ai/CLAUDE_PROMPTS.md` — prompts для Claude Code.
- `ai/CURSOR_PROMPTS.md` — prompts для Cursor.
- `ai/PROMPT_LIBRARY.md` — библиотека reusable prompts.

## Безопасность

- Не храните реальные секреты в Git.
- Используйте `.env.example` только для примеров переменных.
- LocalStorage подходит только для демонстраций, а не для конфиденциальных данных.
- Проверяйте входные данные.
- Экранируйте пользовательский ввод перед выводом.
- Проверяйте AI-generated code перед production.
- Не добавляйте внешние зависимости без необходимости.
- Не подключайте трекинг и аналитику по умолчанию.

## Деплой

Проект можно разместить на:

- GitHub Pages
- Static hosting
- Shared hosting
- VPS
- Plesk
- Netlify-like static hosting

Автоматический деплой в версии v0.1.0 не настроен. Практические инструкции находятся в `docs/DEPLOYMENT.md`.

## Roadmap

- v0.1.0 — первый статический набор инструментов.
- v0.2.0 — больше стартовых шаблонов.
- v0.3.0 — экспорт prompt в Markdown.
- v0.4.0 — шаблоны GitHub issues.
- v0.5.0 — опциональный backend starter.
- v1.0.0 — стабильный релиз.

## Как Участвовать

Улучшения приветствуются, если они делают проект понятнее, безопаснее, полезнее, доступнее или лучше локализованным. Перед pull request прочитайте `CONTRIBUTING.md`.

## Лицензия

Проект распространяется по лицензии MIT. См. `LICENSE`.

Автор: Beck Sarbassov  
Дата создания: 2026-06-16  
Последнее обновление: 2026-06-16  
Авторские права: © Beck Sarbassov. Все права защищены.
