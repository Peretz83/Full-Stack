const express = require('express')
const Router = express.Router()
const fs = require('fs')
const candyModel = require('../models/candyModel')
const candyModelJoi = require('../models/candyModelJoi')


/*
* GET http://localhost:3007/api/books/554545
*/
Router.get("/:prod_id", async (req, res) => {
    try {
        const candy = await candyModel.findOne({prod_id: req.params.prod_id})
        res.json(candy)
    } catch(err) {
        res.status(500).send(err.message)
    }
})


/*
* GET http://localhost:3003/api/candystore
*/
Router.get("/",async(req,res)=>{
try{
const candy = await candyModel.find()
res.json(candy)
}catch(err){
res.status(500).send(err.message)
}
})

/*
* PUT http://localhost:3003/api/candystore/init
*/
Router.put("/init",async(req,res)=>{
try{
  candyModel.collection.drop()
fs.readFile('./dal/candy.json', 'utf8', (err, data)=>{
if (err){
  console.log(err);
  res.json('fail')
  return
}
const jsData = JSON.parse(data)
jsData.candy.forEach(element => {
  new candyModel(element).save()
});
res.json('init success')
})

}catch(err){
res.status(500).send(err.message)
}
})

// POST http://localhost:3003/api/candystore
Router.post("/", async (request, response) => {
    try {
       
        const joiCandy = new candyModelJoi(request.body);
         let uuid = +(Math.random()+1).toString().substring(2,8)
         joiCandy.prod_id = uuid

      
        const errors = joiCandy.validatePost(); 
        if (errors)
            return response.status(400).send(errors);

        
        const candy = new candyModel(joiCandy);
       

        await candy.save();

       
        response.status(201).json(candy);
    } catch(err) {
        response.status(500).send(err.message);
    }
});

/*
* PUT http://localhost:3007/api/books/554545
*/
Router.put("/:prod_id", async (request, response) => {
    try {
   
        const candy = request.body;
         candy.prod_id = request.params.prod_id;
        const joiCandy = new candyModelJoi(candy);
        const errors = joiCandy.validatePut();
        if (errors){
            return response.status(400).send(errors);
        }else{
            const updatedCandy = await candyModel.updateOne({Prod_id: candy.prod_id}, joiCandy);
            if(!updatedCandy){
                response.sendStatus(404)
            }else{
                response.json(updatedCandy)
            }        
        } 
    }catch(err) {
        response.status(500).send(err.message)
    }
})



/*
* DELETE http://localhost:3003/api/candystore/564545
*/
Router.delete("/:prod_id", async (req, res) => {
    try {
        const prod_id = req.params.prod_id
        await candyModel.deleteOne({prod_id: prod_id})
        res.sendStatus(204)
    } catch(err) {
        res.status(500).send(err.message)
    }
})














module.exports = Router