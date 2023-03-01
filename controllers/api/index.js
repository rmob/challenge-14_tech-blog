const router = require("express").Router();

const userRoutes = require("./user-routes");
const signupRoutes =  require("./signupRoutes")
const createRoutes = require('./createRoutes')
const commentRoutes = require('./commentRoutes')

router.use("/users", userRoutes);
router.use("/signup", signupRoutes);
router.use("/create", createRoutes)
router.use("/comment", commentRoutes)

module.exports = router;
