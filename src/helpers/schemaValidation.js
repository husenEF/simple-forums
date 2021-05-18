const joi = require("joi");

class SchemaValidation {
  static login() {
    return joi.object({
      email: joi.string().required(),
      password: joi.string().required(),
    });
  }

  static register() {
    return joi.object({
      username: joi.string().required(),
      password: joi.string().required(),
      email: joi.string().required(),
    });
  }
}

module.exports = SchemaValidation;
