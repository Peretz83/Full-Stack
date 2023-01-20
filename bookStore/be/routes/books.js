const express = require("express");
const Router = express.Router()
const fs = require("fs")
// const bcrypt = require('bcryptjs')

// Get the book model
const Book = require("../models/book");

/*
 * GET / index
 */
Router.get('/',async(req, res) => {

  const books = await Book.find();




  res.json(books)
  
})

/*
 * PUT INIT which sets everything back 
 */
Router.put('/init', async(req, res) => {
  
  // 1.Clear the 'books' collection from all entries
  Book.collection.drop()
  
  // 2.Read the baseline .json data from "books.json"
  fs.readFile('./dal/books.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.json("fail")
            return;
        }
        
        // success file read
         // 3.Insert all of the .json data into the "books" collection
         const jsData = JSON.parse(data)

         jsData.books.forEach(element => {
           new Book(element).save()
         });

       res.json("success")
    });
 
})
/*
 * DELETE from data base by id
 */
Router.delete('/:_isbn',async(req,res)=>{
  try{
let isbn =req.params._isbn
await Book.deleteOne({"isbn":isbn})

  }catch(err){
    res.status(500).send(err.message)
  }
  res.json('success')
})

/*
 * POST create a book or user
 */

Router.post("/",async (req,res)=>{
   try{
    //  1.
const book = new Book(req.body)
// 2.

// 3.
await book.save()
// 4.
res.status(201).json(book)


  }catch(err){
    res.status(500).send(err.message)
  }
 
})







/*
 * PUT to edit.
 */
// Statuses:
// -200: Successful updated the book
// -400: validation error(productModel is invalid)
// -404:Book with
// -
Router.put('/:_isbn',async(req,res)=>{

  // 1.create a try/catch block
  try{

    // 2. Extract 'isbn' value from the URL/path 'request.params'
    const isbn = req.params._isbn;

// 3.Extract the book properties from the 'request.body'
const book = req.body;
  // 4.[validate Book object]-->
  // -[failed validation]return status 400, including specific error message

  // 5. Execute mongoose 'update' function with 'isbn' and the book 'object'

const updatedBook = await Book.updateOne({isbn:isbn},book);

// -[No ISBN provided or ISBN doesnt exist in DB] return status 404
if(updatedBook.matchedCount===0)
res.sendStatus(404);

// -[success] return status 200
else
res.json({modified:updatedBook.modifiedCount});

// -[Any unknown exception]return status 500(..catch..)
  }catch(err){
    res.status(500).send(err.message);
  }
  })



module.exports = Router