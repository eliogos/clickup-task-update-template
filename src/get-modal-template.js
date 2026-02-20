(function (global) {
  "use strict";

  const app = (global.ClickUpUpdateApp = global.ClickUpUpdateApp || {});

  app.getModalTemplate = function getModalTemplate() {
    if (typeof GM_getResourceText === "function") {
      const template = GM_getResourceText("modalTemplate");
      if (template) return template;
    }

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
  };
})(globalThis);
