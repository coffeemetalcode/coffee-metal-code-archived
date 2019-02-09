const router = require("express").Router();
const sitesController = require("../../controllers/sitesController");

// Matches with "/api/admin/sites"
router
  .route("/")
  .get(sitesController.findAll)
  .post(sitesController.create);

module.exports = router;
