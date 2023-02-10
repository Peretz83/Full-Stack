const express = require("express")
const router = express.Router()
const fs = require('fs')
const Card = require("../models/cardModel")

const verify_logged_in = require("./../middleware/verify_log_in")

router.get("/",verify_logged_in, async(req,res)=>{
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

router.post("/",verify_logged_in, async(req,res)=>{
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


module.exports = router;