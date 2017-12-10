const router = require("express").Router();
const registrationController = require("../../controllers/registrationController");

// matches with "/api/registration/:uuid"
router.route("/:uuid")
      .post(registrationController.update);

module.exports = router;