let mongoose = require('mongoose')

//Car schema

let carSchema = mongoose.Schema({
  make: {
    type: String,
    
  },
  model: {
    type: String,
    
  },
  year: {
    type: Number,
   
  },
  color: {
    type: String,
    
  },
  price: {
    type: Number,
 
  },
   acceleration: {
    type: Number,
    
  },
   maximum_speed: {
    type: Number,
    
  },
   description: {
    type: String,
    
  },
   in_stock: {
    type: Number,
    
  },
   car_id: {
    type: String,
    
  },
   image: {
    type: String,
    
  },
  
  
})

let Car = module.exports = mongoose.model('Car', carSchema)