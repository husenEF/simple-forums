const router = require("express").Router();

const auth = require("./auth");
const user = require("./user");
const forums = require("./forums");
const thread = require("./thread");
const reply = require("./reply");

router.use("/auth", auth);
router.use("/threads", thread);
router.use("/users", user);
router.use("/forums", forums);
router.use("/reply", reply);
router.get("/me", (req, res) => {
  return res.json({
    name: "Refactory",
    company: "Refactory",
    jobs: "Trainer",
    address: "Yogyakarta",
  });
});

module.exports = router;
