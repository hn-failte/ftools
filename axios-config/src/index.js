const axios = require("axios")

const instance = axios.create({
    // 请求超时设置
    timeout: 5000,
    // 响应的最大长度
    maxContentLength: 1024000,
    // 响应的数据类型
    responseType: 'json',
    // 请求成功的判断
    validateStatus: status => status >= 200 && status < 300,
    // 最大重定向次数
    maxRedirects: 5,
    // 允许跨域设置Cookie
    withCredentials: false
})

// 请求头拦截
instance.interceptors.request.use((request)=>{
    if(request.method == "post"){
        request.data = request.data;
    } else if(request.method == "get"){
        request.params = {...request.data}
    }
    return request;
}, (rej)=>{
    return Promise.reject(rej)
})

// 响应头拦截
instance.interceptors.response.use((response)=>{
    if(response.statusText === "ok"){
        return response.data;
    }
}, (rej)=>{
    return Promise.reject(rej)
})

module.exports = instance;