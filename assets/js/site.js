
$(function(){
	let screenheight = $(window).height();
 	$('.bannerGallery').css('height', screenheight);
    // Comma, not colon ----^
    AOS.init();

    $(window).resize(function(){
	    $('.bannerGallery').css('height', $(window).height());
	});

	$(".nav-link").on("click", function(){
		$('.navbar-collapse').collapse('hide');
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top -70
		}, 800, function(){
		})
	})

	$("form").on("submit", function(event){
		event.preventDefault();
		$("input").empty();
		$.toast({
						heading: 'Message Sent!',
						text : "Thanks for getting in touch!",
						loader: false,
						showHideTransition: 'slide'
					})
	})
})

