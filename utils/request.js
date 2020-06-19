const basicUrl = 'http://192.168.3.45:8090'

// 封装请求函数
function requestFunc(api, method, data) {
	return new Promise(resolve => {
		uni.request({
			url: basicUrl + api,
			method: method,
			header: {
				'Content-Type': 'application/json'
			},
			data: data,
			success: res => {
				resolve(res.data)
			},
			fail: err => {
				console.error(err)
			}
		})
	})
}

// 获取验证码
function _getValidateCode(phone) {
	return requestFunc('/send', 'post', { "phone": phone })	
}

// 校验验证码
function _checkValidateCode(phone, code) {
	return requestFunc('/validation', 'post', {"phone": phone, "code": code })
}

// 获取用户信息
function _getUserInfo(phone) {
	return requestFunc(`/user/loaduserInfoByPhone?phone=${phone}`, 'get')
}

export { _getValidateCode, _checkValidateCode, _getUserInfo }