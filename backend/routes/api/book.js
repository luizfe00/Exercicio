const express = require('express')
const router = express.Router()
const config = require('config')


// Book Model
const Book = require('../../models/Book')


// @route  GET api/books
// @desc   GET All Items
// @access Public
router.get('/', (req, res) => {
    Book.find()
        .sort({ date: 1 })
        .then(books => res.json(books))
})


// @route  POST api/books
// @desc   Register new book
// @access Public
router.post('/', (req, res) => {
    const newBook = new Book ({
        title: req.body.title
    })

    newBook.save().then(book => res.json(book))
})

module.exports = router