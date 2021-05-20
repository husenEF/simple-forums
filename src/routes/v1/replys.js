const express = require("express");
const router = express.Router();

const { authorization, authentication } = require("../../middlewares");

const ReplyController = require("../../controllers/v1/replyController");

//create
router.post("/", authentication, ReplyController.create);
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
