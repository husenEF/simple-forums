const express = require("express");
const router = express.Router();
const userController = require("../../controllers/v1/userController");
const { authentication, authorization } = require("../../middlewares/auth");
const SchemaValidation = require("../../helpers/schemaValidation");
const validate = require("../../middlewares/validation");

router.get("/profile", authentication, userController.profile);

router.get("/detail/:id", userController.detail);

router.get(
  "/",
  authentication,
  authorization("admin", "moderator"),
  userController.list
);

router.put(
  "/:id",
  validate(SchemaValidation.updateUser()),
  authentication,
  userController.update
);

router.delete(
  "/:id",
  authentication,
  authorization("admin"),
  userController.delete
);

module.exports = router;
