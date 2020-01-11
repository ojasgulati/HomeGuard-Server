const router = require("express").Router();

router.use("/volunteers", require("./volunteerRoute"));
router.use("/attandancesheet", require("./attandanceSheetRoute"));

module.exports = router;
