console.log('select testing');
const getArrayItems = ({source, start, number}) => {
	if(source.length < number) {
		return source;
	}
	if(start > source.length - number) {
		let temp = source.slice(start, start + number);
		return temp.concat(source.slice(0, number - (source.length - start)));
	}
	else return source.slice(start, start + number);
}

let source = [1, 2];
let number = 5;
let start = 0;
let initTimeStamp = new Date().getTime();
let timer = setInterval(() => {
	let finalTimeStamp = new Date().getTime();
	if(parseInt((finalTimeStamp - initTimeStamp) / 1e3) > 3) {
		clearInterval(timer);
		console.log('select passed test');
		return;
	};
	let res = getArrayItems({source, start, number});
	console.log(res);
	start += number;
	if(start > source.length) start = start  - source.length;
}, 100);