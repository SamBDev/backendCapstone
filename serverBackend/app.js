const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let routes = require('./routes/');

require('dotenv').config();
const port = process.env.PORT || 8080;

// using require('./models') to get the models may create more than one connection to the database. To avoid that, the models variable must be somehow singleton-esque. This can be achieved by attaching the models module to the application:
app.set('models', require('./models')); //pulls in models/index.js by default. Index exports all the models you define in the models folder. So cool.
// And when you need to require a class of the model in a controller, use this insise a middleware function rather than a direct import:
// const { Computer } = req.app.get('models');
