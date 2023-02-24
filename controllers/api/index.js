const router = require("express").Router();

const userRoutes = require("./user-routes");
const signupRoutes =  require("./signupRoutes")
const dashboardRoutes = require('./dashboardRoutes')

router.use("/users", userRoutes);
router.use("/signup", signupRoutes);
router.use("/dashboard", dashboardRoutes)

module.exports = router;
