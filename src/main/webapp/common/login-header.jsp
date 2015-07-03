

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.util.Random"%>

<%
	//当前路径
	String g_basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath(); ; 
	//当前时间
	Random g_random = new Random();
	
	String staffName = (String)session.getAttribute("STAFF_NAME");
	String headPic = (String)session.getAttribute("HEAD_PIC");
	
	String timeoutErr = "";
	String redirect = request.getParameter("redirect");
	if(redirect != null){
		timeoutErr = "您未登录或会话超时，请重新登录";
	}
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
 	<title>社区管理系统</title>
    <meta http-equiv="pragma" content="no-cache">  
	<meta http-equiv="cache-control" content="no-cache">  
	<meta http-equiv="expires" content="0">   
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <link rel="stylesheet" type="text/css" href="js/themes/icon.css" />
    <link href="style/default.css" rel="stylesheet" type="text/css" />
    <link href="style/main.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="./style/bootstrap.min.css">
    <link rel="stylesheet" href="./style/login.css">

<!--[if lt IE 9]>
 <script src="js/html5shiv.js"></script>';
 <script src="js/respond.js"></script>';
<![endif]-->

    <script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
    
	<script type="text/javascript">
		function login() {
			var result = false;
			$.ajax({
				type : "post",
				async : false,
				contentType:'application/x-www-form-urlencoded; charset=UTF-8',
				url : "<%=g_basePath%>/user/login",
				data : {
					userCode : $("#inputName").val(),
					password : $("#inputTel").val(),
					
				},
				dataType: "json",
				success : function(data) {
					if(data != null){
						//alert(data.resultMsg);
						var loginErr = document.getElementById("loginErr");
						if(data.respCode =='0000'){
							result = true;
						} else{
							loginErr.innerHTML = data.msg;
						}
						
					}
				},
				error : function(msg) {
					document.write(msg.responseText);
				}
			});
			if(result){
				top.document.location = "<%=g_basePath%>/portal.jsp";
			}
			return false;
		}
	</script>

</head>

<body  style="overflow-y: hidden" >
<noscript>
<div style=" position:absolute; z-index:100000; height:2046px;top:0px;left:0px; width:100%; background:white; text-align:center;">
    <img src="images/noscript.gif" alt='抱歉，请开启脚本支持！' />
</div>
</noscript>

<!-- <div id="loading-mask" class="loading-mask">

<div id="pageloading" class="pageloading">
    <img src="images/loading.gif" align="absmiddle" /> 
    正在加载中,请稍候...
</div> -->


<!-- </div> -->
<div class="header"  >
    <div class="logo" style="width:800px">
        <span>
        <div class="row">
        	 <img class="logoimg" src="<%=g_basePath %>/images/logo.png" />
             <img class="logoimg" src="<%=g_basePath %>/images/logotext.png" />
        </div>
        </span>

    </div>
</div>  



