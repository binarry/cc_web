

window.onload = function() {
	$('#loading-mask').fadeOut();
}

var _menus = [];// 菜单列表

var onlyOpenTitle = "欢迎使用";// 不允许关闭的标签的标题
var level2navHtml = "";
var destroyed = false;
var _VERSION_TEXT_=0;// 用来记录系统版本号

$(function() {
	
	initMenus();
	// InitLeftMenu();
	// 获取版本号信息
	qryVersion();
	tabClose();
	tabCloseEven();

	bingNavlistitemClicked();
	initScrollBar();
	initlevel1nav();


	changePortalWidth();
	/** 加载朋友圈 */
	$.ajax({
				url : WebRoot+"/workcycle/qryWorkCycle",
				type : "POST",
				dataType : "json",
				data : {
					'areaId' : $("#areaid").val(),
					'userId' : $("#userid").val(),
					'pageIndex' : 0,
					'pageSize' : 5,
					'channel' : 0
				},
				// data:{'areaId':31,'pageIndex':1,'pageSize':5,'channel':0},
				async : true
			}).done(getworkcircleSuc);
	$("#showLoginDiv").mouseenter(function(){
		$("#myInfo").show();
	});
	$(".hide_area").mouseenter(function(){
		$("#myInfo").hide();
	});
	$("#site_msg").mouseenter(function(){
		$("#myInfo").hide();
	});
	$("#mainPanle").mouseenter(function(){
		$("#myInfo").hide();
	});
	$("#myInfo").mouseleave(function(){
		$("#myInfo").hide();
	});
	// 显示用户未读信息
	showMessageCount();
	/* setInterval('refreshOnTime()', 600000); */
	// fastToolStatic();
	loadMapOfThreeDegree();

	$(document).trigger('readyToLoadScroll');
	
});
function IECheck() {
	if ((navigator.userAgent.indexOf('MSIE') >= 0)
			&& (navigator.userAgent.indexOf('Opera') < 0)) {
		try {
			var browser=navigator.appName;
			var b_version=navigator.appVersion;
			var version=b_version.split(";"); 
			var trim_Version=version[1].replace(/[ ]/g,"");
			if(trim_Version=="MSIE8.0" || trim_Version=="MSIE9.0" || trim_Version=="MSIE10.0"){
				var serverIp = document.location.hostname;
				var clientIp = getClientIp();
				if (compareStrIp(serverIp, clientIp)) {// 内网
					$("#earthPortal").attr("src","./modules/resident/earth.jsp").show();
				} else {// 外网
					$("#earthPortal").attr("src","./modules/gd2.5/2_5GIS_gd.jsp").show();
				}
			}else{
				$("#earthPortal").attr("src","./modules/gd2.5/2_5GIS_gd.jsp").show();
			}
		} catch (e) {
			alert("调用异常错误。");
		}
	} else {
		$("#earthPortal").attr("src","./modules/gd2.5/2_5GIS_gd.jsp").show();
	}
}
function getClientIp() {
	var result = null
	$.ajax({
		url : WebRoot+"/gridHouse/qryClientIp",
		type : "POST",
		dataType : "json",
		async : false,
		success : function(data) {
			result = data;
		}
	});
	return result;
}
// 判断是否是内外网
function compareStrIp(serverIp, clientIp) {
	var flag = false;
	var serverIpStr = serverIp.split(".");
	var clientIpStr = clientIp.split(".");
	if(serverIpStr=="localhost" && clientIpStr=="0:0:0:0:0:0:0:1"){
		flag=true;
	}else if(serverIpStr[0] == clientIpStr[0] && serverIpStr[1] == clientIpStr[1]) {
		flag = true;
	}
	return flag;
}
// 最后在加载地图
function loadMapOfThreeDegree(){
	IECheck();
	/*
	 * $("#earthPortal").attr("src","./modules/resident/earth.jsp").show();
	 * 
	 * $("#earthPortal").attr("src","./modules/resident/2_5GIS_gd.jsp").show();
	 */
}
function ajaxSForm(url,inParam){
	var result = null;
	inParam.channel=0;
	$.ajax({
		url:WebRoot+url,
		type : "POST",
		dataType : "json",
		data :inParam,
		async : false,
		success : function(data) {
			if (data.result==0) {
				result = data;
			}else{
				alert("错误，"+data.resultMsg);
			}
		}
	});
	return result;
}
function ajaxForm0(url,inParam){
	var result = null;
	$.ajax({
		url:WebRoot+url,
		type : "POST",
		dataType : "json",
		data :inParam,
		async : false,
		success : function(data) {
			result = data;
		}
	});
	return result;
}
function ajaxForm(url,inParam){
	var result = null;
	inParam.channel=0;
	$.ajax({
		url:WebRoot+url,
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		type : "POST",
		dataType : "json",
		data : JSON.stringify(inParam),
		async : false,
		success : function(data) {
			if (data.result==0) {
				result = data;
			}else{
				alert("错误，"+data.resultMsg);
			}
		}
	});
	return result;
}
// 查找最新的版本号
function qryVersion() {
	var inParam = {};
	inParam.appName = "CCM";
	if(_VERSION_TEXT_==0) {
		var result = ajaxSForm("/system/qryVersion",
				inParam);
		if(result) {
			_VERSION_TEXT=result.versionCode;
			$(".versiontext").text(result.versionCode+'版本');
		}
	}
}
// 初始化菜单信息
function initMenus() {
	var inParam = {};
	inParam.userId = $("#userid").val();
	var result = ajaxSForm("/staff/getUserMenuInfo", inParam);
	
	if (result) {
		_menus = result.nodeList;
		
		// 初始化一级目录
		var rootNavHtml = '<li class="verticalline"></li>'
			+ '<li onclick="switchHomeNav()" class="curh"><img src="images/nav1_1.png" /><p>主页</p></li>'
			+ '<li class="verticalline"></li>';
		for (var i in _menus) {
			rootNavHtml +=
			'<li onclick="switchSubNav(' + i + ')"><img src="' + _menus[i].iconUrl + '" /><p>' + _menus[i].text + '</p></li>'
			+ '<li class="verticalline"></li>';
		}
		$("#rootNav").html(rootNavHtml);
	}
}

