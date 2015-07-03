function validate() {

	var oldPwd = $("#oldPwd").val();
	var newPwd = $("#newPwd").val();
	var cfmPwd = $("#cfmPwd").val();

	$("#pwdErr").text("");
	if (oldPwd == undefined || oldPwd == '') {
		$("#pwdErr").text("原密码不能为空");
		return;
	}

	if (newPwd == undefined || newPwd == '') {
		$("#pwdErr").text("新密码不能为空");
		return;
	}

	if (cfmPwd != newPwd) {
		$("#pwdErr").text("两次新密码不一致");
		return;
	}
	
	var reg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$"); 
	if(!reg.test(newPwd)){// 不符合密码策略
		$("#pwdErr").text("密码必须是6至10位字母与数字组合");
		return;
    }

	var hiddenpath = $("#hiddenpath").val();
	var oldPwdErrConst = $("#oldPwdErrConst").val();
	var userId = $("#userId").val();
	$.ajax({
		type : "post",
		async : false,
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		url : hiddenpath + "/staff/modPwd",
		data : {
			userId : userId,
			oldPwd : oldPwd,
			newPwd : newPwd,
			channel : '0'
		},
		dataType : "json",
		success : function(data) {
			if (data != null) {
				if (data.result == oldPwdErrConst) {
					$("#pwdErr").text("原密码错误");
				} else {
					// $.messager.alert("提示", "修改密码成功");
					// $("#changePwdForm")[0].reset();
					$("#changePwdW").modal("hide");
				}
			} else {
				alert("后台服务异常");
				// top.$.messager.alert("后台服务异常：", "请求错误");
			}
		},
		error : function(msg) {
			alert("后台服务异常");
			// top.$.messager.alert("后台服务异常：", msg.responseText);
		}
	});
}

$(function() {
	$("#changePwdW").modal("show");
	$('#changePwdW').on('hidden.bs.modal', function() {
		// 头像下拉菜单账号设置
		var frame = $("#changePwd", parent.document);
		frame.attr("src", "");
		frame.hide();

		// 首页菜单点击修改密码
		var tab = top.$("#tabs").tabs("getSelected").panel("options");
		if ($(tab.content)[0] && document.URL == $(tab.content)[0].src) {
			top.$("#tabs").tabs("close", tab.tab[0].innerText);
		}
	});
});
