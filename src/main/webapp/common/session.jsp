<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String WebRoot = request.getContextPath();
	String g_basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath();
	String Language = "zh_CN";
	
%>
<script type="text/javascript">
var _USER_ID = '<%=session.getAttribute("USER_ID")%>';
var _STAFF_ID = '<%=session.getAttribute("STAFF_ID")%>';
var _AREA_ID= '<%=session.getAttribute("AREA_ID")%>';
var _ORG_ID = '<%=session.getAttribute("ORG_ID")%>';
var _WEB_ROOT = '<%=WebRoot%>';
var G_BASE_PATH = '<%=g_basePath%>';
</script>