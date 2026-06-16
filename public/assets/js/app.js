/**
 * Project: AI MVP Starter Kit
 * File: public/assets/js/app.js
 * Author: Beck Sarbassov
 * Version: 0.1.0
 * Date released: 2026-06-16
 * Last updated: 2026-06-16
 * Copyright: © Beck Sarbassov. All rights reserved.
 *
 * EN: Initializes generators, checklist, structure viewer, copy actions, and local demo leads.
 * RU: Инициализирует генераторы, чек-лист, структуру, копирование и локальные demo leads.
 */

(function initApp(global) {
  const storage = global.AIMVPStorage;
  const i18n = global.AIMVPI18n;
  const security = global.AIMVPSecurity;
  const checklistKeys = ["idea", "problem", "features", "ux", "architecture", "security", "deployment", "documentation", "github"];

  function byId(id) {
    return document.getElementById(id);
  }

  function getFormValue(form, name) {
    return String(new FormData(form).get(name) || "").trim();
  }

  function linesFrom(value) {
    return value
      .split(/\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function listLines(items) {
    return items.map((item) => `- ${item}`).join("\n");
  }

  function setStatus(element, message, type = "success") {
    if (!element) {
      return;
    }
    element.classList.remove("is-success", "is-error");
    element.classList.add(type === "error" ? "is-error" : "is-success");
    security.safeSetText(element, message);
  }

  function label(path, language) {
    return i18n.t(path, {}, language);
  }

  function fallback(value, language) {
    return value || label("common.empty", language);
  }

  function generateBrief(form) {
    const language = getFormValue(form, "language") || i18n.getLanguage();
    const projectName = getFormValue(form, "projectName");
    const projectType = getFormValue(form, "projectType");
    const audience = getFormValue(form, "targetAudience");
    const problem = getFormValue(form, "mainProblem");
    const features = linesFrom(getFormValue(form, "coreFeatures"));
    const stack = getFormValue(form, "preferredStack");
    const deployment = getFormValue(form, "deploymentTarget");
    const instructions = i18n.t("brief.aiInstructions", {}, language);
    const acceptance = i18n.t("brief.acceptance", {}, language);

    return [
      `# ${label("brief.generatedTitle", language)}`,
      "",
      i18n.t("brief.intro", {}, language),
      "",
      `## ${label("brief.labels.name", language)}`,
      fallback(projectName, language),
      "",
      `## ${label("brief.labels.type", language)}`,
      fallback(projectType, language),
      "",
      `## ${label("brief.labels.audience", language)}`,
      fallback(audience, language),
      "",
      `## ${label("brief.labels.problem", language)}`,
      fallback(problem, language),
      "",
      `## ${label("brief.labels.features", language)}`,
      features.length ? listLines(features) : `- ${label("common.empty", language)}`,
      "",
      `## ${label("brief.labels.stack", language)}`,
      fallback(stack, language),
      "",
      `## ${label("brief.labels.deployment", language)}`,
      fallback(deployment, language),
      "",
      `## ${label("brief.labels.aiInstructions", language)}`,
      listLines(instructions),
      "",
      `## ${label("brief.labels.acceptance", language)}`,
      listLines(acceptance)
    ].join("\n");
  }

  function generateAgentTask(form) {
    const language = getFormValue(form, "language") || i18n.getLanguage();
    const agentName = getFormValue(form, "agentName");
    const projectType = getFormValue(form, "projectType");
    const quality = getFormValue(form, "qualityLevel");
    const documentation = getFormValue(form, "documentationLevel");
    const generated = i18n.t("agent.generated", {}, language);
    const sections = i18n.t("agent.sections", {}, language);
    const summary = i18n.t("agent.summaryLabels", {}, language);
    const goal = i18n.t("agent.generated.goal", { quality, projectType }, language);

    return [
      `# ${label("agent.taskTitle", language)}`,
      "",
      `${summary.agent}: ${agentName}`,
      `${summary.projectType}: ${projectType}`,
      `${summary.quality}: ${quality}`,
      `${summary.documentation}: ${documentation}`,
      "",
      `## ${sections.goal}`,
      goal,
      "",
      `## ${sections.files}`,
      listLines(generated.files),
      "",
      `## ${sections.architecture}`,
      listLines(generated.architecture),
      "",
      `## ${sections.quality}`,
      listLines(generated.quality),
      "",
      `## ${sections.security}`,
      listLines(generated.security),
      "",
      `## ${sections.docs}`,
      listLines(generated.docs),
      "",
      `## ${sections.validation}`,
      listLines(generated.validation),
      "",
      label("agent.reviewNote", language)
    ].join("\n");
  }

  async function copyText(text, statusElement) {
    if (!text.trim()) {
      setStatus(statusElement, i18n.t("common.fillFirst"), "error");
      return;
    }

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const temp = document.createElement("textarea");
        temp.value = text;
        temp.setAttribute("readonly", "");
        temp.style.position = "fixed";
        temp.style.left = "-9999px";
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        temp.remove();
      }
      setStatus(statusElement, i18n.t("common.copied"));
    } catch (error) {
      console.warn("Clipboard copy failed:", error);
      setStatus(statusElement, i18n.t("common.copyFailed"), "error");
    }
  }

  function renderChecklist() {
    const grid = byId("checklistGrid");
    if (!grid) {
      return;
    }

    const state = storage.getChecklist();
    grid.textContent = "";

    checklistKeys.forEach((categoryKey) => {
      const category = i18n.t(`checklist.categories.${categoryKey}`);
      const article = document.createElement("article");
      article.className = "checklist-category";

      const heading = document.createElement("h3");
      heading.textContent = category.title;
      article.appendChild(heading);

      const items = document.createElement("div");
      items.className = "checklist-items";

      category.items.forEach((item, index) => {
        const itemId = `${categoryKey}-${index}`;
        const labelElement = document.createElement("label");
        labelElement.className = "checklist-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = Boolean(state[itemId]);
        checkbox.addEventListener("change", () => {
          const nextState = storage.getChecklist();
          nextState[itemId] = checkbox.checked;
          storage.setChecklist(nextState);
          updateChecklistProgress();
        });

        const span = document.createElement("span");
        span.textContent = item;

        labelElement.appendChild(checkbox);
        labelElement.appendChild(span);
        items.appendChild(labelElement);
      });

      article.appendChild(items);
      grid.appendChild(article);
    });

    updateChecklistProgress();
  }

  function getChecklistTotal() {
    return checklistKeys.reduce((total, categoryKey) => {
      const category = i18n.t(`checklist.categories.${categoryKey}`);
      return total + category.items.length;
    }, 0);
  }

  function updateChecklistProgress() {
    const state = storage.getChecklist();
    const total = getChecklistTotal();
    const completed = Object.values(state).filter(Boolean).length;
    const percent = total ? Math.round((completed / total) * 100) : 0;
    const progressText = byId("checklistProgress");
    const progressBar = byId("checklistProgressBar");

    if (progressText) {
      progressText.textContent = `${percent}%`;
    }

    if (progressBar) {
      progressBar.value = percent;
      progressBar.textContent = `${percent}%`;
    }
  }

  function renderStructureTree() {
    const tree = byId("structureTree");
    if (!tree) {
      return;
    }
    const lines = i18n.t("structure.tree");
    tree.textContent = Array.isArray(lines) ? lines.join("\n") : "";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function renderLeads() {
    const tbody = byId("leadsTableBody");
    if (!tbody) {
      return;
    }
    const leads = storage.getLeads();
    tbody.textContent = "";

    if (!leads.length) {
      const row = document.createElement("tr");
      row.innerHTML = `<td class="empty-row" colspan="4">${security.escapeHTML(i18n.t("leads.empty"))}</td>`;
      tbody.appendChild(row);
      return;
    }

    leads.forEach((lead) => {
      const row = document.createElement("tr");
      row.innerHTML = [
        `<td>${security.escapeHTML(lead.name)}</td>`,
        `<td>${security.escapeHTML(lead.email)}</td>`,
        `<td>${security.escapeHTML(lead.message)}</td>`,
        `<td>${security.escapeHTML(lead.createdAt)}</td>`
      ].join("");
      tbody.appendChild(row);
    });
  }

  function setupBriefGenerator() {
    const form = byId("briefForm");
    const output = byId("briefOutput");
    const status = byId("briefStatus");
    if (!form || !output) {
      return;
    }

    output.value = storage.getBrief();
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      output.value = generateBrief(form);
      setStatus(status, i18n.t("common.generated"));
    });

    byId("copyBriefButton")?.addEventListener("click", () => copyText(output.value, status));
    byId("saveBriefButton")?.addEventListener("click", () => {
      if (!output.value.trim()) {
        setStatus(status, i18n.t("common.fillFirst"), "error");
        return;
      }
      storage.setBrief(output.value);
      setStatus(status, i18n.t("common.saved"));
    });
    byId("clearBriefButton")?.addEventListener("click", () => {
      form.reset();
      output.value = "";
      storage.clearBrief();
      setStatus(status, i18n.t("common.cleared"));
    });
  }

  function setupAgentGenerator() {
    const form = byId("agentForm");
    const output = byId("taskOutput");
    const status = byId("taskStatus");
    if (!form || !output) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      output.value = generateAgentTask(form);
      setStatus(status, i18n.t("common.generated"));
    });

    byId("copyTaskButton")?.addEventListener("click", () => copyText(output.value, status));
    byId("clearTaskButton")?.addEventListener("click", () => {
      form.reset();
      output.value = "";
      setStatus(status, i18n.t("common.cleared"));
    });
  }

  function setupLeadForm() {
    const form = byId("leadForm");
    const status = byId("leadStatus");
    if (!form) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = getFormValue(form, "name");
      const email = getFormValue(form, "email");
      const message = getFormValue(form, "message");

      if (name.length < 2 || !isValidEmail(email) || message.length < 3) {
        setStatus(status, i18n.t("leads.invalid"), "error");
        return;
      }

      const locale = i18n.getLanguage() === "ru" ? "ru-RU" : i18n.getLanguage() === "kk" ? "kk-KZ" : "en-US";
      const leads = storage.getLeads();
      leads.unshift({
        id: Date.now(),
        name,
        email,
        message,
        createdAt: new Date().toLocaleString(locale)
      });
      storage.setLeads(leads);
      form.reset();
      renderLeads();
      setStatus(status, i18n.t("leads.saved"));
    });

    byId("clearLeadsButton")?.addEventListener("click", () => {
      storage.clearLeads();
      renderLeads();
      setStatus(status, i18n.t("leads.cleared"));
    });
  }

  function setupChecklistReset() {
    byId("resetChecklistButton")?.addEventListener("click", () => {
      storage.clearChecklist();
      renderChecklist();
    });
  }

  function syncOutputLanguageSelects() {
    const language = i18n.getLanguage();
    ["briefLanguage", "agentLanguage"].forEach((id) => {
      const select = byId(id);
      if (select && !select.dataset.userChanged) {
        select.value = language;
      }
      if (select && !select.dataset.listenerReady) {
        select.dataset.listenerReady = "true";
        select.addEventListener("change", () => {
        select.dataset.userChanged = "true";
        });
      }
    });
  }

  function init() {
    syncOutputLanguageSelects();
    setupBriefGenerator();
    setupAgentGenerator();
    setupChecklistReset();
    setupLeadForm();
    renderChecklist();
    renderStructureTree();
    renderLeads();

    global.addEventListener("aimvp:languagechange", () => {
      syncOutputLanguageSelects();
      renderChecklist();
      renderStructureTree();
      renderLeads();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})(window);
