const mongoose=require("mongoose");

const connectDB= async function(){
   try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`Mongo DB is Connected at ==>  ${conn.connection.host}`)
    }catch(error){
        return  console.log("Can't connect to DB",error); 
    }
};

module.exports=connectDB;