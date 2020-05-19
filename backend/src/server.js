const express = require('express');
const routes = require('./routes');

const db = require('./database')

// Testing the connection
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
