const router = require("express").Router();
const attendeesController = require("../../controllers/attendeesController");

// Matches with "/api/attendees"
router.route("/")
    .get(attendeesController.findAll)
    .post(attendeesController.create);

// Matches with "/api/attendees/:id"
router
    .route("/:id")
    .delete(attendeesController.remove);

module.exports = router;