const mongoose = require("mongoose");


const CandySchema = mongoose.Schema({
    prod_id: String,
    title: String,
    description: String,
    price: Number,
    in_stock: Number,
    image: String
})

const CandyModel = mongoose.model("CandyModel", CandySchema, "candy");

module.exports = CandyModel;