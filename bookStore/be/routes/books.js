const express = require("express");
const Router = express.Router()
const fs = require("fs")

// Get the book model
const Book = require("../models/book");

/*
 * GET http://localhost:3002/api/books
 */
Router.get('/',async(req, res) => {
  const books = await Book.find()
  res.json(books)
})

/*
 * GET http://localhost:3002/api/books/9788532520056
 */
Router.get('/:isbn',async(req, res) => {
  try{
let isbn = req.params.isbn
const book = await Book.find({isbn:isbn})
res.json(book)
  }catch(err){
res.status(500).send(err.message)
  }
})

/*
 * PUT http://localhost:3007/api/books/init
 */
Router.put('/init', async(req, res) => {
  Book.collection.drop()
  fs.readFile('./dal/books.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.json("fail")
            return;
        }
         const jsData = JSON.parse(data)
         jsData.books.forEach(element => {
           new Book(element).save()
         });
       res.json("success")
    });
})

/*
 * POST http://localhost:3002/api/books
 */
Router.post("/",async (req,res)=>{
   try{
const book = new Book(req.body)
let uuid = +(Math.random() + 1).toString().substring(2,8)
book.isbn = uuid
await book.save()
res.status(201).json(book)
  }catch(err){
    res.status(500).send(err.message)
  }
})

/*
 * PUT http://localhost:3002/api/books/9788532520056
 */
Router.put('/:isbn',async(req,res)=>{
  try{
    const isbn = req.params.isbn
const book = req.body;
const updatedBook = await Book.updateOne({isbn:isbn},book)
if(updatedBook.matchedCount===0)
res.sendStatus(404)
else
res.json({modified:updatedBook.modifiedCount})
  }catch(err){
    res.status(500).send(err.message);
  }
  })

/*
 * DELETE http://localhost:3007/api/books/9788532520056
 */
Router.delete('/:isbn',async(req,res)=>{
  try{
let isbn =req.params.isbn
await Book.deleteOne({"isbn":isbn})
res.sendStatus(204)
  }catch(err){
    res.status(500).send(err.message)
  }
})


module.exports = Router