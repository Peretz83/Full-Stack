const mongoose = require('mongoose');
const validator = require('validator');

const customerSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, 'Must submit a name.'],
    maxlength: [100, 'Max 100 characters allowed.'],
    minlength: [2, 'Min 2 characters required.']
  },
  lname: {
    type: String,
    required: [true, 'Must submit a name.'],
    maxlength: [100, 'Max 100 characters allowed.'],
    minlength: [2, 'Min 2 characters required.']
  },
  email: {
    type: String,
    unique: true,
    maxlength: [150, 'Max 150 characters allowed.'],
    required: [true, 'Must submit an email.'],
    validate: [validator.isEmail, 'Please provide a valid email.']
  },
  phone: {
    type: String,
    minlength: [10, 'Phone number is not valid'],
    maxlength: [12, 'Phone number is not valid'],
    required: [true, 'Must submit a valid phone number.'],
    match: [/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Enter a valid phone number'],
  },
  address:{
    type: String,
    required: [true, 'Must submit an address.'],
   minlength: [2, 'Phone number is not valid'],
    maxlength: [100, 'Phone number is not valid'],
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});


const Customers = mongoose.model('customers', customerSchema);

module.exports = Customers;
