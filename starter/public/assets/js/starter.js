/**
 * Project: AI MVP Starter Kit
 * File: starter/public/assets/js/starter.js
 * Author: Beck Sarbassov
 * Version: 0.1.0
 * Date released: 2026-06-16
 * Last updated: 2026-06-16
 * Copyright: © Beck Sarbassov. All rights reserved.
 *
 * EN: Demo form validation for the reusable starter MVP template.
 * RU: Demo form validation для reusable starter MVP template.
 */

(function initStarterForm() {
  const form = document.getElementById("starterLeadForm");
  const status = document.getElementById("starterStatus");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setStatus(message, type) {
    status.textContent = message;
    status.className = `status ${type}`;
  }

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2 || !isValidEmail(email) || message.length < 3) {
      setStatus("Please enter a valid name, email, and message.", "error");
      return;
    }

    setStatus("Form looks valid. Connect a secure backend before collecting real leads.", "success");
    form.reset();
  });
})();
