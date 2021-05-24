const express = require("express");
const router = express.Router();

const forumController = require("../../controllers/v1/forumController");
// const authorization = require("../../middlewares/auth");
const {
  authentication,
  authorization,
  upload,
  validation,
} = require("../../middlewares");
const ThreadController = require("../../controllers/v1/threadController");
const schemaValidation = require("../../helpers/schemaValidation");

router.get("/list/:forumId?", forumController.allList);
router.post(
  "/create",
  authentication,
  authorization("admin"),
  validation(schemaValidation.createForum()),
  forumController.create
);

router.post(
  "/upload/:forumid",
  authentication,
  authorization("admin"),
  upload("forums").single("thumbnail"),
  forumController.upload
);

router.get("/:id/threads", ThreadController.threadByForum);

module.exports = router;
