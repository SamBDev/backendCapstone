const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let routes = require('./routes/');

// require('dotenv').config();
const port = process.env.PORT || 8080;

// Setup bodyparser\
app.use(bodyParser.json());

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
