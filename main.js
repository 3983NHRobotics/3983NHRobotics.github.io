var mbp = 2 * parseInt($('.main-body').css('padding'));
var w = $(window).width();
	var lmpch = $('.left-menu').width();
	var wts = w - (lmpch + (mbp + 10));
	$('.main-body').css('width', wts);

$(window).resize(function() {
	var w = $(window).width();
	var lmpch = $('.left-menu').width();
	var wts = w - (lmpch + (mbp + 10));
	$('.main-body').css('width', wts);
});
