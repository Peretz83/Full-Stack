const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    business:Boolean,
    username: String,
    email:String,
    password: String
})

const userModel = mongoose.model("UserModel", UserSchema, "users");

module.exports = userModel;