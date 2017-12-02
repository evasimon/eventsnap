const router = require("express").Router();
const attendeesRoutes = require("./attendees");
const workshopsRoutes = require("./workshops");
const checkInRoutes = require("./checkIn");


// attendees routes
router.use("/attendees", attendeesRoutes);
router.use("/workshops", workshopsRoutes);
router.use("/check-in", checkInRoutes)

module.exports = router;