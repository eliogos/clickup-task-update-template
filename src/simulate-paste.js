(function (global) {
  "use strict";

  const app = (global.ClickUpUpdateApp = global.ClickUpUpdateApp || {});

  app.simulatePaste = function simulatePaste(editor, html) {
    editor.focus();

    const event = new ClipboardEvent("paste", {
      bubbles: true,
      cancelable: true,
      clipboardData: new DataTransfer()
    });

    event.clipboardData.setData("text/html", html);
    event.clipboardData.setData("text/plain", html);

    editor.dispatchEvent(event);
  };
})(globalThis);
