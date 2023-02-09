const { fail } = require("assert")
const express = require("express")
const router = express.Router()
const User = require("./../models/userModel")


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