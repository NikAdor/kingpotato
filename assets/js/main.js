$(function(){

	// Hamburger Click
	$('.hamburger').on('click',function(e){
             e.preventDefault();
        toggleMenu();
    });
    
    function toggleMenu(){
        $('body').toggleClass('nav-open');
        $('.lines').toggleClass('open');
        // $('.link').toggleClass('bounce');

    }

    // Back to Top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    // Accordion

   
    
});