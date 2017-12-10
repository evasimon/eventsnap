const router = require("express").Router();
const attendeesRoutes = require("./attendees");
const workshopsRoutes = require("./workshops");
const checkInRoutes = require("./checkIn");
const registrationRoutes = require("./registration");

// app routes
router.use("/attendees", attendeesRoutes);
router.use("/workshops", workshopsRoutes);
router.use("/check-in", checkInRoutes)
router.use("/registration", registrationRoutes)

module.exports = router;