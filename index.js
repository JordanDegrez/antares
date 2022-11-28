$("#backtotop").click(function () {
    jQuery('html,body').animate({scrollTop: 0}, 500);
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var largeur = screen.width;
    var btn = $('#backtotop');
    if (scroll >= 50) {
        $("#top").addClass("scrollmenu_actif");
        $("#middle").addClass("marge_page");
        $("#backtotop").addClass("show");
    } else {
        $(".bande_menu").removeClass("scrollmenu_actif");
        $("#middle").removeClass("marge_page");
        $("#backtotop").removeClass("show");
    }
});


var toggleHeight = $(window).outerHeight() * 2;

$(window).scroll(function() {
	if ($(window).scrollTop() > toggleHeight) {
		$(".m-backtotop").addClass("active");		
	} else {	
		$(".m-backtotop").removeClass("active");
	}
});


$(".m-backtotop").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});