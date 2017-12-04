const router = require("express").Router();
const registrationController = require("../../controllers/registrationController");

router
    .route("/:uuid")
    .post(registrationController.update);

module.exports = router;