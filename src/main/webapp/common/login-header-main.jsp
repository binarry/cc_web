

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.util.Random"%>
<%
	//当前路径
	String g_basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath(); ; 
	//当前时间
	Random g_random = new Random();
	
	String staffName = (String)session.getAttribute("STAFF_NAME");
	String headPic = (String)session.getAttribute("HEAD_PIC");
	
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 	<title>社区网格采集管理系统</title>
  
</head>

<body>
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


