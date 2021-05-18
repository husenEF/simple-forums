const express = require("express");
const router = express.Router();
const authController = require("../../controllers/v1/authController");
const SchemaValidation = require("../../helpers/schemaValidation");
const validate = require("../../middlewares/validation");

/* GET home page. */
router.post("/login", validate(SchemaValidation.login()),authController.login);
router.post("/register", authController.register);
// router.get("/test", authController.test);

module.exports = router;
