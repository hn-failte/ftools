/**
 * @function getArrayItems
 * @description 选择源数组source中从start开始的number个任意连续项，后续不足的用前面的补充
 * @param {source} obj
 * @param {start} obj
 * @param {number} obj
 */
export const getArrayItems = ({source, start, number}) => {
	if(start > source.length - number) {
		let temp = source.slice(start, start + number)
		return temp.concat(source.slice(0, number - (source.length - start)))
	}
	else return source.slice(start, start + number)
}

// test
// var source = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var number = 5;
// var start = 0;
// setInterval(()=>{
// 	console.log(getArrayItems({source, start, number}));
// 	start += number;
// 	if(start > source.length) start = start  - source.length;
// }, 500);