const router = require("express").Router();
const checkInController = require("../../controllers/checkInController");

// Matches with "/api/checkin/:uuid/:id"
router
    .route("/:uuid/:id")
    .post(checkInController.update);

module.exports = router;