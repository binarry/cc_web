<%@ page language="java" contentType="text/html; charset=UTF-8"
	import="com.baidu.ueditor.ActionEnter" import="java.util.Properties"
	pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>

<%
    request.setCharacterEncoding("utf-8");
    response.setHeader("Content-Type", "text/html");

    //String rootPath = application.getRealPath( "/" );
    String rootPath="D:\\UBOSS\\upload\\";
//     Properties p = System.getProperties();
//     String propertyS = p.getProperty("UBOSS_HOME", "D:\\UBOSS");
//     String rootPath = propertyS + "/upload/";

    out.write(new ActionEnter(request, rootPath).exec());
%>