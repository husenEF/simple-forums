const express = require("express");
const router = express.Router();
const userController = require("../../controllers/v1/userController");
const {authentication} = require("../../middlewares/auth");

router.get("/profile", authentication, userController.profile);

module.exports = router;
