const router = require("express").Router();
const memberRoutes = require("./members");

// Book routes
router.use("/members", memberRoutes);

module.exports = router;
