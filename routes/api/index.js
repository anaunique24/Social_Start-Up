const router = require("express").Router();
const userRoute = require("./userRoute");
const thoughtRoute = require("./thoughtRoute");

router.use("/users", userRoute);
router.use("/thoughts", thoughtRoute);

module.exports = router;