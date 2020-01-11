const router = require("express").Router();
const { volunteer } = require("../database");
const _ = require("lodash");

router.post("/volunteerlist", (res, req) => {
  volunteer.getActiveVolunteerList(res.body, function(data) {
    req.send(data);
  });
});

module.exports = router;
