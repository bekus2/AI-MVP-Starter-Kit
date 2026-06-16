/**
 * Project: AI MVP Starter Kit
 * File: public/assets/js/storage.js
 * Author: Beck Sarbassov
 * Version: 0.1.0
 * Date released: 2026-06-16
 * Last updated: 2026-06-16
 * Copyright: © Beck Sarbassov. All rights reserved.
 *
 * EN: Safe LocalStorage wrapper for app state and demo data.
 * RU: Безопасная обертка LocalStorage для состояния приложения и demo data.
 */

(function initStorage(global) {
  const prefix = "aiMvpStarterKit:";
  const keys = {
    language: `${prefix}language`,
    brief: `${prefix}brief`,
    checklist: `${prefix}checklist`,
    leads: `${prefix}leads`
  };

  function read(key, fallback = null) {
    try {
      const raw = global.localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (error) {
      console.warn("LocalStorage read failed:", error);
      return fallback;
    }
  }

  function write(key, value) {
    try {
      global.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn("LocalStorage write failed:", error);
      return false;
    }
  }

  function remove(key) {
    try {
      global.localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn("LocalStorage remove failed:", error);
      return false;
    }
  }

  global.AIMVPStorage = {
    keys,
    getLanguage: () => read(keys.language, "en"),
    setLanguage: (language) => write(keys.language, language),
    getBrief: () => read(keys.brief, ""),
    setBrief: (brief) => write(keys.brief, brief),
    clearBrief: () => remove(keys.brief),
    getChecklist: () => read(keys.checklist, {}),
    setChecklist: (state) => write(keys.checklist, state),
    clearChecklist: () => remove(keys.checklist),
    getLeads: () => read(keys.leads, []),
    setLeads: (leads) => write(keys.leads, leads),
    clearLeads: () => remove(keys.leads)
  };
})(window);
