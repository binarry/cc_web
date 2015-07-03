

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="java.util.Random"%>
<%
	//当前路径
	String g_basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath(); ; 
	//当前时间
	Random g_random = new Random();
	
	String staffName = (String)session.getAttribute("STAFF_NAME");
	String headPic = (String)session.getAttribute("HEAD_PIC");
	
	String Language = "zh_CN";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
<title>社区网格采集管理系统</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="X-UA-Compatible" content="IE=10">




<link rel="stylesheet" type="text/css"
	href="js/themes/default/easyui.css" />
<link rel="stylesheet" type="text/css" href="js/themes/icon.css" />
<link href="style/default.css" rel="stylesheet" type="text/css" />
<link href="style/main.css" rel="stylesheet" type="text/css" />
<link href="style/input.css" rel="stylesheet" type="text/css" />
<link rel='stylesheet' href='style/perfect-scrollbar.min.css'/>


<!--[if lt IE 9]>
 <script src="js/html5shiv.js"></script>';
 <script src="js/respond.js"></script>';
<![endif]-->


<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="js/jquery.easyui.min.js"></script>
<script type="text/javascript"
	src="js/locale/easyui-lang-<%=Language%>.js"></script>
<script src='js/perfect-scrollbar.jquery.min.js'></script>
<script>
var download="<%=session.getAttribute("fileServer") %>";
</script>
<script type="text/javascript" src='js/portal.js'></script>

</script>
<!-- <script type="text/javascript" src='js/menus.js'>
	
</script> -->
<script type="text/javascript">
//公共变量
var WebRoot = '<%=request.getContextPath()%>';
var _USER_ID = '<%=session.getAttribute("USER_ID")%>';
var _STAFF_ID = '<%=session.getAttribute("STAFF_ID")%>';
var _AREA_ID= '<%=session.getAttribute("AREA_ID")%>';
</script>
</head>

<body class="easyui-layout" style="overflow-y: hidden" fit="true"
	scroll="no">
	<noscript>
		<div
			style="position: absolute; z-index: 100000; height: 2046px; top: 0px; left: 0px; width: 100%; background: white; text-align: center;">
			<img src="images/noscript.gif" alt='抱歉，请开启脚本支持！' />
		</div>
	</noscript>

	<div id="loading-mask" class="loading-mask">

		<div id="pageloading" class="pageloading">
			<img src="images/loading.gif" align="absmiddle" /> 正在加载中,请稍候...
		</div>


	</div>
	<div class="header" region="north">
		<div class="logo">
			<span> <img
				class="logoimg" src="<%=g_basePath %>/images/logotext.png" /> <!-- <p>社区网格采集管理系统</p> -->
				<img class="version" src="<%=g_basePath %>/images/version.png">
				<p class="versiontext">0.9版本</p>
			</span>

		</div>

		<ul class="level1nav" id="rootNav"></ul>
		<!--未登录-->

		<!--已登录-->
		<div class="haslogin">
			<div class="linear">
			<span class="hide_area"></span>
			</div>
			<div id="showLoginDiv" class="rightHeader"><img id="headPicImg" class="headportait"
				src="<%=headPic %>" /></div>
			<div class="linear"></div>
			<div  class="rightHeader" onclick="getSiteMsg()" id="site_msg">
				<img class="headportMessage" src="images/login/message.png" /> 
				 <span class="headportMessageNum" id="showCountMessage" >0</span>
			</div> 
			
			<div class="linear"></div>
			</div>
		</div>

	</div>
