/**
 * @function jsonp
 * @description jsonp
 * @param {obj} obj
 */
export const jsonp = ({ url, data }) => {
  return new Promise((resolve, reject) => {
    debugger;
    let time = new Date().getTime();
    window["cb_" + time] = res => {
      if (res.err_no === 0) reject(res);
      resolve(res);
    };
    let script = document.createElement("script");
    let params = "";
    for (let key in data) {
      params += key + "=" + data[key] + "&";
    }
    script.src = url + "?" + params + "cb=cb_" + time + "&_=" + time;
    document.body.appendChild(script);
  })
    .then(
      res => {
        console.log("res: ", res);
        return Promise.resolve(res);
      },
      rej => {
        console.log("rej: ", rej);
        return Promise.reject(rej);
      }
    )
    .catch(err => {
      console.log("catch: ", err);
    });
};

/**
 * @function ajax
 * @description ajax with promise
 * @param {String} method
 * @param {String} path
 * @param {String} obj
 * @param {Boolean} async
 * @returns {Promise}
 */
export const ajax = ({ method, path, obj, async }) => {
  if (typeof obj !== "object") throw new Error("params is not a object");
  async = async ? true : false;
  let promise = new Promise(function(resolve, reject) {
    let xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.responseText);
      }
    };
    xhr.onerror = function(err) {
      reject(err);
    };
    let params = "";
    for (let key in obj) {
      params += key + "=" + obj[key] + "&";
    }
    params += "_=" + new Date().getTime();
    if (method == "get") {
      path += "?" + params;
      xhr.open(method, path, async);
      xhr.send(null);
    }
    if (method == "post") {
      xhr.open(method, path, async);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(params);
    }
  })
    .then(
      res => {
        return Promise.resolve(res);
      },
      rej => {
        return Promise.reject(rej);
      }
    )
    .catch(err => {
      console.log(err);
    });
  return promise;
};

export const get = ({ path, obj }) => {
  if (!obj) obj = {};
  return ajax({ method: "get", path, obj, async: true });
};

export const post = ({ path, obj }) => {
  if (!obj) obj = {};
  return ajax({ method: "post", path, obj, async: false });
};
