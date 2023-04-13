const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./../models/userModel');
const verify_logged_in = require('../middleware/verify_logged_in')
const validator = require('validator');

// Token signing function
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
};

const cookieOptions = {
  expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), 
  httpOnly: true
};




/*
* POST http://localhost:3001/api/users/register
*/
router.post('/register', async (req, res)=>{
  try {
    const { name, email, password, confirmPassword } = req.body;
    const duplicateEmail = await User.findOne({ email: email });
    if (duplicateEmail) {
      return res.status(400).json({ status: 'Fail', message: 'Email already exist' });
    }
    const newUser = await User.create(req.body);
    const { _id } = newUser;


    res.status(200).json({
      status: 'Success',
      data: { name, email, _id },
      message: 'User has been registered successfully.'
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err.message
    });
  }
})

/*
* POST http://localhost:3001/api/users/login
*/
router.post('/login', async (req, res)=>{
 try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ status: 'No email or password found.' });
    }
    const user = await User.findOne({ email }).select('+password'); 
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ status: 'Email or password invalid.' });
    }
    const token = signToken(user._id);
    
    if (!token) {
      return res.status(401).json({ status: 'There was problem with your authentication, please sign in again.'});
    }

    res.cookie('jwt', token, cookieOptions);
   
    
    res.status(200).json({
      status: 'Success',
      token: token 
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err.message
    });
  }
});


module.exports = router;