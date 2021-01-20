/**
 * @function getArrayItems
 * @description 选择源数组source中从start开始的number个任意连续项，后续不足的用前面的补充
 * @param {source} obj
 * @param {start} obj
 * @param {number} obj
 */
export const getArrayItems = ({ source, start, number }) => {
    if (start > source.length - number) {
        let temp = source.slice(start, start + number);
        return temp.concat(source.slice(0, number - (source.length - start)));
    } else return source.slice(start, start + number);
};
