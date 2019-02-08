const router = require("express").Router();

require("dotenv").config();
const keys = require("../../keys");

const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// Matches with "/api/spotify"
router.get("/", (req, res) => {
  // res.send("spotify api call");
  spotify
    .search({ type: "track", query: "Coming Home" })
    .then(response => {
      res.json(response.tracks.items[0]);
      // console.log(response.tracks.items);
    })
    .catch(err => {
      console.log("Error occured: " + err);
    });
});

module.exports = router;
