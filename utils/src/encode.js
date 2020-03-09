/**
 * @function fromXtoY
 * @description make X Binary number to Y Binary number
 * @param {*} num
 * @param {*} [X]
 * @param {*} [Y]
 * @returns {String}
 */
export function fromXtoY(num, X, Y) {
    if (X > 36 || Y > 36 || X < 2 || Y < 2)
        throw new Error("X and Y must between 2-36");
    if (arguments.length > 3 || arguments.length < 1)
        throw new Error("Arguments number must between 1-3");
    if (typeof num == "number")
        throw new Error("Type of arg1 can not be a number");
    switch (arguments.length) {
        case 1:
            if (num.search(/^0x/i) >= 0) return parseInt(num, 16);
            else if (num.search(/^0/i) >= 0) return parseInt(num, 8);
            else return parseInt(num, 10);
            break;
        case 2:
            return parseInt(num, X);
            break;
        case 3:
            return parseInt(num, X).toString(Y);
            break;
        default:
            return;
    }
}

/**
 * @function charcoding
 * @description make String to ASCII
 * @param {String} str
 * @param {String} separator
 * @returns {String}
 */
export function charcoding(str, separator) {
    var string = "";
    for (var i = 0; i < str.length; i++) {
        string += str.charCodeAt(i) + separator;
    }
    return string;
}

/**
 * @function uncharcoding
 * @description make ASCII to String
 * @param {String} str
 * @param {String} separator
 * @returns {String}
 */
export function uncharcoding(str, separator) {
    var string = "";
    var temp = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != separator) temp += str[i];
        else {
            string += String.fromCharCode(parseInt(temp));
            temp = "";
        }
    }
    return string;
}
