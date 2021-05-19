const express = require("express");
const router = express.Router();

const forumController = require("../../controllers/v1/forumController");
const authorization = require("../../middlewares/auth");

router.get("/list/:forumId?", forumController.allList);

module.exports = router;
