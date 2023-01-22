const express = require("express");
const Router = express.Router()
const fs = require("fs")

const Car = require("../models/carModel");

/*
 * GET / index
 */
Router.get('/',async(req, res) => {

  const cars = await Car.find();




  res.json(cars)
  
})

/*
 * PUT INIT which sets everything back 
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


Router.put('/:car_id/buy',async(req, res) => {


try{
    let carId = req.params.car_id

let purchasedCar = await Car.findOne({car_id:carId})

let newqty = purchasedCar.in_stock -=1

if(purchasedCar.in_stock === 0)
res.sendStatus(404)
else
purchasedCar.in_stock = newqty
await purchasedCar.save()
res.status(200).json(purchasedCar)


}catch(err){
  res.status(409).send(err.message)

}
  


})

module.exports = Router