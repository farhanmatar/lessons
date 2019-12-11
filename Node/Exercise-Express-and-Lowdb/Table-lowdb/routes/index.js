var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/delete',function(req,res,next){
  let id =req.body.id;
  console.log(id);
  
})
module.exports = router;
