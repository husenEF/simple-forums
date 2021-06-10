const express = require("express");
const router = express.Router();
const userController = require("../../controllers/v1/userController");
const { authentication, authorization } = require("../../middlewares/auth");

router.get("/profile", authentication, userController.profile);

router.get("/detail/:id", userController.detail);

router.get(
  "/",
  authentication,
  authorization("admin", "moderator"),
  userController.list
);

router.delete(
  "/:id",
  authentication,
  authorization("admin"),
  userController.delete
);

module.exports = router;
