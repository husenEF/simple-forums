const router = require("express").Router();

const auth = require("./auth");
const user = require("./user");
const forums = require("./forums");
const thread = require("./thread");


router.use("/auth", auth);
router.use("/threads", thread);
router.use("/users", user);
router.use("/forums", forums);

module.exports = router;
