(function (global) {
  "use strict";

  const app = (global.ClickUpUpdateApp = global.ClickUpUpdateApp || {});

  app.isPopoverOpen = function isPopoverOpen(el) {
    if (!el) return false;
    if (el.classList.contains("is-open-fallback")) return true;
    if (typeof el.matches === "function") {
      try {
        return el.matches(":popover-open");
      } catch {
        return false;
      }
    }
    return false;
  };
})(globalThis);
