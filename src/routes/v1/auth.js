const express = require("express");
const router = express.Router();

const authController = require("../../controllers/v1/authController");

/* GET home page. */
router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/test", authController.test);

module.exports = router;
