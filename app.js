const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
const app = express();
app.use(bodyParser.json());

let port = 3400;
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
// const db = require('./model/db');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dietHelper', {useNewUrlParser: true});

app.use('/products', product);


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});