'use strict';

module.exports.displayHome = (req, res, next) => {
  res.render('home.pug');
};

module.exports.saveScanResults = (req, res, next) => {
  console.log('save scan called');
  // console.log(typeof req.body.scanArr);
  const { Device, Scan } = req.app.get('models');
  const data = JSON.parse(req.body.scanArr);
  data.splice(-1, 1);
  console.log(data);
  Device.bulkCreate(data, {
    fields: ['ip', 'mac', 'vendor']
  }).then(response => {
    console.log(response);
  });
};
