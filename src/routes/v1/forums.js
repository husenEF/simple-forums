const express = require("express");
const router = express.Router();

const forumController = require("../../controllers/v1/forumController");
// const authorization = require("../../middlewares/auth");
const { authorization, upload, validation } = require("../../middlewares");
const schemaValidation = require("../../helpers/schemaValidation");

router.get("/list/:forumId?", forumController.allList);
router.post(
  "/create",
  authorization,
  validation(schemaValidation.createForum()),
//   upload.single("thumbnail"),
  forumController.create
);

module.exports = router;
