'use strict';
const  = require('scanCtrl')

function requestScan() {
  console.log('request called');
  let newReq = new XMLHttpRequest();
  newReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
      saveScanResults(this.response);
    }
  };
  newReq.open('GET', 'http://127.0.0.1:8888/', true);
  newReq.send();
}

function saveScanResults(scanArr) {
  const { Device, Scan } = req.app.get('models');
  Device.bulkCreate(scanArr, { fields: [ip, mac, vendor] }).then(response => {
    console.log(response);
  });
}
