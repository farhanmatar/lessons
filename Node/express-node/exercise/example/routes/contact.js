var express = require('express');
var router = express.Router();

let data = {
    email:'sebastian@gmail.com',
    adress:'heimfeld',
    phone:'12345678',

}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact',data);
});

module.exports = router;
