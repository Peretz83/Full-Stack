const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    username: String,
    password: String
})

const userModel = mongoose.model("UserModel", UserSchema, "users");

module.exports = userModel;