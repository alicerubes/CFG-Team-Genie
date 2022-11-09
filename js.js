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

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// Popup thank you END