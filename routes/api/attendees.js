const router = require("express").Router();
const attendeesController = require("../../controllers/attendeesController");

// matches with "/api/attendees"
router.route("/")
      .get(attendeesController.findAll)
      .post(attendeesController.create);

// matches with "/api/attendees/:id"
router.route("/:id")
      .delete(attendeesController.remove);

module.exports = router;