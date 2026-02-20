(function (global) {
  "use strict";

  const app = (global.ClickUpUpdateApp = global.ClickUpUpdateApp || {});
  const constants = app.constants || {};
  const defaultLabel = constants.defaultLabel || "Design Update";
  const defaultNumber = constants.defaultNumber || "01";
  const appVersion = constants.APP_VERSION || "0.0";
  const creditHtml = constants.creditHtml || "Made with &#x2764;&#xFE0F; by Jai";

  function escapeAttr(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function getFallbackTemplate() {
    return `
<section class="modal" id="modal" popover="auto" role="dialog" aria-modal="true" aria-label="Insert Update Template">
  <p class="title">Insert Update Template</p>
  <div class="row-inline">
    <div class="palette" id="palette" aria-label="Banner color"></div>
    <input class="field label-input" id="label" value="{{DEFAULT_LABEL}}" />
    <div class="num-controls" aria-label="Update number">
      <button class="num-btn" id="dec" type="button">-</button>
      <input class="num-input" id="number" value="{{DEFAULT_NUMBER}}" inputmode="numeric" />
      <button class="num-btn" id="inc" type="button">+</button>
    </div>
  </div>
  <div class="group">
    <label>Status<span class="req">*</span></label><br/>
    <select class="field status-select" id="status">
      <option>Not Started</option>
      <option selected>In Progress</option>
      <option>For QA</option>
      <option>Completed</option>
    </select>
  </div>
  <div class="group">
    <label>Accomplishments<span class="req">*</span></label>
    <textarea class="field" id="acc"></textarea>
  </div>
  <div class="group">
    <label>Blockers</label>
    <textarea class="field" id="block"></textarea>
  </div>
  <div class="group">
    <label>Current Focus</label>
    <textarea class="field" id="focus"></textarea>
  </div>
  <div class="actions">
    <button class="btn" id="cancel" type="button">Cancel</button>
    <button class="btn btn-primary" id="insert" type="button" disabled>Insert</button>
  </div>
  <div class="note">You can insert Files and Mentions after inserting this template.</div>
  <div class="note note-credit">{{CREDIT_HTML}} - v{{APP_VERSION}}</div>
</section>
`;
  }

  app.createModalMarkup = function createModalMarkup() {
    const template =
      typeof app.getModalTemplate === "function"
        ? app.getModalTemplate()
        : getFallbackTemplate();
    const source = template || getFallbackTemplate();

    return source
      .replaceAll("{{DEFAULT_LABEL}}", escapeAttr(defaultLabel))
      .replaceAll("{{DEFAULT_NUMBER}}", escapeAttr(defaultNumber))
      .replaceAll("{{APP_VERSION}}", escapeAttr(appVersion))
      .replaceAll("{{CREDIT_HTML}}", creditHtml);
  };
})(globalThis);
