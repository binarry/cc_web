function getTableHeight (per) {
	var tableHeight = 0;
	var fixedHeight = 0;
    
    var bodyHeight = $('body').height();
	var fixedHeightArea = document.querySelectorAll('.fixed_height_area');

    $.each(fixedHeightArea,function (index,item) {
    	fixedHeight+=$(item).height();
    })

	tableHeight = (bodyHeight-fixedHeight)*per;
	return tableHeight;
}