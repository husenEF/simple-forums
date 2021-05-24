const express = require("express");
const router = express.Router();

const {
  authorization,
  authentication,
  validation,
} = require("../../middlewares");

const ReplyController = require("../../controllers/v1/replyController");
const SchemaValidation = require("../../helpers/schemaValidation");

//create
router.post(
  "/",
  authentication,
  validation(SchemaValidation.createReply()),
  ReplyController.create
);
//update
router.put("/:id", authentication, ReplyController.update);
//delete
router.delete(
  "/:id",
  authentication,
  authorization("admin", "moderator"),
  ReplyController.delete
);

module.exports = router;
