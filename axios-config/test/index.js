const http = require("../src");
const CancelToken = require("axios").CancelToken;
const source = CancelToken.source();

http.get("http://www.baidu.com/", { cancelToken: source.token }).then(
  res => {
    console.log("ok");
    require("fs").writeFileSync("./baidu.html", res, "utf8");
  },
  rej => {
    console.log(rej);
  }
);

setTimeout(() => {
  source.cancel("未在规定时间内响应，取消请求");
}, 100);