// 快捷工具栏统计
function fastToolStatic(){

	// 任务管理
	var taskInParam = {"dutyId":$("#staffId").val(),"pageIndex":0,"pageSize":10};
	var taskResult = ajaxSForm("/task/qryTaskByDutyId",taskInParam);
	if(taskResult!=null && taskResult.rowCount!=0){
		$("#task_num").addClass("remind_icon").text(taskResult.rowCount);
	}	

	// 社区通知
	var noticeInParam = {"userId":$("#staffId").val(),"pageIndex":0,"pageSize":10,"readStatus":"N"};
	var noticeResult = ajaxSForm("/bulletin/qryBulletinRead",noticeInParam);
	if(noticeResult!=null && noticeResult.rowCount!=0){
		$("#notice_num").addClass("remind_icon").text(noticeResult.rowCount);
	}
	// 待采集房屋
	var gridIds = ajaxSForm("/gridHouse/qryGridsByUserId",{"userId":_USER_ID,"staffId":_STAFF_ID,"areaId":_AREA_ID});
	var gridIdsStr="";
	if(gridIds.gridDtos.length>0){
		$.each(gridIds.gridDtos,function(i,grid){
			gridIdsStr += grid.gridId+",";
		});
		gridIdsStr=gridIdsStr.substring(0,gridIdsStr.length-1);
		var checkBuilding = {"buildingRoomDto":{"roomType":"0","gridIds":gridIdsStr}};
		var checkBuildingResult = ajaxForm("/gridHouse/qryBuildingRoomFree",checkBuilding);
		if(checkBuildingResult!=null && checkBuildingResult.totalCount!=0){
			$("#checkBuilding_num").addClass("remind_icon").text(checkBuildingResult.totalCount);
		}
	}
	// 未更新人口
	if(gridIdsStr!=""){
		var updatePeopleInParam = {"rsf":{},"resident":{"gridIds":gridIdsStr,"searchCondition":1}};
		var updatePeopleResult = ajaxForm("/resident/qryResidentCount",updatePeopleInParam);
		if(updatePeopleResult!=null && updatePeopleResult.totalCount!=0){
			$("#updatePeople_num").addClass("remind_icon").text(updatePeopleResult.totalCount);
		}
	}
	
	//待办事项
	var itemOrderParam = {"staffId":$("#staffId").val()};
	var orderResult = ajaxForm0("/workOrder/selectNotReadOrder",itemOrderParam);
	if(orderResult!=null && orderResult!=0){
		$("#order_num").addClass("remind_icon").text(orderResult);
	}
	
}
// 处理站内消息内容
function getSiteMsgInfo(url){
	if (url.indexOf('create&') == 0) {// 跳转到发起任务界面
		addTab('发起任务', 'modules/task/createtask.jsp?' + url.substring(7), '');
	} else {
		addTab("待处理任务", "modules/task/dealtask.jsp?" + url, '');		
	}
}

