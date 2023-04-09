const mongoose = require('mongoose');
const validator = require('validator');

const ticketSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    unique: [true, 'Ticket number already exists'],
    default: () => Math.floor(100000 + Math.random() * 900000)
  },
  status: {
    type: String,
    maxlength: [100, 'Max 100 characters allowed.'],
    minlength: [2, 'Min 2 characters required.'],
    default: 'New'
  },
  priority: {
    type: String,
    maxlength: [100, 'Max 100 characters allowed.'],
    minlength: [2, 'Min 2 characters required.'],
    default: 'Low'
  },
  subject: {
    type: String,
    maxlength: [100, 'Max 100 characters allowed.'],
    minlength: [2, 'Min 2 characters required.']
  },
  message:{
    type: String,
    maxlength: [3000, 'Max 100 characters allowed.'],
    minlength: [2, 'Min 2 characters required.']
  },
  agent:{
    type: String,
    maxlength: [100, 'Max 100 characters allowed.'],
    minlength: [2, 'Min 2 characters required.'],
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  completedAt: {
    type: Date,
    default: Date.now()
  }
});


const Tickets = mongoose.model('tickets', ticketSchema);

module.exports = Tickets;
