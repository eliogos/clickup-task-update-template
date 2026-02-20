(function (global) {
  "use strict";

  const app = (global.ClickUpUpdateApp = global.ClickUpUpdateApp || {});
  const scriptVersion =
    global.GM_info &&
    global.GM_info.script &&
    global.GM_info.script.version
      ? String(global.GM_info.script.version)
      : "9.1";

  app.constants = {
    APP_VERSION: scriptVersion,
    TRIGGER: "--update",
    defaultLabel: "Design Update",
    defaultNumber: "01",
    defaultBannerColor: "blue-strong",
    creditHtml: "Made with &#x2764;&#xFE0F; by Jai",
    statusColor: {
      "Not Started": "pink",
      "In Progress": "blue",
      "For QA": "yellow",
      "Completed": "green"
    },
    bannerPalette: {
      "red-strong": "#E53935",
      "orange-strong": "#FB8C00",
      "yellow-strong": "#FDD835",
      "blue-strong": "#1E88E5",
      "purple-strong": "#5E35B1",
      "pink-strong": "#EC407A",
      "green-strong": "#43A047",
      "grey-strong": "#616161",
      red: "#B71C1C",
      orange: "#8D4C00",
      yellow: "#8D7A00",
      blue: "#0D47A1",
      purple: "#311B92",
      pink: "#6A1B9A",
      green: "#1B5E20",
      grey: "#424242"
    },
    strongOrder: [
      "red-strong",
      "orange-strong",
      "yellow-strong",
      "blue-strong",
      "purple-strong",
      "pink-strong",
      "green-strong",
      "grey-strong"
    ],
    mutedOrder: ["red", "orange", "yellow", "blue", "purple", "pink", "green", "grey"]
  };

  app.constants.allColors = [...app.constants.strongOrder, ...app.constants.mutedOrder];
})(globalThis);
