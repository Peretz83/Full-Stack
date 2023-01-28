const express = require("express");
const Router = express.Router()
const fs = require("fs")

const Car = require("../models/carModel");

/*
 * GET http://localhost:3007/api/cars
 */
Router.get('/',async(req, res) => {

  const cars = await Car.find();
res.json(cars)
  
})

/*
 * GET http://localhost:3007/api/cars/6767
 */
Router.get('/:car_id',async(req, res) => {
  try{
let car_id = req.params.car_id
const car = await Car.findOne({car_id:car_id})
res.json(car)
  }catch(err){
res.status(500).send(err.message)
  }
})

/*
 * PUT http://localhost:3007/api/cars/init (this resets your page)
 */
Router.put('/init', async(req, res) => {
  
  // 1.Clear the 'books' collection from all entries
  Car.collection.drop()
  
  // 2.Read the baseline .json data from "books.json"
  fs.readFile('./dal/cars.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.json("fail")
            return;
        }
        
        // success file read
         // 3.Insert all of the .json data into the "books" collection
         const jsData = JSON.parse(data)

         jsData.cars.forEach(element => {
           new Car(element).save()
         });

       res.json("success")
    });
 
})
/*
 * POST http://localhost:3002/api/cars (this creates a new car)
 */
Router.post("/",async (req,res)=>{
  try{
const car= new Car(req.body)
let uuid = +(Math.random() + 1).toString().substring(2,8)
car.car_id = uuid
await car.save()
res.status(201).json(car)
  }catch(err){
res.status(500).send(err.message)
  }
})









/*
 * Delete http://localhost:3007/api/cars/9465 (this is the delete)
 */
Router.delete('/:car_id',async(req,res)=>{
  try{
let car_id =req.params.car_id
await Car.deleteOne({"car_id":car_id})
res.sendStatus(204)
  }catch(err){
    res.status(500).send(err.message)
  }
})


  /*
 * PUT http://localhost:3007/api/cars/:8524797 (this is the edit)
 */
Router.put('/:car_id',async(req,res)=>{
  try{
    const car_id = req.params.car_id
const car = req.body;
const updatedCar = await Car.updateOne({car_id:car_id},car)
if(updatedCar.matchedCount===0)
res.sendStatus(404)
else
res.json({modified:updatedCar.modifiedCount})
  }catch(err){
    res.status(500).send(err.message);
  }
  })

  /*
 * PUT http://localhost:3007/api/cars/:8524797/buy
 */
Router.put('/:car_id/buy',async(req, res) => {


try{
    let carId = req.params.car_id

let purchasedCar = await Car.findOne({car_id:carId})

let newqty = purchasedCar.in_stock ? purchasedCar.in_stock -=1:0

// if(purchasedCar.in_stock <= 0)
// res.status(404)

// else
purchasedCar.in_stock = newqty
await purchasedCar.save()
res.status(200).json(purchasedCar)


}catch(err){
  res.status(409).send(err.message)

}
  


})

module.exports = Router