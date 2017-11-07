'use strict';

// nmap setup
const nmap = require('node-nmap');
nmap.nmapLocation = 'nmap';

module.exports.pingLocal = (req, res, next) => {
  console.log(req);
  // let quickscan = new nmap.QuickScan('10.0.0.*');
  // quickscan.on('complete', function(data) {
  //   console.log('scan complete');
  //   res.json(data);
  // });
  // console.log('starting scan');
  // quickscan.startScan();
  // console.log('scanning');
};
