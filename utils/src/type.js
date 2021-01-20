/**
 * @function getRandomInt
 * @description 判断数据类型
 * @param {*} obj
 * @returns {Boolean}
 */
export const getType = (obj) =>
    Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

/**
 * @function getRandomInt
 * @description 判断数据是否是对象
 * @param {*} obj
 * @returns {Boolean}
 */
export const isPlainObject = (obj) => getType(obj) === "object";

/**
 * @function getRandomInt
 * @description 判断数据是否是数组
 * @param {*} obj
 * @returns {Boolean}
 */
export const isArray = (obj) => getType(obj) === "array";

/**
 * @function getRandomInt
 * @description 判断数据是否是数组参数对象
 * @param {*} obj
 * @returns {Boolean}
 */
export const isArguments = (obj) => getType(obj) === "arguments";

/**
 * @function getRandomInt
 * @description 判断数据是否是函数
 * @param {*} obj
 * @returns {Boolean}
 */
export const isFunction = (obj) => getType(obj) === "function";

/**
 * @function getRandomInt
 * @description 判断数据是否是字符串
 * @param {*} obj
 * @returns {Boolean}
 */
export const isString = (obj) => getType(obj) === "string";

/**
 * @function getRandomInt
 * @description 判断数据是否是数字
 * @param {*} obj
 * @returns {Boolean}
 */
export const isNumber = (obj) => getType(obj) === "number";

/**
 * @function getRandomInt
 * @description 判断数据是否是字符串或数字
 * @param {*} obj
 * @returns {Boolean}
 */
export const isStringOrNumber = (obj) => isString(obj) || isNumber(obj);

/**
 * @function getRandomInt
 * @description 判断数据是否是undefined
 * @param {*} obj
 * @returns {Boolean}
 */
export const isUndefiend = (obj) => getType(obj) === "undefined";

/**
 * @function getRandomInt
 * @description 判断数据是否是null
 * @param {*} obj
 * @returns {Boolean}
 */
export const isNull = (obj) => getType(obj) === "null";
