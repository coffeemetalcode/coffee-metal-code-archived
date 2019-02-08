const express = require("express");
require("dotenv").config();
const keys = require("./keys");
const axios = require("axios");
// const logger = require("morgan"); // maybe I'll use this?
// const mongoose = require("mongoose");

// const routes = require("./routes");
const PORT = process.env.PORT || 3100;

// Require all models
// const db = require("./models");

// Initialize Express
const app = express();

// Configure middleware

// Use morgan logger for logging requests
// app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// app.use(routes);

/* SPOTIFY API ROUTE */ // --> Put in ./routes/api/spotify.js

const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

app.get("/api/spotify", (req, res) => {
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

/* END SPOTIFY API ROUTE */

// Start the server
app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
});
