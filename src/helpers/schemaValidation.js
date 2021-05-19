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
  static createForum() {
    return joi.object({
      title: joi.string().required().min(3),
      description: joi.string().required().min(3),
    });
  }
  static createThread() {
    return joi.object({
      forum_id: joi.number().required(),
      title: joi.string().required(),
      description: joi.string(),
    });
  }
}

module.exports = SchemaValidation;
