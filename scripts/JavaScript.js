// BURGER-MENU
const navBurgerIcon = document.querySelector('#nav_burger_icon');
const navBurger = document.querySelector('#nav_burger');
const nav_links = document.querySelector('#nav_links').cloneNode(1);

navBurgerIcon.addEventListener('click', hambHandler);
function hambHandler(e) {
    e.preventDefault();
    navBurger.classList.toggle('open');
    navBurgerIcon.classList.toggle('active');
    navBurger.appendChild(nav_links);
}

// HIDE BURGER-MENU ON SCROLL
var previousScrollPosition = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPosition = window.pageYOffset;

    if (
        previousScrollPosition > currentScrollPosition ||
        previousScrollPosition < currentScrollPosition
    ) {
        navBurger.classList.remove('open');
        navBurgerIcon.classList.remove('active');
    }
    previousScrollPosition = currentScrollPosition;
};

// SLIDER
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('price_slider_item');
    let dots = document.getElementsByClassName('price_slider_dot');

    if (n < 1) {
        slideIndex = slides.length;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' price_dot_active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' price_dot_active';
}
