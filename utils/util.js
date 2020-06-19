// px和rpx的转换  rpxToPx: 由rpx转为px ; pxToRpx: 由px转为rpx
function transformPxRpx(value, type) {
	const { windowWidth } = uni.getSystemInfoSync()
	if(type === 'pxToRpx') {
		return value * 750 / windowWidth
	}
	if(type === 'rpxToPx') {
		return value * windowWidth / 750
	}
}

// Picker选择器的数据  integerArr: 整数数组; floatArr: 小数数组
function pickerData(type) {
	
	const integerArr = (start, last) => {
		const arr = [];
		for(let i = last; i >= start; i --) {
			arr.push(i)
		}
		return arr
	};
	const floatArr = () => {
		const arr = [];
		let i = 0.9;
		while(i > 0) {
			arr.push(i);
			i = parseFloat((i - 0.1).toFixed(1));
		}
		return arr
	}
	
	const typeActions = {
		'height': () => { 
			return { int: integerArr(120, 220), float: floatArr() }
		},
		'weight': () => {
			return { int: integerArr(30, 150), float: floatArr() }
		}
	}
	
	return typeActions[type]()
}

function twoDemensionArray(array) {
	if(Object.prototype.toString.call(array) !== '[object Array]') {
		console.error('不是数组')
		return []
	}
	const arr = []
	const times = parseInt(array.length / 4)
	for(let i = 0; i <= times; i ++) {
		arr.push(array.splice(0, 4))
	}
	return arr
}

export { transformPxRpx, pickerData, twoDemensionArray }
