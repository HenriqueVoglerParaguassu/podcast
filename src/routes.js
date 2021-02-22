const routes = require("express").Router();

routes
  .get("/", (req, res, next) => {
    res.render("index");
  })

  .get("/doe", (req, res, next) => {
    res.render("doe");
  });

module.exports = routes;
