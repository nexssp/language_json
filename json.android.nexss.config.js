let languageConfig = Object.assign({}, require("./json.win32.nexss.config"));

languageConfig.dist = process.distro;
module.exports = languageConfig;
