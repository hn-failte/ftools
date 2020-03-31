const axios = require("axios");

axios({
  method: 'get',
  url: 'http://www.baidu.com/',
  withCredentials: true,
  responseType: 'json'
}).then(
  res => {
    console.log("ok");
    require("fs").writeFileSync("./baidu.html", res.data, "utf8");
  },
  rej => {
    console.log(rej);
  }
);
