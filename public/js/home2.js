
    const sliderContainer = document.querySelector('.slider-container');
    const triggerPoint = window.innerHeight / 2; // Show slider at half viewport

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition >= triggerPoint) {
            sliderContainer.style.height = '100vh'; // Set height to full viewport
        }
    });

    // Logo animation up and down
    const logoContainer = document.querySelector('#logobg'); // Combine elements into a container
    const logo = document.querySelector('#main-logo');
    
    let direction = 1; // 1 for down, -1 for up
    let position = 0; // Starting position
    
    setInterval(() => {
      position += direction * 1; // Change 1 to adjust the speed
    
      // Apply the same transform to both elements
      logoContainer.style.transform = `translate(-50%, ${position}px)`;
      logo.style.transform = `translate(-50%, ${position}px)`;
    
      if (position >= 20 || position <= -20) { // Change 20 to adjust the range
        direction *= -1; // Reverse direction
      }
    }, 30); 
    
$(document).ready(function() {
    let index = 0;
    const slides = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slides .slide');
    const totalSlides = slideItems.length;

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % totalSlides;
        updateSlidePosition();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    function updateSlidePosition() {
        slides.style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    // Automatic slider transition every 20 seconds (20000 milliseconds)
    setInterval(() => {
        index = (index + 1) % totalSlides;
        updateSlidePosition();
    }, 500000);

    // Initial slide setup
    updateSlidePosition();
});

$(document).ready(function() {
    // Smooth scroll for internal links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
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


    let index = 0;
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide');
    const totalSlides = slideImages.length;

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % totalSlides;
        updateSlidePosition();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    function updateSlidePosition() {
        slides.style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    // Automatic slider transition every 20 seconds (20000 milliseconds)
    setInterval(() => {
        index = (index + 1) % totalSlides;
        updateSlidePosition();
    }, 20000);
});
$(document).ready(function() {
    // Handle click on menu bar lines to toggle sidebar
    $("#menuline").click(function() {
        $("#menuToggle").css("right", "0"); // Slide sidebar in
    });

    // Handle click on login button (optional)
    $("#loginbtn").click(function() {
        // Implement login/signup functionality
    });

    // Close sidebar when clicking outside of it (optional)
    $(document).click(function(event) {
        if (!$(event.target).closest('#menuToggle, #menuline').length) {
            $("#menuToggle").css("right", "-100%"); // Slide sidebar out
        }
    });
});