const router = require("express").Router();
const bookRoutes = require("./books");
const spotifyRoutes = require("./spotify");
const bandsRoutes = require("./bands");
const sitesRoutes = require("./sites");

// Book routes
router.use("/books", bookRoutes);

// Spotify routes
router.use("/spotify", spotifyRoutes);

// BandsInTown Routes
router.use("/bands", bandsRoutes);

// Sites Routes
router.use("/admin/sites", sitesRoutes);

module.exports = router;
