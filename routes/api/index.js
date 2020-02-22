const router = require("express").Router();
const authRoutes = require("./auth");
const taskRoutes = require("./tasklist");

router.use("/auth", authRoutes);
router.use("/tasklist", taskRoutes);

module.exports = router;
