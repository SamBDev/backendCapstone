const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let routes = require('./routes/');
const path = require('path');

// require('dotenv').config();
const port = process.env.PORT || 8080;

// using require('./models') to get the models may create more than one connection to the database. To avoid that, the models variable must be somehow singleton-esque. This can be achieved by attaching the models module to the application:
app.set('models', require('./models')); //pulls in models/index.js by default. Index exports all the models you define in the models folder. So cool.
// And when you need to require a class of the model in a controller, use this insise a middleware function rather than a direct import:
// const { Computer } = req.app.get('models');

// Setup bodyparser\
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(routes);

// Middleware to deal with missed routes
app.use((req, res, next) => {
  let err = new Error('Not found!');
  err.status = 404;
  next();
});

// Final error handler
// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     message: 'Unsuccessful',
//     err: err
//   });
// });

// Start app
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
