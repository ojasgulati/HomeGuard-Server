const router = require("express").Router();

router.use("/volunteers", require("./volunteerRoute"));

module.exports = router;
