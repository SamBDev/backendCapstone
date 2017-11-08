const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let routes = require('./routes/');

// require('dotenv').config();
const port = process.env.PORT || 8888;

// Setup bodyparser\
app.use(bodyParser.json());

// trying to allow CROS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(routes);

// Middleware to deal with missed routes
app.use((req, res, next) => {
  let err = new Error('Not found!');
  err.status = 404;
  next();
});

// Final error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: 'Unsuccessful',
    err: err
  });
});

// Start app
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
