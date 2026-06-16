# Localization

The main app supports three UI languages:

- English
- Русский
- Қазақша

## How Translations Work

Translations are stored in:

```text
public/assets/js/translations.js
```

The file defines:

```js
window.AI_MVP_TRANSLATIONS = {
  en: {},
  ru: {},
  kk: {}
};
```

The app does not fetch JSON translation files. This keeps the project compatible with direct browser opening through `file://`.

## Language Switching

The language switcher:

- allows English, Русский, and Қазақша;
- saves the selected language in LocalStorage;
- loads the saved language on reload;
- defaults to English if no saved language exists;
- falls back to English if a translation key is missing.

## HTML Attributes

Use:

```html
data-i18n="hero.title"
data-i18n-placeholder="brief.projectNamePlaceholder"
```

`i18n.js` applies translated text and placeholders after the DOM is ready.

## Adding A New Translation Key

1. Add the English key first.
2. Add the Russian value.
3. Add the Kazakh value.
4. Avoid empty values.
5. Run `node scripts/validate.mjs`.
6. Check the UI in all supported languages.

## Kazakh Text Quality

Use natural Kazakh Cyrillic text where appropriate. Avoid leaving English placeholders in core UI labels unless the term is a technical product name or commonly used developer term.

Examples:

- Қазақша
- Жоба атауы
- MVP тексеру тізімі
- Жасанды интеллект агентіне арналған тапсырма

Author: Beck Sarbassov  
Date created: 2026-06-16  
Last updated: 2026-06-16  
Copyright: © Beck Sarbassov. All rights reserved.
