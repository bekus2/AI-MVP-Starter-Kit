/**
 * Project: AI MVP Starter Kit
 * File: public/assets/js/translations.js
 * Author: Beck Sarbassov
 * Version: 0.1.0
 * Date released: 2026-06-16
 * Last updated: 2026-06-16
 * Copyright: © Beck Sarbassov. All rights reserved.
 *
 * EN: Global translation dictionary for offline-friendly multilingual UI.
 * RU: Глобальный словарь переводов для multilingual UI без fetch-запросов.
 */

window.AI_MVP_TRANSLATIONS = {
  en: {
    meta: {
      title: "AI MVP Starter Kit"
    },
    accessibility: {
      skip: "Skip to main content"
    },
    language: {
      label: "Language",
      english: "English",
      russian: "Русский",
      kazakh: "Қазақша"
    },
    common: {
      copy: "Copy to clipboard",
      save: "Save to LocalStorage",
      clear: "Clear",
      copied: "Copied to clipboard.",
      copyFailed: "Copy failed. Select the text and copy it manually.",
      generated: "Generated.",
      saved: "Saved locally in this browser.",
      cleared: "Cleared.",
      fillFirst: "Generate content first.",
      empty: "Not specified"
    },
    hero: {
      eyebrow: "Open-source AI project kickoff toolkit",
      title: "AI MVP Starter Kit",
      subtitle: "Generate practical MVP briefs, AI coding tasks, and readiness checklists before you ask an agent to build.",
      quickStart: "Quick Start",
      generateTask: "Generate AI Task",
      viewChecklist: "View Checklist",
      statStack: "Stack",
      statStorage: "Storage",
      statLanguages: "Languages"
    },
    brief: {
      eyebrow: "MVP planning",
      title: "MVP Project Brief Generator",
      subtitle: "Turn rough project notes into a clean brief you can paste into an AI coding agent.",
      projectNameLabel: "Project name",
      projectNamePlaceholder: "Client Portal MVP",
      projectTypeLabel: "Project type",
      projectTypePlaceholder: "SaaS dashboard, landing page, CRM module",
      audienceLabel: "Target audience",
      audiencePlaceholder: "Small business owners",
      stackLabel: "Preferred stack",
      stackPlaceholder: "HTML, CSS, JavaScript",
      problemLabel: "Main problem",
      problemPlaceholder: "Describe the user problem this MVP should solve.",
      featuresLabel: "Core features",
      featuresPlaceholder: "List core features separated by commas or new lines.",
      deploymentLabel: "Deployment target",
      deploymentPlaceholder: "GitHub Pages, shared hosting, VPS",
      outputLanguageLabel: "Generated task language",
      generateButton: "Generate brief",
      outputLabel: "Generated brief",
      generatedTitle: "AI-Ready Project Brief",
      intro: "Use this brief as context for an AI coding agent. Review all generated code before production use.",
      labels: {
        name: "Project name",
        type: "Project type",
        audience: "Target audience",
        problem: "Main problem",
        features: "Core features",
        stack: "Preferred stack",
        deployment: "Deployment target",
        aiInstructions: "Instructions for the AI agent",
        acceptance: "Acceptance criteria"
      },
      aiInstructions: [
        "Build a complete, working MVP with clear structure and maintainable code.",
        "Use only the requested stack unless a dependency is technically justified.",
        "Document setup, usage, security notes, and known limitations.",
        "Do not leave unfinished placeholders or fake completed features."
      ],
      acceptance: [
        "The project runs locally using the documented steps.",
        "Core user flow works end to end.",
        "UI is responsive and accessible enough for keyboard usage.",
        "User input is validated and safely rendered.",
        "Documentation is updated with accurate run and deployment notes."
      ]
    },
    agent: {
      eyebrow: "AI task builder",
      title: "AI Agent Task Generator",
      subtitle: "Create a structured prompt with architecture, quality, security, documentation, and validation requirements.",
      agentLabel: "AI agent",
      projectTypeLabel: "Project type",
      qualityLabel: "Quality level",
      documentationLabel: "Documentation level",
      outputLanguageLabel: "Output language",
      generateButton: "Generate AI task",
      outputLabel: "Generated AI task",
      types: {
        landing: "Landing Page",
        saas: "SaaS MVP",
        crm: "CRM Module",
        admin: "Admin Panel",
        bot: "Telegram Bot",
        api: "API Integration",
        custom: "Custom"
      },
      quality: {
        prototype: "Prototype",
        mvp: "MVP",
        production: "Production-ready"
      },
      docs: {
        minimal: "Minimal",
        standard: "Standard",
        full: "Full"
      },
      taskTitle: "AI Coding Agent Task",
      summaryLabels: {
        agent: "Agent",
        projectType: "Project type",
        quality: "Quality level",
        documentation: "Documentation level"
      },
      sections: {
        goal: "Project goal",
        files: "Required files",
        architecture: "Architecture",
        quality: "Code quality rules",
        security: "Security rules",
        docs: "Documentation requirements",
        validation: "Validation checklist"
      },
      generated: {
        goal: "Create a {quality} {projectType} using a clean, maintainable structure. The result must be useful, runnable locally, and ready for review by a developer.",
        files: [
          "README.md with setup, run, usage, deployment, and limitation notes.",
          "Project source files separated by responsibility.",
          "Configuration example file without real secrets.",
          "Handoff or context documentation for future work."
        ],
        architecture: [
          "Keep public assets, source code, documentation, and configuration separated.",
          "Use clear module boundaries and descriptive names.",
          "Avoid unnecessary dependencies and avoid framework churn.",
          "Keep the first screen useful for the target user, not only promotional."
        ],
        quality: [
          "Use readable, formatted code with meaningful function names.",
          "Implement complete flows instead of empty placeholders.",
          "Handle empty states, errors, and mobile layout.",
          "Keep comments short and useful."
        ],
        security: [
          "Never commit real secrets or credentials.",
          "Validate input and escape output.",
          "Protect admin or private routes if the project includes them.",
          "Do not expose debug output in production."
        ],
        docs: [
          "Document how to install, run, test, and deploy.",
          "Document important decisions and limitations.",
          "Update documentation after code changes."
        ],
        validation: [
          "Run the project locally using the documented command.",
          "Check desktop and mobile layouts.",
          "Verify forms and generated state.",
          "Confirm no secrets or placeholder-only files are present."
        ]
      },
      reviewNote: "Important: review all AI-generated code before production use."
    },
    checklist: {
      eyebrow: "Launch readiness",
      title: "MVP Readiness Checklist",
      subtitle: "Track whether the project is clear enough for AI-assisted development and a responsible launch.",
      progressLabel: "MVP readiness",
      reset: "Reset checklist",
      categories: {
        idea: {
          title: "Idea validation",
          items: ["The target problem is written clearly.", "A real user group is defined.", "The first useful outcome is measurable."]
        },
        problem: {
          title: "User problem",
          items: ["The current painful workflow is described.", "The user benefit is specific.", "The MVP avoids solving unrelated problems."]
        },
        features: {
          title: "Core features",
          items: ["Must-have features are separated from nice-to-have ideas.", "The first user flow can be completed end to end.", "Each feature has a clear acceptance check."]
        },
        ux: {
          title: "UI/UX",
          items: ["The main screen supports the primary workflow.", "Forms have labels and useful validation.", "Mobile layout has no horizontal overflow."]
        },
        architecture: {
          title: "Architecture",
          items: ["Folders are separated by responsibility.", "Configuration is not mixed with source code.", "Future modules can be added without rewriting the whole project."]
        },
        security: {
          title: "Security",
          items: ["No real secrets are stored in the repository.", "User input is validated.", "Rendered user input is escaped."]
        },
        deployment: {
          title: "Deployment",
          items: ["Local run instructions are documented.", "Deployment target is selected.", "Production limitations are documented."]
        },
        documentation: {
          title: "Documentation",
          items: ["README explains install, run, and usage.", "AI task/context files are current.", "Handoff notes list known limitations."]
        },
        github: {
          title: "GitHub readiness",
          items: ["License is included.", "Contributing and security notes are included.", "Repository description and topics are prepared."]
        }
      }
    },
    structure: {
      eyebrow: "AI-ready foundation",
      title: "Starter Project Structure Viewer",
      subtitle: "A clean structure helps AI agents keep project context, documentation, code, and deployment notes separated.",
      tree: [
        "mvp-project/",
        "├── README.md                 Project overview, setup, usage, deployment notes",
        "├── AI_RULES.md               Rules AI agents must follow before editing",
        "├── TASK.md                   Current technical specification and acceptance criteria",
        "├── PROJECT_CONTEXT.md        Business logic, users, architecture, and constraints",
        "├── HANDOFF.md                Practical notes for the next developer or AI agent",
        "├── public/                   Browser-facing files and static assets",
        "├── src/                      Application logic grouped by responsibility",
        "├── database/                 Schema, migrations, seeds, or JSON storage notes",
        "├── docs/                     Extra guides, decisions, and deployment instructions",
        "└── deployment-checklist.md   Environment, security, backup, and release checks"
      ]
    },
    leads: {
      eyebrow: "Local form pattern",
      title: "Local Demo Lead Form",
      subtitle: "Submissions stay in this browser only. This pattern demonstrates validation, LocalStorage, and safe rendering.",
      nameLabel: "Name",
      namePlaceholder: "Alex Developer",
      emailLabel: "Email",
      emailPlaceholder: "alex@example.test",
      messageLabel: "Message",
      messagePlaceholder: "I want to plan a small CRM MVP.",
      saveLead: "Save demo lead",
      clearLeads: "Clear demo leads",
      tableTitle: "Saved demo leads",
      tableName: "Name",
      tableEmail: "Email",
      tableMessage: "Message",
      tableDate: "Saved",
      empty: "No demo leads saved yet.",
      saved: "Demo lead saved in LocalStorage.",
      cleared: "Demo leads cleared.",
      invalid: "Please enter a valid name, email, and message."
    },
    footer: {
      opensource: "Open-source starter for AI-assisted development.",
      githubReady: "GitHub-ready static project for clean MVP kickoff workflows.",
      languages: "UI languages: English, Русский, Қазақша."
    }
  },
  ru: {
    meta: {
      title: "AI MVP Starter Kit"
    },
    accessibility: {
      skip: "Перейти к основному содержанию"
    },
    language: {
      label: "Язык",
      english: "English",
      russian: "Русский",
      kazakh: "Қазақша"
    },
    common: {
      copy: "Скопировать",
      save: "Сохранить в LocalStorage",
      clear: "Очистить",
      copied: "Скопировано в буфер обмена.",
      copyFailed: "Не удалось скопировать. Выделите текст и скопируйте вручную.",
      generated: "Сгенерировано.",
      saved: "Сохранено локально в этом браузере.",
      cleared: "Очищено.",
      fillFirst: "Сначала сгенерируйте текст.",
      empty: "Не указано"
    },
    hero: {
      eyebrow: "Open-source набор для старта AI-проекта",
      title: "AI MVP Starter Kit",
      subtitle: "Генерируйте практичные MVP-брифы, задачи для AI-агентов и чек-листы готовности перед началом разработки.",
      quickStart: "Быстрый старт",
      generateTask: "Создать AI-задачу",
      viewChecklist: "Открыть чек-лист",
      statStack: "Стек",
      statStorage: "Хранилище",
      statLanguages: "Языки"
    },
    brief: {
      eyebrow: "Планирование MVP",
      title: "Генератор брифа MVP",
      subtitle: "Преобразуйте черновые заметки о проекте в чистый бриф для AI coding agent.",
      projectNameLabel: "Название проекта",
      projectNamePlaceholder: "Client Portal MVP",
      projectTypeLabel: "Тип проекта",
      projectTypePlaceholder: "SaaS dashboard, landing page, CRM module",
      audienceLabel: "Целевая аудитория",
      audiencePlaceholder: "Владельцы малого бизнеса",
      stackLabel: "Предпочтительный стек",
      stackPlaceholder: "HTML, CSS, JavaScript",
      problemLabel: "Основная проблема",
      problemPlaceholder: "Опишите проблему пользователя, которую должен решить MVP.",
      featuresLabel: "Ключевые функции",
      featuresPlaceholder: "Укажите функции через запятую или с новой строки.",
      deploymentLabel: "Цель деплоя",
      deploymentPlaceholder: "GitHub Pages, shared hosting, VPS",
      outputLanguageLabel: "Язык сгенерированной задачи",
      generateButton: "Сгенерировать бриф",
      outputLabel: "Сгенерированный бриф",
      generatedTitle: "Бриф проекта для AI-агента",
      intro: "Используйте этот бриф как контекст для AI coding agent. Перед production обязательно проверьте весь сгенерированный код.",
      labels: {
        name: "Название проекта",
        type: "Тип проекта",
        audience: "Целевая аудитория",
        problem: "Основная проблема",
        features: "Ключевые функции",
        stack: "Предпочтительный стек",
        deployment: "Цель деплоя",
        aiInstructions: "Инструкции для AI-агента",
        acceptance: "Критерии приемки"
      },
      aiInstructions: [
        "Создай полноценный рабочий MVP с понятной структурой и поддерживаемым кодом.",
        "Используй только выбранный стек, если новая зависимость не имеет технического обоснования.",
        "Документируй запуск, использование, безопасность и известные ограничения.",
        "Не оставляй незавершенные заглушки и не выдавай нереализованные функции за готовые."
      ],
      acceptance: [
        "Проект запускается локально по описанным шагам.",
        "Основной пользовательский сценарий работает полностью.",
        "Интерфейс адаптивный и доступен для работы с клавиатуры.",
        "Пользовательский ввод проверяется и безопасно выводится.",
        "Документация обновлена и содержит актуальные инструкции по запуску и деплою."
      ]
    },
    agent: {
      eyebrow: "Конструктор AI-задач",
      title: "Генератор задач для AI-агента",
      subtitle: "Создайте структурированный prompt с требованиями к архитектуре, качеству, безопасности, документации и проверке.",
      agentLabel: "AI-агент",
      projectTypeLabel: "Тип проекта",
      qualityLabel: "Уровень качества",
      documentationLabel: "Уровень документации",
      outputLanguageLabel: "Язык результата",
      generateButton: "Сгенерировать AI-задачу",
      outputLabel: "Сгенерированная AI-задача",
      types: {
        landing: "Landing Page",
        saas: "SaaS MVP",
        crm: "CRM Module",
        admin: "Admin Panel",
        bot: "Telegram Bot",
        api: "API Integration",
        custom: "Custom"
      },
      quality: {
        prototype: "Prototype",
        mvp: "MVP",
        production: "Production-ready"
      },
      docs: {
        minimal: "Minimal",
        standard: "Standard",
        full: "Full"
      },
      taskTitle: "Задача для AI coding agent",
      summaryLabels: {
        agent: "AI-агент",
        projectType: "Тип проекта",
        quality: "Уровень качества",
        documentation: "Уровень документации"
      },
      sections: {
        goal: "Цель проекта",
        files: "Обязательные файлы",
        architecture: "Архитектура",
        quality: "Правила качества кода",
        security: "Правила безопасности",
        docs: "Требования к документации",
        validation: "Чек-лист проверки"
      },
      generated: {
        goal: "Создай {quality} проект типа {projectType} с чистой и поддерживаемой структурой. Результат должен быть полезным, запускаться локально и быть готовым к проверке разработчиком.",
        files: [
          "README.md с установкой, запуском, использованием, деплоем и ограничениями.",
          "Исходные файлы проекта, разделенные по ответственности.",
          "Пример конфигурации без реальных секретов.",
          "Handoff или context-документация для дальнейшей работы."
        ],
        architecture: [
          "Разделяй публичные assets, исходный код, документацию и конфигурацию.",
          "Используй понятные границы модулей и ясные названия.",
          "Не добавляй лишние зависимости и не меняй стек без причины.",
          "Первый экран должен быть полезен пользователю, а не только рекламным."
        ],
        quality: [
          "Пиши читаемый форматированный код с понятными именами функций.",
          "Реализуй полноценные сценарии вместо пустых заглушек.",
          "Обрабатывай пустые состояния, ошибки и mobile layout.",
          "Комментарии должны быть короткими и полезными."
        ],
        security: [
          "Не коммить реальные секреты или учетные данные.",
          "Проверяй входные данные и экранируй вывод.",
          "Защищай admin/private routes, если они есть.",
          "Не показывай debug output в production."
        ],
        docs: [
          "Опиши установку, запуск, тестирование и деплой.",
          "Опиши важные решения и ограничения.",
          "Обновляй документацию после изменений кода."
        ],
        validation: [
          "Запусти проект локально по документации.",
          "Проверь desktop и mobile layouts.",
          "Проверь формы и сохранение состояния.",
          "Убедись, что нет секретов и файлов, состоящих только из placeholders."
        ]
      },
      reviewNote: "Важно: перед production весь AI-generated code должен быть проверен человеком."
    },
    checklist: {
      eyebrow: "Готовность к запуску",
      title: "Чек-лист готовности MVP",
      subtitle: "Проверьте, достаточно ли проект понятен для AI-assisted development и ответственного запуска.",
      progressLabel: "Готовность MVP",
      reset: "Сбросить чек-лист",
      categories: {
        idea: {
          title: "Проверка идеи",
          items: ["Целевая проблема описана ясно.", "Реальная группа пользователей определена.", "Первый полезный результат можно измерить."]
        },
        problem: {
          title: "Проблема пользователя",
          items: ["Описан текущий болезненный процесс.", "Пользовательская польза конкретна.", "MVP не пытается решать лишние задачи."]
        },
        features: {
          title: "Ключевые функции",
          items: ["Must-have функции отделены от nice-to-have идей.", "Первый пользовательский сценарий проходит полностью.", "У каждой функции есть понятный критерий приемки."]
        },
        ux: {
          title: "UI/UX",
          items: ["Главный экран поддерживает основной сценарий.", "У форм есть labels и полезная валидация.", "На mobile нет горизонтального overflow."]
        },
        architecture: {
          title: "Архитектура",
          items: ["Папки разделены по ответственности.", "Конфигурация не смешана с исходным кодом.", "Будущие модули можно добавить без полной переработки."]
        },
        security: {
          title: "Безопасность",
          items: ["В репозитории нет реальных секретов.", "Пользовательский ввод проверяется.", "Пользовательский ввод экранируется перед выводом."]
        },
        deployment: {
          title: "Деплой",
          items: ["Инструкция локального запуска задокументирована.", "Цель деплоя выбрана.", "Production-ограничения описаны."]
        },
        documentation: {
          title: "Документация",
          items: ["README объясняет установку, запуск и использование.", "AI task/context файлы актуальны.", "Handoff notes перечисляют известные ограничения."]
        },
        github: {
          title: "Готовность GitHub",
          items: ["Лицензия добавлена.", "Contributing и security notes добавлены.", "Описание репозитория и topics подготовлены."]
        }
      }
    },
    structure: {
      eyebrow: "AI-ready основа",
      title: "Просмотр структуры стартового проекта",
      subtitle: "Чистая структура помогает AI-агентам разделять контекст, документацию, код и деплой.",
      tree: [
        "mvp-project/",
        "├── README.md                 Обзор проекта, запуск, использование, деплой",
        "├── AI_RULES.md               Правила для AI-агентов перед изменениями",
        "├── TASK.md                   Техническое задание и критерии приемки",
        "├── PROJECT_CONTEXT.md        Бизнес-логика, пользователи, архитектура, ограничения",
        "├── HANDOFF.md                Практические заметки для следующего разработчика или AI",
        "├── public/                   Публичные файлы браузера и static assets",
        "├── src/                      Логика приложения по зонам ответственности",
        "├── database/                 Schema, migrations, seeds или JSON storage notes",
        "├── docs/                     Дополнительные guides, decisions и deployment instructions",
        "└── deployment-checklist.md   Проверка environment, security, backup и release"
      ]
    },
    leads: {
      eyebrow: "Локальный паттерн формы",
      title: "Демо-форма лидов",
      subtitle: "Заявки остаются только в этом браузере. Пример показывает validation, LocalStorage и безопасный вывод.",
      nameLabel: "Имя",
      namePlaceholder: "Алексей Разработчик",
      emailLabel: "Email",
      emailPlaceholder: "alex@example.test",
      messageLabel: "Сообщение",
      messagePlaceholder: "Хочу спланировать небольшой CRM MVP.",
      saveLead: "Сохранить demo lead",
      clearLeads: "Очистить demo leads",
      tableTitle: "Сохраненные demo leads",
      tableName: "Имя",
      tableEmail: "Email",
      tableMessage: "Сообщение",
      tableDate: "Сохранено",
      empty: "Demo leads пока не сохранены.",
      saved: "Demo lead сохранен в LocalStorage.",
      cleared: "Demo leads очищены.",
      invalid: "Введите корректное имя, email и сообщение."
    },
    footer: {
      opensource: "Open-source starter для AI-assisted development.",
      githubReady: "GitHub-ready static project для чистого старта MVP.",
      languages: "Языки интерфейса: English, Русский, Қазақша."
    }
  },
  kk: {
    meta: {
      title: "AI MVP Starter Kit"
    },
    accessibility: {
      skip: "Негізгі мазмұнға өту"
    },
    language: {
      label: "Тіл",
      english: "English",
      russian: "Русский",
      kazakh: "Қазақша"
    },
    common: {
      copy: "Көшіру",
      save: "LocalStorage ішіне сақтау",
      clear: "Тазалау",
      copied: "Буферге көшірілді.",
      copyFailed: "Көшіру орындалмады. Мәтінді белгілеп, қолмен көшіріңіз.",
      generated: "Жасалды.",
      saved: "Осы браузерде жергілікті сақталды.",
      cleared: "Тазаланды.",
      fillFirst: "Алдымен мәтін жасаңыз.",
      empty: "Көрсетілмеген"
    },
    hero: {
      eyebrow: "AI-жоба бастауға арналған open-source құрал",
      title: "AI MVP Starter Kit",
      subtitle: "AI агентіне тапсырма бермес бұрын MVP брифін, кодтау тапсырмасын және дайындық чек-листін жасаңыз.",
      quickStart: "Жылдам бастау",
      generateTask: "AI тапсырма жасау",
      viewChecklist: "Чек-лист көру",
      statStack: "Стек",
      statStorage: "Сақтау",
      statLanguages: "Тілдер"
    },
    brief: {
      eyebrow: "MVP жоспарлау",
      title: "MVP жоба брифін жасау",
      subtitle: "Жоба туралы бастапқы ойларды AI coding agent үшін түсінікті брифке айналдырыңыз.",
      projectNameLabel: "Жоба атауы",
      projectNamePlaceholder: "Client Portal MVP",
      projectTypeLabel: "Жоба түрі",
      projectTypePlaceholder: "SaaS dashboard, landing page, CRM module",
      audienceLabel: "Мақсатты аудитория",
      audiencePlaceholder: "Шағын бизнес иелері",
      stackLabel: "Қалаулы стек",
      stackPlaceholder: "HTML, CSS, JavaScript",
      problemLabel: "Негізгі мәселе",
      problemPlaceholder: "Бұл MVP шешуі керек пайдаланушы мәселесін сипаттаңыз.",
      featuresLabel: "Негізгі функциялар",
      featuresPlaceholder: "Функцияларды үтірмен немесе жаңа жолмен жазыңыз.",
      deploymentLabel: "Деплой мақсаты",
      deploymentPlaceholder: "GitHub Pages, shared hosting, VPS",
      outputLanguageLabel: "Жасалатын тапсырма тілі",
      generateButton: "Бриф жасау",
      outputLabel: "Жасалған бриф",
      generatedTitle: "AI агентіне арналған жоба брифі",
      intro: "Бұл брифті AI coding agent үшін контекст ретінде қолданыңыз. Production алдында жасалған кодты міндетті түрде тексеріңіз.",
      labels: {
        name: "Жоба атауы",
        type: "Жоба түрі",
        audience: "Мақсатты аудитория",
        problem: "Негізгі мәселе",
        features: "Негізгі функциялар",
        stack: "Қалаулы стек",
        deployment: "Деплой мақсаты",
        aiInstructions: "AI агентіне арналған нұсқаулық",
        acceptance: "Қабылдау критерийлері"
      },
      aiInstructions: [
        "Түсінікті құрылымы және қолдауға ыңғайлы коды бар толық жұмыс істейтін MVP жаса.",
        "Техникалық негіз болмаса, таңдалған стектен шықпа.",
        "Іске қосу, қолдану, қауіпсіздік және белгілі шектеулерді құжатта.",
        "Аяқталмаған бос жер қалдырма және дайын емес функцияны дайын деп көрсетпе."
      ],
      acceptance: [
        "Жоба құжаттағы қадамдар бойынша жергілікті іске қосылады.",
        "Негізгі пайдаланушы сценарийі толық жұмыс істейді.",
        "Интерфейс адаптивті және пернетақтамен қолдануға ыңғайлы.",
        "Пайдаланушы енгізген дерек тексеріліп, қауіпсіз көрсетіледі.",
        "Құжаттама іске қосу және деплой бойынша нақты нұсқаулық береді."
      ]
    },
    agent: {
      eyebrow: "AI тапсырма құрастыру",
      title: "AI агентіне арналған тапсырма генераторы",
      subtitle: "Архитектура, сапа, қауіпсіздік, құжаттама және тексеру талаптары бар құрылымды prompt жасаңыз.",
      agentLabel: "AI агент",
      projectTypeLabel: "Жоба түрі",
      qualityLabel: "Сапа деңгейі",
      documentationLabel: "Құжаттама деңгейі",
      outputLanguageLabel: "Нәтиже тілі",
      generateButton: "AI тапсырма жасау",
      outputLabel: "Жасалған AI тапсырма",
      types: {
        landing: "Landing Page",
        saas: "SaaS MVP",
        crm: "CRM Module",
        admin: "Admin Panel",
        bot: "Telegram Bot",
        api: "API Integration",
        custom: "Custom"
      },
      quality: {
        prototype: "Prototype",
        mvp: "MVP",
        production: "Production-ready"
      },
      docs: {
        minimal: "Minimal",
        standard: "Standard",
        full: "Full"
      },
      taskTitle: "AI coding agent тапсырмасы",
      summaryLabels: {
        agent: "AI агент",
        projectType: "Жоба түрі",
        quality: "Сапа деңгейі",
        documentation: "Құжаттама деңгейі"
      },
      sections: {
        goal: "Жоба мақсаты",
        files: "Қажетті файлдар",
        architecture: "Архитектура",
        quality: "Код сапасының ережелері",
        security: "Қауіпсіздік ережелері",
        docs: "Құжаттама талаптары",
        validation: "Тексеру чек-листі"
      },
      generated: {
        goal: "{quality} деңгейіндегі {projectType} жобасын таза және қолдауға ыңғайлы құрылыммен жаса. Нәтиже пайдалы, жергілікті іске қосылатын және әзірлеуші тексеруіне дайын болуы керек.",
        files: [
          "README.md: орнату, іске қосу, қолдану, деплой және шектеулер.",
          "Жауапкершілігі бойынша бөлінген жоба файлдары.",
          "Нақты құпияларсыз конфигурация мысалы.",
          "Келесі жұмысқа арналған handoff немесе context құжаты."
        ],
        architecture: [
          "Public assets, source code, documentation және configuration бөлек болсын.",
          "Модуль шекаралары және атаулар түсінікті болсын.",
          "Қажетсіз dependencies қоспа және стекті себепсіз ауыстырма.",
          "Бірінші экран пайдаланушыға нақты пайдалы болсын."
        ],
        quality: [
          "Оқылатын, форматталған және атаулары түсінікті код жаз.",
          "Бос placeholders орнына толық сценарийлерді іске асыр.",
          "Empty state, error және mobile layout жағдайларын тексер.",
          "Пікірлер қысқа әрі пайдалы болсын."
        ],
        security: [
          "Нақты құпиялар мен credentials коммитке түспесін.",
          "Input тексеріліп, output қауіпсіз көрсетілсін.",
          "Admin немесе private routes болса, олар қорғалсын.",
          "Production ішінде debug output көрінбесін."
        ],
        docs: [
          "Орнату, іске қосу, тестілеу және деплойды құжатта.",
          "Маңызды шешімдер мен шектеулерді жаз.",
          "Код өзгерсе, құжаттаманы жаңарт."
        ],
        validation: [
          "Жобаны құжаттағы командамен жергілікті іске қос.",
          "Desktop және mobile layouts тексер.",
          "Forms және state saving жұмысын тексер.",
          "Құпиялар және тек placeholder ғана бар файлдар жоқ екенін раста."
        ]
      },
      reviewNote: "Маңызды: production алдында барлық AI-generated code адам тарапынан тексерілуі керек."
    },
    checklist: {
      eyebrow: "Іске қосуға дайындық",
      title: "MVP тексеру тізімі",
      subtitle: "Жоба AI-assisted development және жауапты іске қосу үшін жеткілікті анық па екенін тексеріңіз.",
      progressLabel: "MVP дайындығы",
      reset: "Чек-листті тазалау",
      categories: {
        idea: {
          title: "Идеяны тексеру",
          items: ["Мақсатты мәселе анық жазылған.", "Нақты пайдаланушы тобы анықталған.", "Алғашқы пайдалы нәтиже өлшенеді."]
        },
        problem: {
          title: "Пайдаланушы мәселесі",
          items: ["Қазіргі қиын workflow сипатталған.", "Пайдаланушыға пайдасы нақты.", "MVP артық мәселелерді шешуге тырыспайды."]
        },
        features: {
          title: "Негізгі функциялар",
          items: ["Must-have функциялар nice-to-have идеялардан бөлінген.", "Алғашқы пайдаланушы сценарийі толық өтеді.", "Әр функцияның қабылдау шарты бар."]
        },
        ux: {
          title: "UI/UX",
          items: ["Негізгі экран басты workflow-ды қолдайды.", "Forms ішінде labels және пайдалы validation бар.", "Mobile экранда horizontal overflow жоқ."]
        },
        architecture: {
          title: "Архитектура",
          items: ["Папкалар жауапкершілік бойынша бөлінген.", "Configuration source code-пен араласпайды.", "Келешек modules толық қайта жазусыз қосылады."]
        },
        security: {
          title: "Қауіпсіздік",
          items: ["Репозиторийде нақты құпиялар жоқ.", "Пайдаланушы енгізген дерек тексеріледі.", "Көрсетілетін пайдаланушы дерегі escape жасалады."]
        },
        deployment: {
          title: "Деплой",
          items: ["Жергілікті іске қосу нұсқаулығы бар.", "Деплой мақсаты таңдалған.", "Production шектеулері жазылған."]
        },
        documentation: {
          title: "Құжаттама",
          items: ["README орнату, іске қосу және қолдануды түсіндіреді.", "AI task/context файлдары жаңартылған.", "Handoff notes белгілі шектеулерді көрсетеді."]
        },
        github: {
          title: "GitHub дайындығы",
          items: ["License қосылған.", "Contributing және security notes қосылған.", "Repository description және topics дайын."]
        }
      }
    },
    structure: {
      eyebrow: "AI-ready негіз",
      title: "Starter жоба құрылымы",
      subtitle: "Таза құрылым AI агенттеріне контекст, құжаттама, код және деплойды бөлек ұстауға көмектеседі.",
      tree: [
        "mvp-project/",
        "├── README.md                 Жоба шолуы, іске қосу, қолдану, деплой",
        "├── AI_RULES.md               AI агенттері өзгеріс алдында оқитын ережелер",
        "├── TASK.md                   Техникалық тапсырма және қабылдау критерийлері",
        "├── PROJECT_CONTEXT.md        Бизнес логика, users, architecture, constraints",
        "├── HANDOFF.md                Келесі developer немесе AI agent үшін notes",
        "├── public/                   Browser-facing files және static assets",
        "├── src/                      Application logic responsibility бойынша",
        "├── database/                 Schema, migrations, seeds немесе JSON storage notes",
        "├── docs/                     Guides, decisions және deployment instructions",
        "└── deployment-checklist.md   Environment, security, backup және release checks"
      ]
    },
    leads: {
      eyebrow: "Жергілікті form pattern",
      title: "Demo lead form",
      subtitle: "Өтінімдер тек осы браузерде қалады. Бұл validation, LocalStorage және safe rendering үлгісі.",
      nameLabel: "Аты",
      namePlaceholder: "Алекс Әзірлеуші",
      emailLabel: "Email",
      emailPlaceholder: "alex@example.test",
      messageLabel: "Хабарлама",
      messagePlaceholder: "Кіші CRM MVP жоспарлағым келеді.",
      saveLead: "Demo lead сақтау",
      clearLeads: "Demo leads тазалау",
      tableTitle: "Сақталған demo leads",
      tableName: "Аты",
      tableEmail: "Email",
      tableMessage: "Хабарлама",
      tableDate: "Сақталды",
      empty: "Demo leads әлі сақталған жоқ.",
      saved: "Demo lead LocalStorage ішіне сақталды.",
      cleared: "Demo leads тазаланды.",
      invalid: "Дұрыс name, email және message енгізіңіз."
    },
    footer: {
      opensource: "AI-assisted development үшін open-source starter.",
      githubReady: "Таза MVP бастауға арналған GitHub-ready static project.",
      languages: "Интерфейс тілдері: English, Русский, Қазақша."
    }
  }
};
