 function ThisDoc () {
 	this.getElements().bindEvents();
 	this.init();
 }

 ThisDoc.prototype.getElements = function() {
 	this.doc = $(document);
 	this.header =  $('.header');
 	this.footer = $('.footer');
 	this.mainBody = $('#main'); 
 	return this;
 };


ThisDoc.prototype.setLoginPadding = function() {
	var docH = this.doc.height();
	var headerH = this.header.height();
	var footerH = 75;
	var mainH = this.mainBody.height();

	var paddingTop = (docH -mainH- headerH - footerH)/2;

	this.mainBody.css('padding-top',paddingTop);
};

ThisDoc.prototype.bindEvents = function() {
	var that = this;
	this.doc.bind('DOMSubtreeModified', function() {
	    if(that.header.height() != that.curHeight) {
		        that.setLoginPadding();
		        that.curHeight = that.header.height();
		    }
	    });
};
 

 ThisDoc.prototype.init = function() {
 	this.setLoginPadding();
 	this.curHeight = this.header.height();
 };

  
window.thisDoc = new ThisDoc(); 