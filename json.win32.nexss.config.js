let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "JSON";
languageConfig.description =
  "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write.";
languageConfig.url = "";
languageConfig.extensions = [".json"];
languageConfig.builders = {};
languageConfig.compilers = {
  json: {
    install: "",
    command: "",
    stream: "transformFile",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.json.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
