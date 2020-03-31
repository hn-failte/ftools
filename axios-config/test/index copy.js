const http = require("../src");
const CancelToken = require("axios").CancelToken;
let cancel;

http
  .get("http://www.baidu.com/", {
    cancelToken: new CancelToken(_cancel => (cancel = _cancel))
  })
  .then(
    res => {
      console.log("ok");
      require("fs").writeFileSync("./baidu.html", res, "utf8");
    },
    rej => {
      console.log(rej);
    }
  );

setTimeout(() => {
  cancel("未在规定时间内响应，取消请求");
}, 100);
