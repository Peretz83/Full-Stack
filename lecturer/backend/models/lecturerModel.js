const mongoose = require('mongoose');
const validator = require('validator');


const lecturerSchema = new mongoose.Schema({
  
  fName: {
    type: String,
    required: [true, 'Must submit a name.'],
    maxlength: [100, 'Max 100 characters allowed.'],
    minlength: [2, 'Min 2 characters required.']
  },
  lName: {
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
    minlength: [6, 'Phone number is not valid'],
    maxlength: [250, 'Phone number is not valid'],
    match: [/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Enter a valid phone number'],
    // validate: [validator.isDecimal, 'Please enter a valid phone number']
  },
  start_date: {
    type: String,
      required: [true, 'Field Required'],
  },
 

  createdAt: {
    type: Date,
    default: Date.now()
  }
});



const Lecturer = mongoose.model('lecturer', lecturerSchema);

module.exports = Lecturer;
