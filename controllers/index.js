const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const postViewRoutes = require("./postViewRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/posts", postViewRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