// 查看站内信息
function getSiteMsg(){
	// switchSubNav(4);
	addTab("站内消息", "modules/daily/siteMessage.jsp", '');
	/* $("#showCountMessage").text(0); */
}
// 显示用户站内未读信息数量
function showMessageCount(){
	var count = getStaffMsgCountByUserId();
	$("#showCountMessage").text(count);
	$("#showCountMessage").removeAttr("color").removeAttr("cursor");
	$("#showCountMessage").css("color","#fff").css("cursor","pointer");
}
// 定时刷新
function refreshOnTime(){
	var count = "("+getStaffMsgCountByUserId()+")";
	$("#showCountMessage").text(count);
	$("#showCountMessage").removeAttr("text-decoration").removeAttr("color").removeAttr("cursor");
	$("#showCountMessage").css("text-decoration","underline").css("color","blue").css("cursor","pointer");
}
function getStaffMsgCountByUserId(){
		var returnVal = null;
		var inParam ={"channel":0,"userId":$("#userid").val()};
		$.ajax({
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			url : WebRoot+"/siteMsg/qryCount",
			type : "POST",
			dataType : "json",
			data : JSON.stringify(inParam),
			async : false,
			success : function(data) {
				if (data.result == 0) {
					returnVal = data;
				} else {
					$.messager.alert("错误信息", "后台" + data.resultMsg, "error");
					return;
				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				if (XMLHttpRequest.status != 200) {
					throw "Network issue or remote server issue";
				} else {
					throw "Exception";
				}
			}
		});

		return returnVal.count;
}
function closeChildIframe(){
	$("#myInfo").hide();
}
function getworkcircleSuc(data) {

	var hiddenpath = $("#hiddenpath").val();
	$("#circle").empty();
	$.each(data.workCycleList, function(index, obj) {
		if(obj.htmlDetail==null){// 如过没有内容则不显示
			var htmlDetail="";
			
		}
		else{
			var htmlDetail=obj.htmlDetail
		
		}
		if(obj.picList.length==0){
			var ifpic=""
			
		}
		if(obj.picList.length!=0){
			var ifpic="<div >(图片)</div>"
			
		}
		
		var time=obj.createDate.split(":");
		var showtime=time[0]+":"+time[1];
				if (index <= 5 && obj.ispraise == 100) {

					var li = "<li><div class='thum'><img src='"+obj.staffPicUrl+"' width='35' height='45' style='border-radius: 13px;'/></div><div class='article' id='" + obj.id + "-article'><div class='from'>" + "来自：" + obj.userName + "</div><div class='date'>"
							+ showtime + "</div><div class='a_content'>" + htmlDetail + "</div>"+ifpic+"<div class='buttons' ><div class='comment'><img src='" + hiddenpath + "/style/img/comment1.gif' onclick='pinglun(" + obj.id
							+ ")' style='cursor: pointer;'/>评论（<p id='" + obj.id + "-commentnum'>" + obj.countcontent + "</p>）</div><div class='zan'><img id='" + obj.id + "-zan' src='" + hiddenpath
							+ "/style/img/zan.gif' style='cursor: pointer;' onclick='praiseCircle(" + obj.id + ")'/> 赞（<p id='" + obj.id + "'>" + obj.praiseNum + "</p>）</div><div  class='leftcomment' id='" + obj.id + "-div'>"
							+ "<textarea  class='comment-text' id='" + obj.id + "-comment' onblur='areablur()'></textarea><input type='button' value='发布'  class='commentbtn' onclick='releasecomment(" + obj.id + ")'></div></div></li>"
					$("#circle").append(li);

				}

				if (index <= 5 && obj.ispraise == 0) {

					var li = "<li><div class='thum'><img src='"+obj.staffPicUrl+"' width='35' height='45' style='border-radius: 13px;'/></div><div class='article' id='" + obj.id + "-article'><div class='from'>" + "来自：" + obj.userName + "</div><div class='date'>"
							+ showtime + "</div><div class='a_content'>" + htmlDetail + "</div>"+ifpic+"<div class='buttons' ><div class='comment'><img src='" + hiddenpath + "/style/img/comment1.gif' onclick='pinglun(" + obj.id
							+ ")' style='cursor: pointer;'/>评论（<p id='" + obj.id + "-commentnum'>" + obj.countcontent + "</p>）</div><div class='zan'><img id='" + obj.id + "-zan' src='" + hiddenpath
							+ "/style/img/zan1.gif' style='cursor: pointer;' onclick='praiseCircle(" + obj.id + ")'/> 赞（<p id='" + obj.id + "'>" + obj.praiseNum + "</p>）</div><div  class='leftcomment' id='" + obj.id + "-div'>"
							+ "<textarea  class='comment-text' id='" + obj.id + "-comment' onblur='areablur()'></textarea><input type='button' value='发布'  class='commentbtn' onclick='releasecomment(" + obj.id + ")'></div></div></li>"
					$("#circle").append(li);

				}

			})
	initLevel2navHtml();

}

// 修改首页iframe高度
function changePortalWidth() {
	$("#earthPortal").css("height", ($(window).height() - 140) + "px");
}

// 点击赞
function praiseCircle(circleId) {

	var hiddenpath = $("#hiddenpath").val();
	/** 已经赞了，则取消赞 */
	if ($("#" + circleId + "-zan").attr("src") == hiddenpath + "/style/img/zan.gif") {
		$.ajax({
					url : WebRoot+"/workcycle/cancelPraise",
					type : "POST",
					dataType : "json",
					data : {
						"id" : circleId,
						"userId" : $("#userid").val(),
						channel : 0
					},
					async : true
				}).done(cancelpraiseSuc(circleId, hiddenpath));
	}

	/** 未赞，点击赞 */
	if ($("#" + circleId + "-zan").attr("src") == hiddenpath + "/style/img/zan1.gif") {

		$.ajax({
					url : WebRoot+"/workcycle/praiseCycle",
					type : "POST",
					dataType : "json",
					data : {
						"id" : circleId,
						"userId" : $("#userid").val(),
						channel : 0
					},
					async : true
				}).done(getpraiseSuc(circleId, hiddenpath));
	}

}

function getpraiseSuc(circleId, hiddenpath) {
	return function(data) {

		if (data.result == 0) {
			var praiseNumObj = $("#" + data.id);
			praiseNumObj.html(data.praiseNum);
			$("#" + circleId + "-zan").attr("src", hiddenpath + "/style/img/zan.gif")
		}
	}
}
function cancelpraiseSuc(circleId, hiddenpath) {
	return function(data) {

		if (data.result == 0) {
			var praiseNumObj = $("#" + data.id);
			praiseNumObj.html(data.praiseNum);
			$("#" + circleId + "-zan").attr("src", hiddenpath + "/style/img/zan1.gif")
		}
	}

}

/** 评论 */
function pinglun(circleid) {
	$(".leftcomment").css("display", "none");
	$("#" + circleid + "-div").css("display", "block");
	$(".comment-text").attr("placeholder","来说两句吧...")
	$("#" + circleid + "-comment").focus();

}
/** 评论框失去焦点 */

function areablur() {
	setTimeout(function() {
				$(".leftcomment").css("display", "none");
			}, 250)

}

/** 发表评论 */
function releasecomment(circleid) {
	if(""==$("#" + circleid + "-comment").val()){
		alert("请输入评论内容");
		return
	}

	$.ajax({
				url : WebRoot+"/workcycle/commentCycle",
				type : "POST",
				dataType : "json",
				data : {
					"id" : circleid,
					"userId" : $("#userid").val(),
					"comment" : $("#" + circleid + "-comment").val(),
					"channel" : 0
				},
				async : true
			}).done(addcommentsuc);

	function addcommentsuc(data) {
		$("#" + data.id + "-comment").val("")// 清空评论内容

		var commentNumObj = $("#" + data.id + "-commentnum");
		commentNumObj.html(data.commentNum);
		$("#" + data.id + "-article").after("<div style='width:80%;margin-left:37px;color:#9d9d9d;'>我：" + data.resultMsg + "</div>");
	}

}

// 绑定一级导航点击事件和样式
function initlevel1nav() {
	// 导航悬停效果
	$(".level1nav li").hover(function() {
				$(this).addClass("cur");
				
			}, function() {
				$(this).removeClass("cur");
	})
	// 导航点击
	$(".level1nav li").click(function() {
			$(".level1nav li").each(function(){
				$(this).removeClass("curh");
			})
			$(this).addClass("curh");

			
	})
	
	$(".level1nav li:nth-child(2)").on('click',function() {
		// if (!destroyed) {
		// $('.scrollbar_container').perfectScrollbar('destroy');
		// destroyed = true;
		// }
		
		// $('.scrollbar_container').perfectScrollbar();
		$('.scrollbar_container').perfectScrollbar({maxScrollbarLength:30});
		$('.scrollbar_container').perfectScrollbar('update');
	})
}

// 初始化左侧
function initLevel2navHtml() {
	level2navHtml = $("#nav").html();
	// 先初始化快捷工具，再加载图标样式
	fastToolStatic();
}

function switchHomeNav() {

	$("#nav").html(level2navHtml);
	bingNavlistitemClicked();
	$("#nav").parent().removeClass("navborder");

	// 刷新快捷工具图标样式
	fastToolStatic();
	
}

function switchSubNav(subNavId) {

	$("#nav").parent().addClass("navborder");
	var content = '';
	$.each(_menus[subNavId].nodes, function(i, node) {
		var menulistwap_header = "";
		var currcontent = '<div class="navlistitem"><a  ref="" href="#" rel="';
		currcontent += (node.menuUrl ? node.menuUrl : '');
		currcontent += '" ><span class="icon" style="background:url(\'' + node.iconUrl + '\') no-repeat;" >&nbsp;</span><span class="nav">' + node.text + '</span></a>';
		currcontent += '<p class="corner"></p>';
		
		if (node.nodes && node.nodes.length > 0) {// 二级目录下有菜单
			menulistwap_header = '<li class="depth2">';
			currcontent += '<p class="triangle"></p></div>';
			currcontent += '<ul class="third_ul">';
			$.each(node.nodes, function(j, n) {
				currcontent += '<li class="navlistitem"><div><a ref="" href="#" rel="' + n.menuUrl + '" ><span class="nav">' + n.text + '</span></a><p class="corner"></p></div></li>';
			});
			currcontent += '</ul>';
		} else {// 一级目录下的菜单或二级目录下无菜单
			menulistwap_header = '<li class="depth1">';
			currcontent += '</div>';
		}
		content += menulistwap_header + currcontent + '</li>';
	});

	$("#nav").html('<ul class="navlist">' + content + '</ul>');
	bingNavlistitemClicked();

}

// navlistitem点击事件
function bingNavlistitemClicked() {
	// 导航组点击打开tabs
	$(".navlistitem").each(function() {
				$(this).click(function() {
					var url = $(this).find('a').attr("rel");
					var title = $(this).find(".nav").html();
					addTab(title, url, '');
						// alert(title);

						$('.selected_nav_item').removeClass('selected_nav_item');
						$($(this)).addClass('selected_nav_item');
					})
			});
	// home 导航点击事件
	$(".home_sub_nav").click(function() {
		var url = $(this).attr("rel");
		var title = $(this).find("p").attr("data-title");
		addTab(title, url, '');
			// alert(title);
		})
	// 左侧二级菜单点击事件绑定
	// $(".depth2>div.clicked_menu_item").toggle(function() {
	// // var siblings = $(this).parent().siblings();
	// // var siblingArrow = siblings.find("div>p.expand");
	// // var siblingList = siblings.find(".third_ul");

	// // siblingArrow.removeClass("expand");
	// // siblingArrow.addClass("triangle");
	// // siblingList.hide();

	// var arrow = $(this).find(".triangle");
	// arrow.removeClass("triangle");
	// arrow.addClass("expand");
	// // alert("open");
	// $('.selected_nav_item').removeClass('selected_nav_item');
	// arrow.parent().next().show();


	// }, function() {
	// var arrow = $(this).find(".expand");
	// arrow.removeClass("expand");
	// arrow.addClass("triangle");
	// $('.selected_nav_item').removeClass('selected_nav_item');
	// // alert("close");
	// arrow.parent().next().hide();
	// });

$(".depth2>div").click(function() {
				var siblings = $(this).parent().siblings();
				var siblingArrow = siblings.find("div>p.expand");
				var siblingsDiv = siblings.find("div");
				var siblingList = siblings.find(".third_ul");

				if($(this).hasClass('clicked_menu_item')){
					var arrow = $(this).find(".expand");
					arrow.removeClass("expand");
					arrow.addClass("triangle");
					$('.selected_nav_item').removeClass('selected_nav_item');
					// alert("close");
					arrow.parent().next().hide();
					$(this).removeClass('clicked_menu_item');
					return;
				}



				siblingArrow.removeClass("expand");	
				siblingArrow.addClass("triangle");
				siblingList.hide();

				var arrow = $(this).find(".triangle");
				arrow.removeClass("triangle");
				arrow.addClass("expand");
				// alert("open");
				$('.selected_nav_item').removeClass('selected_nav_item');
				arrow.parent().next().show();
				siblingsDiv.removeClass('clicked_menu_item');
				$(this).addClass('clicked_menu_item');
				
			});

	// $(".triangle").click(function(){
	// var target = $(this).parent().next();
	// var triangle = this;
	// target.toggle();
	//
	// //alert($(this).parent().next().html()) ;
	// })
}

// 添加tab
function addTab(subtitle, url, icon) {
	if (url == "")
		return;

	if (!$('#tabs').tabs('exists', subtitle)) {
		$('#tabs').tabs('add', {
					title : subtitle,
					content : createFrame(url),
					closable : true,
					icon : icon
				});
	} else {
		$('#tabs').tabs('select', subtitle);
		// url可能不同
		var currentTab = $('#tabs').tabs('getTab', subtitle);
		var iframe = $(currentTab.panel('options').content);
		var src = iframe.attr('src');
		$('#tabs').tabs('update', {
					tab : currentTab,
					options : {
						content : createFrame(url)
					}
				})
	}
	tabClose();
}

function createFrame(url) {
	var s = '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>';
	return s;
}

function tabClose() {
	/* 双击关闭TAB选项卡 */
	$(".tabs-inner").dblclick(function() {
				var subtitle = $(this).children(".tabs-closable").text();
				$('#tabs').tabs('close', subtitle);
			})
	/* 为选项卡绑定右键 */
	$(".tabs-inner").bind('contextmenu', function(e) {
				e.preventDefault();// 组织默认事件
				$('#mm').menu('show', {
							left : e.pageX,
							top : e.pageY
						});

				var subtitle = $(this).children(".tabs-closable").text();

				$('#mm').data("currtab", subtitle);
				$('#tabs').tabs('select', subtitle);
				return true;
			});
}

/**
 * layout方法扩展
 */
$.extend($.fn.layout.methods, {
			setRegionToolVisableState : function(jq, params) {
				return jq.each(function() {
							if (params.region == "center")
								return;
							var panels = $.data(this, 'layout').panels;
							var panel = panels[params.region];
							var tool = panel.panel('header').find('>div.panel-tool');
							tool.css({
										display : params.visible ? 'block' : 'none'
									});
							var first = params.region.substring(0, 1);
							var others = params.region.substring(1);
							var expand = 'expand' + first.toUpperCase() + others;
							if (panels[expand]) {
								panels[expand].panel('header').find('>div.panel-tool').css({
											display : params.visible ? 'block' : 'none'
										});
							}
						});
			}
		});
// 绑定右键菜单事件
function tabCloseEven() {

	$('#mm').menu({
				onClick : function(item) {
					closeTab(item.id);
				}
			});

	return false;
}

function closeTab(action) {
	var alltabs = $('#tabs').tabs('tabs');
	var currentTab = $('#tabs').tabs('getSelected');
	var allTabtitle = [];
	$.each(alltabs, function(i, n) {
				allTabtitle.push($(n).panel('options').title);
			})

	switch (action) {
		case "tabupdate" :
			var iframe = $(currentTab.panel('options').content);
			var src = iframe.attr('src');
			$('#tabs').tabs('update', {
						tab : currentTab,
						options : {
							content : createFrame(src)
						}
					})
			break;
		case "close" :
			var currtab_title = currentTab.panel('options').title;
			$('#tabs').tabs('close', currtab_title);
			break;
		case "closeall" :
			$.each(allTabtitle, function(i, n) {
						if (n != onlyOpenTitle) {
							$('#tabs').tabs('close', n);
						}
					});
			break;
		case "closeother" :
			var currtab_title = currentTab.panel('options').title;
			$.each(allTabtitle, function(i, n) {
						if (n != currtab_title && n != onlyOpenTitle) {
							$('#tabs').tabs('close', n);
						}
					});
			break;
		case "closeright" :
			var tabIndex = $('#tabs').tabs('getTabIndex', currentTab);

			if (tabIndex == alltabs.length - 1) {
				// alert('亲，后边没有啦 ^@^!!');
				return false;
			}
			$.each(allTabtitle, function(i, n) {
						if (i > tabIndex) {
							if (n != onlyOpenTitle) {
								$('#tabs').tabs('close', n);
							}
						}
					});

			break;
		case "closeleft" :
			var tabIndex = $('#tabs').tabs('getTabIndex', currentTab);
			if (tabIndex == 0) {
				// alert('亲，前边那个上头有人，咱惹不起哦。 ^@^!!');
				return false;
			}
			$.each(allTabtitle, function(i, n) {
						if (i < tabIndex) {
							if (n != onlyOpenTitle) {
								$('#tabs').tabs('close', n);
							}
						}
					});

			break;
		case "exit" :
			$('#closeMenu').menu('hide');
			break;
	}
}

// 弹出信息窗口 title:标题 msgString:提示信息 msgType:信息类型 [error,info,question,warning]
function msgShow(title, msgString, msgType) {
	$.messager.alert(title, msgString, msgType);
}

function logoutOnclick(exitWithoutPrompt) {
	if (!exitWithoutPrompt) {
		$.messager.confirm("提示", "您确定要退出系统吗？", function(data) {
					if (data) {
						logoutConfirm();
					} else {
					}
				});
	} else {
		logoutConfirm();
	}
}

function logoutConfirm() {
	var hiddenpath = $("#hiddenpath").val();
	$.ajax({
				type : "post",
				async : false,
				contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
				url : hiddenpath + "/staff/logout",
				dataType : "json",
				success : function(data) {
					window.location = hiddenpath + "/login.jsp";
				},
				error : function(msg) {
					$.messager.alert("后台服务异常：", msg.responseText);
				}
			});
}

// 弹出或者隐藏登录的div
/*
 * function showLoginDiv(){ $("#dd").window('open'); }
 */
function morecircle(){
	addTab("工作圈", "modules/work/workcircle.jsp", "");
}



function initScrollBar () {
	leftContentH = $('.leftcontent').height();
	shortcutH = $('.leftcontent .shortcut').height();
	headerH = $('.leftcontent .header').height();
	placeholderH = $('.leftcontent .placeholder').height();

	h = leftContentH - shortcutH - headerH-placeholderH/2;
	$('.scrollbar_container').css('height',h);
	$('.scrollbar_container').perfectScrollbar();
	$('.scrollbar_container').perfectScrollbar('destroy');
	// $('.scrollbar_container').perfectScrollbar({maxScrollbarLength:30});
	// $('.scrollbar_container').perfectScrollbar('update');
}



$(document).on('readyToLoadScroll',function () {
   var s =	setInterval(function () {
// alert();
// $(".level1nav li:nth-child(2)").trigger('mouseenter');
// $(".level1nav li").trigger('click');
 		$('.scrollbar_container').perfectScrollbar({maxScrollbarLength:30});
		$('.scrollbar_container').perfectScrollbar('update');
	 	clearInterval(s);
 	},1000)
})



