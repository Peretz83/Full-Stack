const express = require("express")
const router = express.Router()
const fs = require('fs')
const Card = require("../models/cardModel")

const verify_log_in = require("./../middleware/verify_log_in")

router.get("/:id",verify_log_in, async(req,res)=>{
try{
const id = req.params.id


 if(!id){
      return res.status(400).json({
        message:"problem with URL details"

      })
    }
    const oneCard = await Card.findById(id)
    if(!oneCard){
      return res.status(400).json({
        message:"No ID found"

      })
    }
res.status(200).json({
  status:"success",
  results:oneCard.length,
  data:oneCard
})
}catch(err){
res.status(400).json({
  status:"Failed",
  message:err.message
})
}
})

router.get("/",verify_log_in, async(req,res)=>{
try{
const allCards = await Card.find()
res.status(200).json({
  status:"success",
  results:allCards.length,
  data:allCards
})
}catch(err){
res.status(404).json({
  status:"Failed",
  message:err.message
})
}
})

router.post("/",verify_log_in, async(req,res)=>{
  try{
const decoded = req.user
req.body.user_id = decoded.id
const newCard = await Card.create(req.body)
res.status(200).json({
  status:"success",
  data:newCard
})
}catch(err){
res.status(400).json({
  status:"Failed",
  message:err.message
})
}

});

router.put("/init", async(req,res)=>{
  try{
  Card.collection.drop()
fs.readFile('./dal/cards.json', 'utf8', (err, data)=>{
if (err){
  console.log(err);
  res.json('fail')
  return
}
const jsData = JSON.parse(data)
jsData.cards.forEach(element => {
  new Card(element).save()
});
res.json('init success')
})

}catch(err){
res.status(500).send(err.message)
}

});

router.put("/:id",verify_log_in, async(req,res)=>{
  try{
    // const {id} = req.params
    const id = req.params.id
    if(!id){
      return res.status(400).json({
        message:"No id found"

      })
    }
    const oneCard = await Card.findByIdAndUpdate(id,req.body,{
      new:true,
      runValidators:true 

    })
    if(!oneCard){
      return res.status(400).json({
        message:"No id found"

      })
    }
    
    res.status(200).json({
      status:"success",
      data:oneCard
    })

  }catch(err){
   res.status(400).json({
      status:"fail",
      message: err.message
    })
  }
})

router.delete("/:id",verify_log_in, async(req,res)=>{
  try{
   
    const id = req.params.id
    if(!id){
      return res.status(400).json({
        message:"problem with URL details"

      })
    }

    
    const deleted = await Card.findByIdAndDelete(id)

    
    if(!deleted){
      return res.status(400).json({
        message:"problem with URL details"

      })
    }
    
    res.status(204).json({
      status:"Deleted",
      data:null
    })

  }catch(err){
   res.status(404).json({
      status:"fail",
      message: err.message
    })
  }
})


module.exports = router;