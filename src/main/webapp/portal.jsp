<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<%@ include file="common/header.jsp"%>

<div id="west" region="west">
	<div class="leftcontent">
		<div id="nav">
			<!--  首页导航内容 -->
			<div class="shortcut">
				<div class="header">
					<div class="icon"></div>
					<p class="title">快捷工具</p>
					<!-- <a class="more" style="cursor: pointer;"></a> -->
				</div>
				
					<div class="content">
						<ul>
							
					</div>

			</div>
			<div class="placeholder">
				<p class="chainleft"></p>
				<p class="chainright"></p>
			</div>
			<div class="circle">
				
				
					<div class="content">
						<div class="scrollbar_container scrollbar_container_clicked">
							<ul id="circle">


							</ul>
						</div>
					</div>
			</div>

			<!--  导航内容 -->

		</div>
	</div>
</div>

<iframe scrolling="no" frameborder="0"
				src="./common/myInfo.jsp"
				style="position:absolute;top:65px;right:60px;width:100px;height:122px; overflow: hidden;z-index:9999;display:none;" allowTransparency="true" id="myInfo"></iframe>
<iframe scrolling="no" frameborder="0"
				src="./changeHeadPic.jsp"
				style="position:absolute;top:0px;left:0px;width:100%;height:100%; overflow: hidden;z-index:9999;display:none;" allowTransparency="true" id="changeMyInfo"></iframe>
<iframe scrolling="no" frameborder="0"
				src="./changePwd.jsp"
				style="position:absolute;top:0px;left:0px;width:100%;height:100%; overflow: hidden;z-index:9999;display:none;" allowTransparency="true" id="changePwd"></iframe>
								
<div id="mainPanle" region="center">
	<div id="tabs" class="easyui-tabs rightcontent" fit="true"
		border="false">
		<div title="欢迎使用">
			<!-- <h1>欢迎使用银川社区网站后台管理系统</h1> -->
			<iframe scrolling="no" frameborder="0"
				style="width: 100%; overflow: hidden;display:none;z-index:1" id="earthPortal"></iframe><!-- src="./modules/resident/earth.jsp" -->
		</div>
	</div>
</div>

<div region="south" class="footer">
	<span>中兴软创科技股份有限公司</span><span class="">©</span><span>版权所有</span><span> <img src="images/login/zsmartcity.png" alt=""></span>
</div>

<div id="mm" class="easyui-menu" style="width: 150px;">
	<div id="tabupdate">刷新</div>
	<div class="menu-sep"></div>
	<div id="close">关闭</div>
	<div id="closeall">全部关闭</div>
	<div id="closeother">除此之外全部关闭</div>
	<div class="menu-sep"></div>
	<div id="closeright">当前页右侧全部关闭</div>
	<div id="closeleft">当前页左侧全部关闭</div>
	<div class="menu-sep"></div>
	<div id="exit">退出</div>
</div>
<input type="hidden" value="<%=g_basePath %>" id="hiddenpath">
<input type="hidden" value="<%=session.getAttribute("USER_ID")%>"
	id="userid">
<input type="hidden" value="<%=session.getAttribute("STAFF_ID")%>"
	id="staffId">
<input type="hidden" value="<%=session.getAttribute("AREA_ID")%>"
	id="areaid">

</body>
</html>

