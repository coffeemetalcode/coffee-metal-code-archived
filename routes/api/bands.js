/* BandsInTown Routes */

const router = require("express").Router();

require("dotenv").config();
const keys = require("../../keys");

const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

const rp = require("request-promise");

/*

rp("url-to-bandsintown-api") // <-- waiting for API key
  .then(body => {
    // console.log(body);
  })
  .catch(err => {
    console.log(err);
  });

*/

// Matches with "/api/bands"
// Sample route to see successful get request from BandsInTown API
router.get("/", (req, res) => {
  // res.send("spotify api call");
  spotify
    .search({ type: "track", query: "Coming Home" })
    .then(response => {
      if (response) {
        console.log("Success!");
      }
      res.json(response.tracks.items[0]);
    })
    .catch(err => {
      console.log("Error occured: " + err);
    });
});

module.exports = router;
