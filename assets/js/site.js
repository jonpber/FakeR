
$(function(){
	let screenheight = $(window).height();
 	$('.bannerGallery').css('height', screenheight);
    // Comma, not colon ----^
    AOS.init();

    $(window).resize(function(){
	    $('.bannerGallery').css('height', $(window).height());
	});
})

