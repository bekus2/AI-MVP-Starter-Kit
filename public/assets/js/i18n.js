/**
 * Project: AI MVP Starter Kit
 * File: public/assets/js/i18n.js
 * Author: Beck Sarbassov
 * Version: 0.1.0
 * Date released: 2026-06-16
 * Last updated: 2026-06-16
 * Copyright: © Beck Sarbassov. All rights reserved.
 *
 * EN: Language detection, LocalStorage persistence, and DOM translation.
 * RU: Определение языка, сохранение в LocalStorage и перевод DOM.
 */

(function initI18n(global) {
  const supportedLanguages = ["en", "ru", "kk"];
  const translations = global.AI_MVP_TRANSLATIONS || {};
  const storage = global.AIMVPStorage;
  let currentLanguage = normalizeLanguage(storage?.getLanguage());

  function normalizeLanguage(language) {
    return supportedLanguages.includes(language) ? language : "en";
  }

  function getValue(path, language = currentLanguage) {
    const keys = path.split(".");
    const selected = translations[normalizeLanguage(language)] || translations.en;
    const fallback = translations.en;

    const find = (source) => keys.reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), source);
    const value = find(selected);
    return value !== undefined ? value : find(fallback);
  }

  function interpolate(value, params = {}) {
    if (typeof value !== "string") {
      return value;
    }
    return value.replace(/\{(\w+)\}/g, (_, key) => params[key] ?? "");
  }

  function t(path, params = {}, language = currentLanguage) {
    const value = getValue(path, language);
    return interpolate(value, params);
  }

  function applyTranslations() {
    document.documentElement.lang = currentLanguage;
    document.title = t("meta.title");

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = t(element.dataset.i18n);
      if (typeof value === "string") {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = t(element.dataset.i18nPlaceholder);
      if (typeof value === "string") {
        element.setAttribute("placeholder", value);
      }
    });

    const selector = document.getElementById("languageSelect");
    if (selector) {
      selector.value = currentLanguage;
    }

    global.dispatchEvent(new CustomEvent("aimvp:languagechange", { detail: { language: currentLanguage } }));
  }

  function setLanguage(language) {
    currentLanguage = normalizeLanguage(language);
    storage?.setLanguage(currentLanguage);
    applyTranslations();
  }

  function getLanguage() {
    return currentLanguage;
  }

  function init() {
    const selector = document.getElementById("languageSelect");
    if (selector) {
      selector.value = currentLanguage;
      selector.addEventListener("change", (event) => {
        setLanguage(event.target.value);
      });
    }
    applyTranslations();
  }

  global.AIMVPI18n = {
    supportedLanguages,
    t,
    getLanguage,
    setLanguage,
    applyTranslations
  };

  document.addEventListener("DOMContentLoaded", init);
})(window);
