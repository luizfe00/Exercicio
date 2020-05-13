const express = require('express')
const router = express.Router()


// User Model
const User = require('../../models/User')


// @route  GET api/users
// @desc   GET All Items
// @access Public
router.get('/', (req, res) => {
    User.find()
        .sort({ date: 1 })
        .then(users => res.json(users))
})


// @route  POST api/users
// @desc   Register new user
// @access Public
router.post('/', (req, res) => {
    const newUser = new User ({
        name: req.body.name
    })

    newUser.save().then(user => res.json(user))
})

module.exports = router