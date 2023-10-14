const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const postViewRoutes = require("./postViewRoutes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/posts", postViewRoutes);

module.exports = router;
