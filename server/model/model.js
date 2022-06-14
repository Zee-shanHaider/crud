const mongoose=require("mongoose");

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        unique:true,
        required: true,
    },
    gender: String,
    status: String,
});

const UserDB= mongoose.model('userDB', Schema);

module.exports= UserDB;