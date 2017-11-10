'use strict';
// const models = require();

function requestScan() {
  console.log('request called');
  let getReq = new XMLHttpRequest();
  getReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let postReq = new XMLHttpRequest();
      console.log(this.response);
      postReq.open('POST', '/', true);
      postReq.setRequestHeader('Content-type', 'application/json');
      postReq.send(JSON.stringify({ scanArr: this.response }));
    }
  };
  getReq.open('GET', 'http://127.0.0.1:8888/', true);
  getReq.send();
}
