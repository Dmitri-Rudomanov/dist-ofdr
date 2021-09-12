
// BurgerMenu
   $('.icon-menu').click(function(){
        $('.icon-menu, .menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.goto').click(function() {
		var el=$(this).attr('href').replace('#','');
		var offset=0;
	$('body,html').animate({scrollTop:$('.'+el).offset().top+offset},500, function() {});
	return false;
});




