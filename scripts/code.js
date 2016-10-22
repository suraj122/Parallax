$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	});

	$('.back-bird').css({
		'transform' : 'translate(0px, '+ wScroll /4 +'%)'
	});
	$('.fore-bird').css({
		'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
	});

	if (wScroll > $('.clothes-pics').offset().top - ($(window).height() /1.2)) {
		$('.clothes-pics .col-md-4').each(function(i){
			setTimeout(function(){
				$('.clothes-pics .col-md-4').eq(i).addClass('is-showing');
			}, 150 * (i+1));
		});
	}
});
