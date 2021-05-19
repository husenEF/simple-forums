const router = require("express").Router();

const auth = require("./auth");
const user = require("./user");
const forums = require("./forums");

router.use("/auth", auth);
router.use("/users", user);
router.use("/forums", forums);

module.exports = router;
