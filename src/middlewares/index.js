const upload = require("./upload");
const validation = require("./validation");
const { authentication, authorization } = require("./auth");

module.exports = {
  upload,
  validation,
  authentication,
  authorization,
};
