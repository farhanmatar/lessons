var express = require('express');
var router = express.Router();
let path=require('path')
/* GET users listing. */
router.get('/', function(req, res, next) {
  /* res.send('<h1> info page </h1>'); */
  res.sendFile(path.join(__dirname,'../public/info.html'))
});

module.exports = router;