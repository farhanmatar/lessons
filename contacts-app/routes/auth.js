const express = require('express');
const router = express.Router();
const {check , validationResult} =require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken')
const User = require('../models/User');
const auth = require('../middleware/auth')

//@route Post api/contacts
//@desc  Register a user
//@acces Public
router.get('/',auth,async(req,res)=>{
    try{
        const user = await (await User.findById(req.user.id)).isSelected('-password');
        if(!user){
            return res.status(500).send('Server Error');
        }
        res.json(user);
    }catch(error){
    res.status(500).send('Server Error');
    }
   
});

//@route Post api/auth
//@desc  Register a user
//@acces Public
router.post('/',[
    check('email','Please enter a valid email').isEmail(),
    check('password','password is requierd').exists()
],async(req,res)=>{
  
    const errors= validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    } 
     // check emeil and password 
     const {email ,password}=req.body;{
         try{
             let user = await User.findOne({email});
             if(!user){
                 return res.status(400).json({msg: 'Invalid Credentals'});
             }
             const isMatch = await bcrypt.compare(password ,user.password);
             if(!isMatch){
               
                return res.status(400).json({msg:'Invalid Credentals'});
             }
             // generat the tocken 
             const payload = {
                user : {
                    id:user.id 
                }
            }
            jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:3600
            },(err,token)=>{
            if(err)throw err;
            res.json({token})
            })

         } catch(error){console.log(error.message);
            res.status(500).send('Server Error')

         }
     }
});
module.exports = router