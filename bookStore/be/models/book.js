let mongoose = require('mongoose')

//Book schema

let bookSchema = mongoose.Schema({
  isbn: {
    type: Number,
    
  },
  title: {
    type: String,
    
  },
  description: {
    type: String,
   
  },
  price: {
    type: Number,
    
  },
  quantity: {
    type: Number,
 
  }
  
})

let Book = module.exports = mongoose.model('Book', bookSchema)