$(document).ready(function() {
    // Smooth scroll for internal links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Fade in effect for sections
    $(window).on('scroll', function() {
        $('.service, .testimonial').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 50) {
                $(this).animate({ opacity: 1 }, 1000);
            }
        });
    });

    // Initialize opacity for fade-in effect
    $('.service, .testimonial').css('opacity', 0);
});
