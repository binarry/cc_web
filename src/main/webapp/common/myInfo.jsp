<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="../style/bootstrap.min.css" rel="stylesheet">
<script type="text/javascript" src="../js/jquery-1.10.1.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<title>Insert title here</title>
<style type="text/css">
.triangle-up {
	width: 0;
	height: 0;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-bottom: 10px solid #fff;
	position: absolute;
	z-index: 303;
	top: 0px;
	left: 20px;
}

.usermenu {
	border: 1px solid #d1d1d1;
    background: #fff;
    position: absolute;
  /* width: 105px; */
  	top: 9px;
 	padding: 4px 22px;
  	padding-right: 6px;
  	z-index: 302;
  	overflow: hidden
	/* box-shadow: 1px 1px 5px #d1d1d1;
	-webkit-box-shadow: 1px 1px 5px #d1d1d1;
	-moz-box-shadow: 1px 1px 5px #d1d1d1;
	-o-box-shadow: 1px 1px 5px #d1d1d1; */
}

.myInfoClass {
	padding: 0;
}
.usermenu ul{  
  padding: 0px;
  margin-bottom: 10px;
  position: relative;
  right: 10px;
  /* margin-top: 10px; */
  top: 8px;
 }
.usermenu ul>li {
	list-style-type: none;
	/* margin: 8px 11px; */
	margin-bottom: 6px;
	font-size:13px;
	
}

span.glyphicon {
  font-size: 11px;
}

.usermenu ul>li:last-child{
	/* border-bottom:1px solid #d1d1d1; */
	text-align: center;
    margin-right: 0px;
  	margin-left: 0;
  	margin-bottom: 0px;
}

.usermenu>ul>li:hover {
	background: #EBEBEB
}

.usermenu>ul>li .text {
	/* margin-left: 5px; */
	  padding-left: 5px;
}

.hack_last_style{
	padding-right: 26px;
}
</style>
<script type="text/javascript">
	function getMyInfo() {
		closeIframe();
		var frame = $("#changeMyInfo",parent.document);
		frame.attr("src","./changeHeadPic.jsp");
		frame.show();
	}
	function privateMsg() {
		closeIframe();
		parent.window.getSiteMsg();
	}
	function setPwd() {
		closeIframe();
		var frame = $("#changePwd",parent.document);
		frame.attr("src","./changePwd.jsp");
		frame.show();
	}
	function exit() {
		parent.window.logoutConfirm();
	}
	function closeIframe() {
		parent.window.closeChildIframe();
	}
</script>
</head>
<body style="background-color: transparent; ">
	<div class="triangle-up"></div>
	<div class="usermenu">
		<ul>
			<li onclick="getMyInfo()"><span class="glyphicon glyphicon-user"></span><span
				class="text">我的</span></li>
			<li onclick="privateMsg()"><span
				class="glyphicon glyphicon-envelope"></span><span class="text">私信</span></li>
			<li onclick="setPwd()"><span class="glyphicon glyphicon-cog"></span><span
				class="text">帐号设置</span></li>
			<li onclick="exit()"><span class="hack_last_style">
				<span class="glyphicon glyphicon-log-out"></span><span
				class="text">退出</span>
			</span></li>
		</ul>
	</div>
</body>
</html>