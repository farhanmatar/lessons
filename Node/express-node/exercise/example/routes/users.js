var express = require('express');
var router = express.Router();
let data={ 
  userlist:['Farhan','Natali','Peter','ADsleman','Dan','Mahdeah','Ahmad','Ali']
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',data);
});

module.exports = router;
