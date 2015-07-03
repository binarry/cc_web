var $div;

var addCropImg;

var defaults = {
	title : '处理图片',
	width : 850,
	height : 425,
	workWidth : 1000,
	workHeight : 500,
	factor : 1
}

function newCropWin() {
	$div.empty();

	var str = '<div class="modal-dialog" style="width:'
			+ (defaults.workWidth + 16)
			+ 'px;height:'
			+ (defaults.workHeight + 66)
			+ 'px;"><div class="modal-content" style="width:100%;margin-left:0px;"><div class="modal-header">'
			+ defaults.title
			+ '<span class="pull-right close_btn" data-dismiss="modal"><a href="#">X</a></span></div>'
			+ '<div class="modal-body">' + '<iframe style="width:100%;height:'
			+ (defaults.workHeight + 66) + 'px" frameborder="0" src="'
			+ basePath + '/ImageCropper.jsp?fileName=' + defaults.fileName
			+ '&width=' + defaults.width + '&height=' + defaults.height
			+ '&workWidth=' + defaults.workWidth + '&workHeight='
			+ defaults.workHeight +'&factor='+defaults.factor+ '"></iframe>' + '</div></div></div>';
	$div.append(str);
	$div.modal('show');

	// 模态框拖动
	$div.draggable({
		cursor : "move",
		handle : ".modal-header"
	});
	$(".modal-header", $div).css("cursor", "move");
}

function closeCropWin() {
	$div.modal('hide');
}

/**
 * 截取工具方法
 * 
 * @param divId
 *            截取工具模态框id
 * @param callback
 *            截取完成回调函数
 * @param options
 *            截取工具属性
 * @returns
 */
function imageCrop(divId, callback, options) {

	$div = $('#' + divId);
	addCropImg = callback;

	defaults = {
		title : '处理图片',
		width : 850,
		height : 425,
		workWidth : 1000,
		workHeight : 500,
		factor : 1
	}

	for ( var attr in options) {
		defaults[attr] = options[attr];
	}

	if ($div && $div.length == 1 && typeof addCropImg == 'function') {
		newCropWin();
	}
}