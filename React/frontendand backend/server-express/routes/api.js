const express =require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.json({msg : ' Hellow from the other tunnel '});

});
module.exports = router;