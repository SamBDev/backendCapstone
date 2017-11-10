'use strict';
// const models = require();

function requestScan() {
  console.log('request called');
  let getReq = new XMLHttpRequest();
  getReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let devices = Array.from(JSON.parse(this.response));
      console.log(typeof devices);
      console.log(devices);
      devices.forEach(device => {
        $('#scanResults').append(`<h3>Device ipAddress: ${device.ip}</h3>`);
      });
      // let postReq = new XMLHttpRequest();
      // postReq.open('POST', '/', true);
      // postReq.setRequestHeader('Content-type', 'application/json');
      // postReq.send(JSON.stringify({ scanArr: this.response }));
    }
  };
  getReq.open('GET', 'http://10.0.0.75:8888/', true);
  getReq.send();
}
