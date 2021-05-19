const express = require("express");
const router = express.Router();
const threadController = require("../../controllers/v1/threadController");
const authorization = require("../../middlewares/auth");
const SchemaValidation = require("../../helpers/schemaValidation");
const validate = require("../../middlewares/validation");

router.post("/", authorization, validate(SchemaValidation.createThread()), threadController.create);

module.exports = router;
