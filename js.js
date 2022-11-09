// Quote gen START

const generateQuote = function() {
    const quotes = [
    {
        quote: "“The most alluring thing a woman can have is confidence.”",
        author: "- Beyoncé Knowles"
    },
    {
        quote: "“Ignore the glass ceiling and do your work. If you’re focusing on the glass ceiling, focusing on what you don’t have, focusing on the limitations, then you will be limited.”",
        author: "- Ava DuVernay"
    },
    {
        quote: "“A girl should be two things: who and what she wants.”",
        author: "- Coco Chanel"
    },
    {
        quote: "“We all move forward when we racognize how resilient and striking the women around us are.”",
        author: "- Rupi Kaur"
    },
    {
        quote: "“They'll tell you you're too loud, that you need to wait your turn and ask the right people for permission. Do it anyway.”",
        author: "- Alexandria Ocasio Cortez"
    },
    {
        quote: "“Women are the real architects of society.”",
        author: "- Cher"
    },
    {
        quote: "“There’s something special about a woman who dominates in a man’s world. It takes a certain grace, strength, intelligence, fearlessness, and the nerve to never take no for an answer.”",
        author: "- Rihanna"
    },
    {
        quote: "“Girls should never be afraid to be smart.”",
        author: "- Emma Watson"
    },
    {
        quote: "“Think like a queen. A queen is not afraid to fail. Failure is another steppingstone to greatness.”",
        author: "- Oprah Winfrey"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}

// Quote gen END


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