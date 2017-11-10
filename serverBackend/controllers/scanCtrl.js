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
  Device.bulkCreate(data, {
    fields: ['ip', 'mac', 'vendor']
  }).then(response => {
    response.dataValues = response.map(device => {
      return Object.assign({}, device.dataValues);
    });
    console.log('simplified data for pug', response);
    res.render('scanView.pug', response);
  });
};
