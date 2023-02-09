const express = require("express")
const router = express.Router()
const jwt = require('jsonwebtoken')
bcrypt = require('bcryptjs')
const User = require("./../models/userModel")
const verify_logged_in = require("./../middleware/verify_log_in")


router.post("/register", async(req,res)=>{
  try{
    const newUser = await User.create(req.body)
    const {name, email, _id} = newUser
    res.status(200).json({
      status:"success",
      data:{name,email,_id},
      message:"user has been registered !"
    })

  }catch(err){
    res.status(401).json({
      status:"fail",
      message: err.message
    })
  }
})

router.post("/login", async(req,res)=>{

})










module.exports = router;