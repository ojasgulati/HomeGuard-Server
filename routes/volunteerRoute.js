const router = require("express").Router();
const { volunteer } = require("../database");
const _ = require("lodash");

router.get("/volunteerlist", (res, req) => {
  volunteer.getActiveVolunteerList( function(data) {
    req.send(data);
  });
});

module.exports = router;
