document.addEventListener('DOMContentLoaded', function () {
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

    // SMOOTH-SCROLL
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
            });
        });
    }
});
