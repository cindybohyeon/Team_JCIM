var express = require('express');
var router = express.Router();



router.use("/signup", require("./signup"));
router.use("/signin", require("./signin"));
router.use("/findId", require("./findId"));
router.use("/refresh", require("./refresh"));
// router.use("/findPw", require("./findPw"));




module.exports = router;