const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "nl-BE"],
    localePath: path.resolve("./public/static/locales"),
  },
};
