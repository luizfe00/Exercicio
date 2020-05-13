const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const app = express()

// Bodyparser Middleware
app.use(express.json())

// DB config
const db = config.get('mongoURI')

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

// Use Routes
app.use('/api/users', require('./routes/api/user'))
app.use('/api/books', require('./routes/api/book'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server has started on port ${port}`))