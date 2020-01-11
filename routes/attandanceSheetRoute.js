const router = require("express").Router();
const { attandanceSheet } = require("../database");
const _ = require("lodash");

router.post("/insertnew", (req, res) => {
  attandanceSheet.insert(
    req.body,
    function(data) {
      res.send(data);
    },
    function(err) {
      res.status(400).send(err);
    }
  );
});

router.post("/updateentry", (req, res) => {
    attandanceSheet.update(
      req.body,
      function(data) {
        res.send(data);
      },
      function(err) {
        res.status(400).send(err);
      }
    );
  });

module.exports = router;
