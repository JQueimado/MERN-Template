const templateRoute = require("express").Router();

textTemplate = "Hello World!"

templateRoute.route("/").get(function(req, res) {
      res.json(textTemplate);
});

module.exports = templateRoute;