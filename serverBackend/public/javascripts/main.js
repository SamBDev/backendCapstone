'use strict';
// const models = require();

function requestScan() {
  console.log('request called');
  let getReq = new XMLHttpRequest();
  getReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let postReq = new XMLHttpRequest();
      postReq.open('POST', '/', true);
      postReq.setRequestHeader('Content-type', 'application/json');
      postReq.send(JSON.stringify({ scanArr: this.response }));
    }
  };
  getReq.open('GET', 'http://192.168.0.75:8888/', true);
  getReq.send();
}
