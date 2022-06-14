const mongoose=require("mongoose");
async function connectDB() {
    try{
        const con= await mongoose.connect(process.env.mongo_url);
        console.log(`Mongodb Connected : ${con.connection.host}`);

    }catch(err){
        console.log(err);
        process.exit[1];

    }
  }
  module.exports=connectDB;