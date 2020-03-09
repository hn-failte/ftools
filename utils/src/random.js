/**
 * @function randomColor
 * @description Get Random Color
 * @returns {Color}
 */
export function getRandomColor() {
    var colorString = "0123456789abcdef";
    var color = "#";
    for (var i = 0; i < 6; i++)
        color += colorString[Math.floor(Math.random() * 16)];
    return color;
}

/**
 * @function getRandom
 * @description get random number
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
export function getRandomNum(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

/**
 * @function getRandomStr
 * @description get random string
 * @returns {String}
 */
export function getRandomStr() {
	return Math.random().toString(36).slice(2)
}

/**
 * @function getRandomCap
 * @description get random string
 * @returns {String}
 */
export function getRandomCap() {
	let val = Math.floor(Math.random()*52)
	return String.fromCharCode(val >= 26 ? (val - 26 + 65) : (val + 97))
}
