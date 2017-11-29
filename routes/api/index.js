const router = require("express").Router();
const attendeesRoutes = require("./attendees");
const checkInRoutes = require("./checkIn");


// attendees routes
router.use("/attendees", attendeesRoutes);
router.use("/check-in", checkInRoutes)

module.exports = router;