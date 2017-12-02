const router = require("express").Router();
const workshopsController = require("../../controllers/workshopsController");

// Matches with "/api/workshops"
router.route("/")
    .get(workshopsController.findAll)
    .post(workshopsController.create);

// Matches with "/api/workshops/:id"
router
    .route("/:id")
    .delete(workshopsController.remove);

module.exports = router;