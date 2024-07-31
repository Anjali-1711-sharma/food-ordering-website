// creating schema and models (collection and tables) using mongoose for customer

const mongoose = require("mongoose");
const validator = require("validator");

const customerSchema = new mongoose.Schema({

    name:{
        type:String,
        required : true,
    },
    email:{
        type:String,
        required : true,
        unique: [true , "Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    password:{
        type:String,
        required : true,
    },
    phone:{
        type:Number,
        required:true,
        min:10,
       // unique:true
    }
});
// creating new collection
//const Customer = new mongoose.model("Customer",customerSchema); // Customer is collection name in mongoose.model
//module.exports = Customer ;

export default mongoose.models.Customer || mongoose.model("Customer",customerSchema);