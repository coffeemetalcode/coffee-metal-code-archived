/* Spotify Routes */

/* 

Spotify API Docs here:
https://developer.spotify.com/documentation/web-api/

More interesting use cases for the Spotify API demonstrated with cURL. This tool is helpful for converting cURL requests into javascript for use in a node.js environment (and others):

https://curl.trillworks.com/#node

*/

const router = require("express").Router();

require("dotenv").config();
const keys = require("../../keys");

const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// Matches with "/api/spotify"
router.get("/", (req, res) => {
  // res.send("spotify api call");
  
  // Sample route to see successful get request from Spotify API <-- replace with 'recently-played' endpoint
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
