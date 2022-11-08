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

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// Popup thank you END