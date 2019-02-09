const db = require("../models");

/* Methods for the sitesController */
module.exports = {
  findAll: (req, res) => {
    db.Site
      .find(req.query)
      .sort({ index: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Site
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).jsn(err));
  }
};