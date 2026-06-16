/**
 * Project: AI MVP Starter Kit
 * File: public/assets/js/security.js
 * Author: Beck Sarbassov
 * Version: 0.1.0
 * Date released: 2026-06-16
 * Last updated: 2026-06-16
 * Copyright: © Beck Sarbassov. All rights reserved.
 *
 * EN: Frontend helpers for escaping and safe text rendering.
 * RU: Frontend helpers для экранирования и безопасного вывода текста.
 */

(function initSecurity(global) {
  const htmlMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };

  /**
   * EN: Escapes user-controlled text before HTML rendering.
   * RU: Экранирует пользовательский текст перед выводом в HTML.
   *
   * @param {unknown} value Input value / Входное значение
   * @returns {string} Escaped text / Экранированный текст
   */
  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => htmlMap[char]);
  }

  function safeSetText(element, value) {
    if (!element) {
      return;
    }
    element.textContent = String(value ?? "");
  }

  global.AIMVPSecurity = {
    escapeHTML,
    safeSetText
  };
})(window);
