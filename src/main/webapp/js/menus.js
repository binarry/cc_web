var _menus = {
	"menus" : [
			{
				"menuid" : "1",
				"icon" : "icon-sys",
				"menuname" : "",
				"menus" : [
						{
							"menuid" : "11",
							"menuname" : "网格管理",
							"icon" : "icon-wangge",
							"url" : "",
							"child" : [
							// {
							// "menuid": "111",
							// "menuname": "网格维护",
							// "icon": "",
							// "url": "http://hxling.cnblogs.com"
							// },
							{
								"menuid" : "112",
								"menuname" : "网格地图标注",
								"icon" : "",
								"url" : "./modules/resident/gridPortal.jsp?className=content_grid"
							} ]
						},
						{
							"menuid" : "12",
							"menuname" : "房屋管理",
							"icon" : "icon-house",
							"url" : "",
							"child" : [
									{
										"menuid" : "121",
										"menuname" : "楼栋地图标注",
										"icon" : "",
										"url" : "./modules/resident/gridPortal.jsp?className=content_building"
									},
									{
										"menuid" : "122",
										"menuname" : "房屋专项",
										"icon" : "",
										"url" : "modules/resident/roomSpecial.jsp"
									},
									{
										"menuid" : "123",
										"menuname" : "建筑物专项",
										"icon" : "",
										"url" : "modules/resident/"
									} ]
						},
						{
							"menuid" : "13",
							"menuname" : "人口信息管理",
							"icon" : "icon-people",
							"url" : "",
							"child" : [
									{
										"menuid" : "131",
										"menuname" : "人口信息采集",
										"icon" : "",
										"url" : "modules/resident/residentRoomPortal.jsp"
									},
									{
										"menuid" : "132",
										"menuname" : "人口专项信息",
										"icon" : "",
										"url" : "modules/resident/residentSpecial.jsp"
									} ]
						}, {
							"menuid" : "14",
							"menuname" : "单位信息管理",
							"icon" : "icon-company",
							"url" : "",
							"child" : [ {
								"menuid" : "141",
								"menuname" : "单位信息采集",
								"icon" : "",
								"url" : "modules/resident/unitPortal.jsp"

							} // ,
							// {
							// "menuid": "142",
							// "menuname": "单位专项信息",
							// "icon": "",
							// "url": "modules/resident/residentSpecial.jsp"
							// }
							, {
								"menuid" : "142",
								"menuname" : "单位专项信息",
								"icon" : "",
								"url" : "modules/resident/unitSpecial.jsp"
							} ]

						} ]

			}, {
				"menuid" : "2",
				"icon" : "icon-sys",
				"menuname" : "",
				"menus" : [ {
					"menuid" : "21",
					"menuname" : "社区通知",
					"icon" : "icon-message",
					"url" : "modules/task/taskbulletin.jsp"
				}, {
					"menuid" : "23",
					"menuname" : "社区圈子",
					"icon" : "icon-message",
					"url" : "modules/work/workcircle.jsp"
				}, {
					"menuid" : "22",
					"menuname" : "任务管理",
					"icon" : "icon-business",
					// "url": "modules/task/views/task.html"
					"url" : "modules/task/taskMgmt.jsp"
				} ,{
					"menuid" : "24",
					"menuname" : "社区服务团队",
					"icon" : "icon-message",
					"url" : "modules/work/volunteerTeam.jsp"
				},
				{
					"menuid" : "25",
					"menuname" : "社区活动",
					"icon" : "icon-message",
					"url" : "modules/work/activity.jsp"
				}]
			}, {
				"menuid" : "3",
				"icon" : "icon-sys",
				"menuname" : "",
				"menus" : [ {
					"menuid" : "31",
					"menuname" : "社区知识库1",
					"icon" : "icon-add",
					"url" : "http://hxling.cnblogs.com"
				}, {
					"menuid" : "32",
					"menuname" : "社区知识库2",
					"icon" : "icon-users",
					"url" : "demo2.html"
				}, {
					"menuid" : "33",
					"menuname" : "社区知识库3",
					"icon" : "icon-role",
					"url" : "demo2.html"
				}, {
					"menuid" : "34",
					"menuname" : "社区知识库4",
					"icon" : "icon-set",
					"url" : "demo.html"
				}, {
					"menuid" : "35",
					"menuname" : "社区区域",
					"icon" : "icon-set",
					"url" : "modules/overview/ccorg_static.jsp"
				} ]

			}, {
				"menuid" : "4",
				"icon" : "icon-sys",
				"menuname" : "",
				"menus" : [ {
					"menuid" : "41",
					"menuname" : "社区动态",
					"icon" : "icon-dyn",
					"url" : "",
					"child" : [ {
						"menuid" : "411",
						"menuname" : "社区新闻",
						"url" : "modules/overview/news.jsp"
					}, {
						"menuid" : "412",
						"menuname" : "社区公告",
						"url" : "modules/overview/anoucelist.jsp"
					}, {
						"menuid" : "413",
						"menuname" : "社区服务项",
						"url" : "modules/overview/servicemanager.jsp"
					}, {
						"menuid" : "414",
						"menuname" : "主任信箱",
						"url" : "modules/overview/bossmail.jsp"
					} ]
				}, {
					"menuid" : "42",
					"menuname" : "社区办事",
					"icon" : "icon-ccwork",
					"url" : "",
					"child" : [ {
						"menuid" : "421",
						"menuname" : "办事窗口",
						"url" : "modules/overview/workwindow.jsp"
					}, {
						"menuid" : "423",
						"menuname" : "事务申请单",
						"url" : "modules/overview/workitem.jsp"
					} ]
				}, {
					"menuid" : "43",
					"menuname" : "社区概况",
					"icon" : "icon-overview",
					"url" : "",
					"child" : [ {
						"menuid" : "421",
						"menuname" : "区域组织",
						"url" : "modules/overview/areaorg.jsp"
					}, {
						"menuid" : "422",
						"menuname" : "组织员工",
						"url" : "modules/overview/orgstaff.jsp"
					} ,
					{
						"menuid" : "423",
						"menuname" : "社区地图",
						"url" : "modules/overview/orgstaffMap.jsp"
					} ]
				} ]
			}, {
				"menuid" : "5",
				"icon" : "icon-sys",
				"menuname" : "",
				"menus" : [ {
					"menuid" : "51",
					"menuname" : "修改密码",
					"icon" : "icon-add",
					"url" : "changePwd.jsp"

				}, {
					"menuid" : "52",
					"menuname" : "修改用户信息",
					"icon" : "icon-users",
					"url" : "changeHeadPic.jsp"
				}, {
					"menuid" : "53",
					"menuname" : "站内消息",
					"icon" : "icon-role",
					"url" : "modules/daily/siteMessage.jsp"
				}, {
					"menuid" : "54",
					"menuname" : "菜单管理",
					"icon" : "icon-role",
					"url" : "modules/system/menuconfig.jsp"
				}, {
					"menuid" : "55",
					"menuname" : "角色管理",
					"icon" : "icon-role",
					"url" : "modules/system/rolemanage.jsp"
				} ]

			}, {
				"menuid" : "6",
				"icon" : "icon-sys",
				"menuname" : "",
				"menus" : [ {
					"menuid" : "54",
					"menuname" : "公共知识库",
					"icon" : "icon-add",
					"url" : "modules/kbs/commonkbs.jsp"

				}, {
					"menuid" : "55",
					"menuname" : "社区知识库",
					"icon" : "icon-users",
					"url" : "modules/kbs/citykbs.jsp"
				},
				
				{
					"menuid" : "56",
					"menuname" : "社区活动相册",
					"icon" : "icon-message",
					"url" : "modules/work/activityalbum.jsp"
				}]

			} ]
};
