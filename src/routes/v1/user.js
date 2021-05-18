const express = require("express");
const router = express.Router();
const userController = require("../../controllers/v1/userController");
const authorization = require("../../middlewares/auth");

router.get("/profile", authorization, userController.profile);

module.exports = router;
