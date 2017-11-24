const router = require("express").Router();
const attendeesRoutes = require("./attendees");

// attendees routes
router.use("/attendees", attendeesRoutes);

module.exports = router;