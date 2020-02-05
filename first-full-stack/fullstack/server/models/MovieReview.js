const mongoose=require("mongoose");

const MovieReviewSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
     rating:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:false,
        default:''
    },
    date:{
        type:Date,
        default:Date.now
    },
});

// to create the new collection with name MOvies and inside it the Schema 
const MovieReview=mongoose.model('Movies',MovieReviewSchema);


module.exports=MovieReview