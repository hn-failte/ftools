/**
 * @function getRandomInt
 * @description 获取随机正整数
 * @param {Number} start
 * @param {Number} end
 * @returns {Number}
 */
export const getRandomInt = (start = 0, end = 1) => {
    return Math.floor(Math.random() * (end - start) + start);
};

/**
 * @function getRandomCap
 * @description 获取随机字母
 * @returns {String}
 */
export const getRandomCap = () => {
    const val = getRandomInt(0, 52);
    return String.fromCharCode(val >= 26 ? val - 26 + 65 : val + 97);
};

/**
 * @function getRandomString
 * @description 获取随机字符串
 * @returns {String}
 */
export const getRandomString = () => Math.random().toString(36).slice(2);

/**
 * @function getRandomColor
 * @description 获取随机颜色
 * @returns {Color}
 */
export const getRandomColor = () => {
    const colorString = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) color += colorString[getRandomInt(0, 16)];
    return color;
};
