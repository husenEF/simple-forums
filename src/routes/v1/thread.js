const express = require("express");
const router = express.Router();
const threadController = require("../../controllers/v1/threadController");
const { authentication, authorization } = require("../../middlewares/auth");
const SchemaValidation = require("../../helpers/schemaValidation");
const validate = require("../../middlewares/validation");

router.post(
  "/",
  authentication,
  validate(SchemaValidation.createThread()),
  threadController.create
);
router.get("/:id", threadController.getById);
router.delete(
  "/:id",
  authentication,
  authorization("admin", "moderator"),
  threadController.delete
);
router.put(
  "/:id",
  authentication,
  authorization("admin", "moderator"),
  validate(SchemaValidation.updateThread()),
  threadController.update
);
router.get(
  "/",
  authentication,
  authorization("admin", "moderator"),
  threadController.list
);

module.exports = router;
