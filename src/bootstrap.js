(function (global) {
  "use strict";

  const app = (global.ClickUpUpdateApp = global.ClickUpUpdateApp || {});
  const constants = app.constants || {};
  const trigger = constants.TRIGGER || "--update";

  app.bootstrap = function bootstrap() {
    if (app._bootstrapped) return;
    app._bootstrapped = true;

    document.addEventListener("keydown", (e) => {
      if (e.key !== " ") return;
      if (typeof app.getVisibleEditor !== "function" || typeof app.openModal !== "function") return;

      const editor = app.getVisibleEditor();
      if (!editor) return;

      const text = editor.innerText.trim();
      if (text !== trigger) return;

      e.preventDefault();
      app.openModal(editor);
    });
  };
})(globalThis);
