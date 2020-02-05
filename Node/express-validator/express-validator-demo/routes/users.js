var express = require('express');
var router = express.Router();
const {check , validationResult }= require('express-validator');

/* GET users listing. */
router.post('/',[
    // username must be an email
  check('username').isEmail(),
    // password must be at least 5 chars long
  check('password').isLength({ min: 5 }),
      //check the date in format 'YYYY-MM-DD'
  check('dateofbirth').isISO8601(),
  check('age').isInt({ min: 18,max:120 }),
  check('mobile').isMobilePhone('de-DE'),
  check('plz').isPostalCode('DE'),
  check('card').isCreditCard(),
  check('price').isCurrency({Symbol:'$'}),
  check('ip').isIP(),
  check('url').isURL(),
  // how to make costom message
  check('text').not().isEmpty().withMessage('it is rejected becouse it is empty'),
  check('email').trim().isEmail(),
 
], function(req, res, next) {
  console.log(req.body);
  const errors = validationResult(req);
  if(!errors.isEmpty()){ 
  return res.status(422).json({errors:errors.array()});
}
  res.status(200).end('accepted!');

 // res.send('respond with a resource');
});

module.exports = router;
