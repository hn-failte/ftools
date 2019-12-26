export const getParams = key => {
  let params = {};
  location.search
    .slice(1)
    .split("&")
    .forEach(item => {
      let arr = item.split("=");
      let key = arr.splice(0, 1);
      params[key] = arr.join("=");
    });
  return key ? params[key] : params;
};
