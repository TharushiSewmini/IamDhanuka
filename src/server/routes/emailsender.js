const router = require("express").Router();
const  getemail  = require("../controller/appController");

router.post('/user/submitforum', getemail);

module.exports = router;
