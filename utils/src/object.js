import { isPlainObject, isArray, isString, isNumber, isFunction } from "./type";

// 获取数据的键值数组
export const getKeys = (obj) =>
    isPlainObject(obj) || isArray(obj) ? Object.getOwnPropertyNames(obj) : [];

// 获取数据的键值数量
export const getLength = (obj) =>
    isPlainObject(obj)
        ? getKeys(obj).length
        : isArray(obj)
        ? obj.length
            ? isString(obj)
            : obj.length
            ? isNumber(obj)
            : (obj + "").length
        : 0;

// 从对象中挑选出键值对，并格式化值
export const pickBy = (obj, keys, formater) => {
    return keys.reduce((map, key) => {
        map[key] = isFunction(formater) ? formater(obj[key]) : obj[key];
        return map;
    }, {});
};
