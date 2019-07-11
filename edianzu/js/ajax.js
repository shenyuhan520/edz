function ajaxGet(url,callback,data){
    data = data ? data : {};
    // "user=admin&pass=123"
    var str = "";
    for(var i in data){
        str = str + i+"="+ data[i] +"&";
    }

    var d = new Date();
    url = url + "?" + str + "__qft=" + d.getTime();

    var ajax = new XMLHttpRequest();
    ajax.open("get",url,true);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            // console.log(ajax.responseText);
            callback(ajax.responseText);
        }
    }
    ajax.send();
}


function ajaxPost(url,callback,data){
//	"a=admin&b=123"
	data = data ? data : {};
	var str	= "";
	for(var i in data){
		str = str + `${i}=${data[i]}&`;
	}
	str = str.slice(0,str.length-1)
	
	var ajax = new XMLHttpRequest();
    ajax.open("post",url,true);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            callback(ajax.responseText);
        }
    }
//  post发送信息时需要设置信息被解析的格式，为表单数据格式
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send(str);
}

