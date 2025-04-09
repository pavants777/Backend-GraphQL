const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : [true, "Name is Required"],
    },
    email : {
        type : String,
        required : [true, "Eamil is Required"],
        unique: true,
        lowercase: true,
    },
    password : {
        type : String,
        required : [true, "Password is Required"],
        validate: {
            validator: function (password) {
                return password.length >= 8; 
            },
            message: "Password must be at least 8 characters long" 
        }
    }
});

const user = mongoose.model("userModel",userSchema);
module.exports = user;