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


module.exports = Router