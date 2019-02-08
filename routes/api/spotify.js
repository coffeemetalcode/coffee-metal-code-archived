const router = require("express").Router();

router.route("/api/spotify", (req, res) => {
  res.send("spotify api call");
});

module.exports = router;