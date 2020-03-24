const router = require("express").Router();
const memberRoutes = require("./members");
const userRoutes = require("./users")


router.use("/members", memberRoutes);
router.use("/users", userRoutes);

module.exports = router;

