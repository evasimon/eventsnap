const router = require("express").Router();
const checkInController = require("../../controllers/checkInController");


// Matches with "/api/attendees"
// router.route("/")
//     .get(attendeesController.findAll)
//     .post(attendeesController.create);

// Matches with "/api/attendees/:id"
router
    .route("/:uuid/:id")
    .put(checkInController.update);

module.exports = router;