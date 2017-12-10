const router = require("express").Router();
const workshopsController = require("../../controllers/workshopsController");

// matches with "/api/workshops"
router.route("/")
      .get(workshopsController.findAll)

// matches with "/api/workshops/:id"
router.route("/:id")
      .get(workshopsController.findWorkshop)

module.exports = router;