const router = require("express").Router();
const { volunteer } = require("../database");

router.get("/volunteer_list", (res, req) => {
  volunteer.getActiveVolunteerList(function(data) {
    req.send(data);
  });
});

module.exports = router;
