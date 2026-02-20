(function (global) {
  "use strict";

  const app = (global.ClickUpUpdateApp = global.ClickUpUpdateApp || {});

  app.getModalCss = function getModalCss() {
    if (typeof GM_getResourceText === "function") {
      return GM_getResourceText("modalCss");
    }

    // Fallback only for managers that do not expose GM_getResourceText.
    return `
      :host { all: initial; color-scheme: dark; }
      * { box-sizing: border-box; font-family: system-ui, sans-serif; }
      .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(720px, calc(100vw - 24px));
        background: #1a1a1a;
        color: #fff;
        padding: 22px;
        border-radius: 14px;
        border: 1px solid #2f2f2f;
        box-shadow: 0 20px 60px rgba(0,0,0,.5);
        display: none;
        flex-direction: column;
        gap: 14px;
      }
      .modal:popover-open,
      .modal.is-open-fallback { display: flex; }
      .field {
        background: #111;
        color: #fff;
        border: 1px solid #333;
        padding: 8px 10px;
        border-radius: 10px;
      }
      .actions { display: flex; justify-content: flex-end; gap: 10px; }
    `;
  };
})(globalThis);
