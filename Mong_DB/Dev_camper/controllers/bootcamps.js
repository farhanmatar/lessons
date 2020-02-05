const Bootcamp = require('../models/Bootcamps'); 

// get all bootcamp using 
exports.getBootcamps= async(req,res,next)=>{
    //res.status(200).json({success:true, msg: 'show  all bootcamps .....'})
    try{
        const bootcamp = await Bootcamp.find();
        res.status(200).json({success:true, data:bootcamp});
    }
    catch(err){
        res.status(400).json({ success : false })
    }
}
// get a single bootcamp using id
exports.getBootcamp=(req,res,next)=>{
    res.status(200).json({success:true, msg: `show all bootcamps by ID ${req.params.id}`})
}
exports.createBootcamp= async (req,res,next)=>{
  
    // console.log(req.body);
    try{
        const bootcamp = await Bootcamp.create(req.body);
    
    res.status(201).json({ success : true , data:bootcamp});
    

    }catch(err){
        res.status(201).json({ success :false,msg: err});

    }
}
exports.updateBootcamp=async (req,res,next)=>{
    // res.status(200).json({ success : true , msg : ` Update  bootcamps ${req.params.id}`});
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id ,req.body , {
      new : true ,
      runValidators : true  
    }) ;
    if(!bootcamp){
        res.status(400).json({ success : false })
    }
    res.status(200).json({ success : true , data : bootcamp});

}catch(err){
  res.status(400).json( { success : false})

}
}
exports.deleteBootcamp=async(req,res,next)=>{
   // res.status(200).json({ success : true , msg : ` delete  bootcamps ${req.params.id}`})
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id )
          
        if(!bootcamp){
            res.status(400).json({ success : false })
        }
        res.status(200).json({ success : true , data : bootcamp});
    
    }catch(err){
      res.status(400).json( { success : false})
    
    
    }
}