// Alice page START

var testi = $('#testimonial-slide');
var owlcarouselslide = function(e) {
   
    // testimonial slide
    testi.owlCarousel({
        autoplay: false,
        center: true,
        loop: true,
        dots: true,
        touchDrag: false,
        mouseDrag: false,
        smartSpeed: 900,
        items: 1,
        margin: 100,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-left " aria-hidden="true"></i>',
            '<i class="fa fa-long-arrow-right " aria-hidden="true"></i>'
        ],
        navContainer: '.custom-nav',
    });
};

$(document).ready(function() {
    owlcarouselslide();
});

// Alice page END

// Popup thank you START

var nextStep = document.querySelector('#nextStep');

  nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide first view
    document.getElementById('container').style.display = 'none';

    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block';
  });

// Popup thank you END