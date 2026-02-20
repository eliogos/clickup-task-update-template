(function (global) {
  "use strict";

  const app = (global.ClickUpUpdateApp = global.ClickUpUpdateApp || {});

  app.getVisibleEditor = function getVisibleEditor() {
    const editors = [...document.querySelectorAll(".ql-editor")];
    return editors.find((el) => {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });
  };
})(globalThis);
