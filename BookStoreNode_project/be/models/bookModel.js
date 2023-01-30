const mongoose = require("mongoose");


const BookSchema = mongoose.Schema({
    isbn: {
        String
    },
    title:{
        type:String,
        required:true,
        minlength:2,
        maxlength:50

    },
    description:{
type:String
    }, 

    price: {
        type:Number,
        required:true,
        min:1,
        max:200
    },

    currency:{
        type:String,
        minlength:3,
        maxlength:3

    },
    quantity: Number,

    image: String

})

const BookModel = mongoose.model("BookModel", BookSchema, "books");

module.exports = BookModel;