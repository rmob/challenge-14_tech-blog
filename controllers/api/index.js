const router = require("express").Router();

const userRoutes = require("./user-routes");
const signupRoutes =  require("./signupRoutes")
const createRoutes = require('./createRoutes')

router.use("/users", userRoutes);
router.use("/signup", signupRoutes);
router.use("/create", createRoutes)

module.exports = router;
