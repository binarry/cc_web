//验证只能输入正整数
function check_num(object){
	var reg = new RegExp("^[0-9]*$"); 
	if(!reg.test(object.value)){  
		top.$.messager.alert("提示", "只允许录入数字");
		return;
    }  
} 

//验证只能输入英文字母
function check_eng(object){
	var reg = new RegExp("^[A-Za-z]+$"); 
	if(!reg.test(object.value)){  
		top.$.messager.alert("提示", "只允许录入英文");
		return;
    }  
}

//验证由数字和26个英文字母组成的字符串
function check_engAndnum(object){
	var reg = new RegExp("^[A-Za-z0-9]+$"); 
	if(!reg.test(object.value)){  
		top.$.messager.alert("提示", "只允许录入英文或数字");
		return;
    }  
}

//验证由数字、26个英文字母或者下划线组成的字符串
function checkCharacter(object){
	var reg = new RegExp("^\w+$"); 
	if(!reg.test(object.value)){  
		top.$.messager.alert("提示", "只允许录入英文、数字、下划线");
		return;
    }  
}

//验证中文
function checkChinese(object){
	var reg = new RegExp("^[\u4e00-\u9fa5],{0,}$"); 
	if(!reg.test(object.value)){  
		top.$.messager.alert("提示", "只允许录入中文");
		return;
    }  
}