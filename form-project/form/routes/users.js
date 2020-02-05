var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { body, check, validationResult } = require('express-validator');

// User model 
// const User = require('../models/User');
// router.post('/register', (req , res)=>{
//   res.send('Hello ')
// })
///post the data to DB


router.post('/register', [
  // our checks here
  check('name').trim().not().isEmpty().withMessage('name is empty'),
  check('email').trim().isEmail().withMessage('email incorrect'),
  check('password').isLength({ min: 6 }).withMessage('password is to short'),
  // check('password2').equals('password').withMessage('passwords are not equal')
  // verifyPasswordsMatch,
  body('password').custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error('Password confirmation does not match password');
      }
      // Indicates the success of this synchronous custom validator
      return true;
    }),
], (req, res) => {
  const { name, email, password, password2 } = req.body;
  console.log(req.body);
  // if there are errors ?
  const check_errors = validationResult(req);
  let errors = [];
  if (!check_errors.isEmpty()) {
     // return res.status(422).json({ errors: check_errors.array() });
     console.log(check_errors.array());
     check_errors.array().forEach((item)=> {
         errors.push(item);
     });
     console.log('errors : ',errors);
     if(errors.length > 0){
      res.render('register' , {
          errors,
          name,
          email,
          password,
          password2
      })
     }
  }
  else {
     // validation passed
     User.findOne({email :email })
     .then(data => {
         if(data){ // we found the email in our database
             errors.push({ msg : ' Email is already registered'});
             res.render('register' ,{
                 errors,
                 name,
                 email,
                 password,
                 password2
             })
         }
         else {
             const newUser = new User({
                 name,
                 email,
                 password
             });
             // Hash Password
             bcrypt.genSalt(10 ,(err , salt) => {
                 bcrypt.hash(newUser.password ,salt , (err , hash) => {
                     if(err) throw err ;
                     // set hashed password
                     newUser.password = hash ;
                     console.log('the hashed pass is : ' + newUser.password);
                     // save the user data to our database
                     newUser.save()
                     .then(user => {
                         req.flash('success_msg', 'You are registered and you can login')
                         res.redirect('/users/login');
                     })
                     .catch(err =>{ console.log(err);
                     });
                 } )
             })
         }
     });
 }
});







router.post('/register',[
  check('name').trim().not().isEmpty().withMessage('name is empty'),
  check('lname').trim().not().isEmpty().withMessage('lname is empty'),
  check('bdate').trim().not().isISO8601().withMessage('lname is empty'),
  check('nationality').not().isEmpty().withMessage('nationality is empty'),
  check('gender').not().isEmpty().withMessage('gender is empty'),
  check('phone').not().isMobilePhone('de-DE').withMessage('phone is empty'),
  check('email').not().isEmail().withMessage('email is empty'),
  check('password').not().isLength({min:6}).withMessage('password is empty'),
  body('password').custom((value,{req })=>{
    if (value !== req.body.password2){
      throw new Error('password confirmation dose not match');
      
    }
    return true;
  }),
], (req,res)=>{
  const {name ,lname,email,bdate,nationality,gender,phone,password,password2}=req.body;
  let errors =[];
  const check_errors = validationResult(req);
  if(!check_errors.isEmpty()){
    check_errors.array().forEach((item)=>{
      errors.push(item);
    
  });
  console.log('err array ',errors);
  
 
  
  res.render('register' , {
    errors,
    name,
    lname,
    email,
    bdate,
    nationality,
    gender,
    phone,
    password,
    password2
})
}
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res,) {
   res.render('register'); 
});

module.exports = router;
