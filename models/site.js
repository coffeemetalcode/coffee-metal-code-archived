const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  index: {type: Number, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  img: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
