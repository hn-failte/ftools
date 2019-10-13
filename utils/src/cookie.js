/**
 * @function getAllCookie
 * @description get all cookie store to an object
 * @returns {Cookie}
 */
export const getAllCookie = () => {
    let ck = document.cookie;
    if (!ck) return;
    ck = ck.split("; ");
    let ckobj = new Object();
    for (let i = 0; i < ck.length; i++) {
        ck[i] = ck[i].split("=");
        ckobj[ck[i][0]] = ck[i][1];
    }
    return ckobj;
}

/**
 * @function getCookie
 * @description get cookie value according to cookie key
 * @param {String} key
 * @returns {Object}
 */
export const getCookie = (key) => {
    let obj = getAllCookie();
    return obj[key];
}

/**
 * @function setCookie
 * @description set an cookie, it contains add and update
 * @param {String} key
 * @param {String} value
 * @param {Number} [day]
 */
export const setCookie = (key, value, day) => {
    if (arguments.length == 2) {
        document.cookie = key + "=" + value;
    }
    if (arguments.length == 3) {
        let date = new Date(new Date().getTime() + day * 8.64e7);
        document.cookie = key + "=" + value + ";expires=" + date;
    }
}

/**
 * @function deleteCookie
 * @description delete a cookie map
 * @param {String} key
 */
export const deleteCookie = (key) => {
    setCookie(key, "", -1);
}

/**
 * @function deleteAllCookie
 * @description delete all cookie map
 */
export const deleteAllCookie = () => {
    let obj = getAllCookie();
    for (let key in obj) {
        deleteCookie(key);
    }
}
