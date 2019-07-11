// function setCookie(key,value,options){
// 	console.log(value)
// 	options = options ? options : {};
// 	var path = options.path ? `path=${options.path};` : "";
// 	if(options.expires){
// 		var d = new Date();
// 		d.setDate(d.getDate()+options.expires);
// 		var day = `expires=${d};`;
// 	}else{
// 		var day = "";
// 	}

// 	document.cookie = `${key}=${value};${path}${day}`;
// 	console.log(`${key}=${value};${path}${day}`,999)
// }

// function removeCookie(key,options){
// 	options = options ? options : {};
// 	options.expires = -1;
// 	setCookie(key,null,options);
// }

// function getCookie(key){
// 	var str = document.cookie;
// 	for(var i=0;i<str.split("; ").length;i++){
// 		if(str.split("; ")[i].split("=")[0] == key){
// 			return str.split("; ")[i].split("=")[1];
// 		}
// 	}
// 	return "";
// }

// 增
function setCookie(key,value,options){
	options = options ? options : {};
	
//			处理默认的path
	var path = options.path ? `path=${options.path};` : "";
//			处理默认了有效期
	if(options.expires){
		var d = new Date();
		d.setDate(d.getDate()+options.expires);
		var day = `expires=${d};`;
	}else{
		var day = "";
	}
//			开始设置
	document.cookie = `${key}=${value};${path}${day}`;
	console.log(document.cookie)
}

//		setCookie("c","30",{
//			path:'/',
//			expires:3
//		})
//		setCookie("g","70",{
//			expires:5
//		})
//		setCookie("d","40",{
//			path:'/',
//		})
//		setCookie("e","50",{})
//		setCookie("f","60")


//		setCookie("c","heiheihei",{
//			path:"/"
//		})


//		删
function removeCookie(key,options){
//			设置默认配置信息
	options = options ? options : {};
//			将有效期设置为负
	options.expires = -1;
//			借助设置cookie的方法,将有效期改成昨天
	setCookie(key,null,options);
}
//		removeCookie("a")
//		removeCookie("a",{
//			path:"/"
//		})
//		removeCookie("b",{
//			path:"/"
//		})
//		removeCookie("g")

//		查
function getCookie(key){
//			获取所有cookie
	var str = document.cookie;
//			第一次分割:每组cookie是一个整体
	for(var i=0;i<str.split("; ").length;i++){
//				第二次分割:名字和值的分割
		if(str.split("; ")[i].split("=")[0] == key){
//					返回对应的值
			return str.split("; ")[i].split("=")[1];
		}
	}
//			循环结束后,没有返回数据,表示没有找到,可以为空了
	return "";
}
// console.log(getCookie("a"));
