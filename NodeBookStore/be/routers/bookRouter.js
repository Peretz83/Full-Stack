const express = require('express')
const router = express.Router()
const fs = require('fs')
const bookModel = require('../models/bookModel')
const bookModelJOI = require('../models/bookModelJoi')
/*
* GET http://localhost:3007/api/books/3453453453
*/
router.get("/:isbn", async (request, response) => {
    try {
        const book = await bookModel.findOne({isbn: request.params.isbn})
        response.json(book)
    } catch(err) {
        response.status(500).send(err.message)
    }
})

/*
* GET http://localhost:3007/api/books
*/
router.get("/", async (request, response) => {
    try {
        const books = await bookModel.find()
        response.json(books)
    } catch(err) {
        response.status(500).send(err.message)
    }
})

/*
* DELETE http://localhost:3007/api/books/9788532520056
*/
router.delete("/:isbn", async (request, response) => {
    try {
        const isbn = request.params.isbn;
        const joiBook = new bookModelJOI({isbn: isbn});
        const errors = joiBook.validateDelete();
        if (errors)
            return response.status(400).send(errors);
        await bookModel.deleteOne({isbn: isbn});
        response.sendStatus(204);
    } catch(err) {
        response.status(500).send(err.message);
    }
});

/*
* POST http://localhost:3007/api/books
*/
router.post("/", async (request, response) => {
    try {
        const joiBook = new bookModelJOI(request.body);
        const errors = joiBook.validatePost();
        // const errors = book.validateSync();
        if (errors)
            return response.status(400).send(errors);
            const book = new bookModel(joiBook);
        await book.save();
        response.status(201).json(book);
    } catch(err) {
        response.status(500).send(err.message);
    }
});

/*
* PUT http://localhost:3007/api/books/init
*/
router.put("/init", async (request, response) => {
    bookModel.collection.drop()
    fs.readFile('./dal/books.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            response.json("Fail")
            return
        }
        const jsData = JSON.parse(data)
        jsData.books.forEach(element => {
            new bookModel(element).save()
        })
        response.json("Success")
    })
})

/*
* PUT http://localhost:3007/api/books/9788532520056
*/
router.put("/:isbn", async (request, response) => {
    try {
        // const isbn = request.params.isbn;
        const book = request.body;
         book.isbn = request.params.isbn;
        const joiBook = new bookModelJOI(book);
        const errors = joiBook.validatePut();
        if (errors){
            return response.status(400).send(errors);
        }else{
            const updatedBook = await bookModel.updateOne({isbn: book.isbn}, joiBook);
            if(!updatedBook){
                response.sendStatus(404)
            }else{
                response.json(updatedBook)
            }        
        } 
    }catch(err) {
        response.status(500).send(err.message)
    }
})


module.exports = router