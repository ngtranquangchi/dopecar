// HEADER NAV MENU
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
})

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
})

function changeHeaderColor(){
    const header = document.getElementById("header");
    if (this.scrollY >= 81) {
        header.classList.add("scroll-header");
    }
    else {
        header.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", changeHeaderColor);

const navLink = document.querySelectorAll(".nav__link");
function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id");
function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            // trong .nav__menu tìm thẻ <a> có href a[href] *: contain section id
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        }
        else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }

    })
}

window.addEventListener("scroll", scrollActive);

// SWIPER JS
var swiper = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        },
        1024: {
            spaceBetween: 48
        }
    }
  });

//   MIXITUP
var mixerProducts = mixitup(".product__content", {
    selectors: {
        target: '.product__card'
    },
    animation: {
        duration: 300
    }
});

// Link Active Products
const linkProduct = document.querySelectorAll(".product__item");
function activeProduct() {
    linkProduct.forEach((link) => link.classList.remove("active-product"));
    this.classList.add("active-product");
}

linkProduct.forEach((link) => link.addEventListener("click", activeProduct));

// SCROLL UP
function scrollUp(){
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 350) {
        scrollUp.classList.add("show-scroll");
    }
    else {
        scrollUp.classList.remove("show-scroll");
    }
}

window.addEventListener("scroll", scrollUp);

// SCROLL REVEAL JS
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
});
sr.reveal(".home");
sr.reveal(".home__title", {delay: 100});
sr.reveal(".home__description", {delay: 200});
sr.reveal(".home-btn", {delay: 300});
sr.reveal(".home__vlaue-number, .home__value-description", {delay: 400, interval: 100});
sr.reveal(".line-h", {delay: 400});
sr.reveal(".home__img", {delay: 500, origin: "bottom"});
sr.reveal(".about__data", {origin: "right"});
sr.reveal(".about__img", {origin: "left"});
sr.reveal(".brands__content", {interval: 100});
sr.reveal(".why__data");
sr.reveal(".popular h2");
sr.reveal(".popular__cards", {delay: 100, origin: "right"});
sr.reveal(".newsletter__data", {origin: "bottom"});
sr.reveal(".product__subtitle");
sr.reveal(".products h2", {delay: 100});
sr.reveal(".products__filters", {delay: 200});
sr.reveal(".product__card", {delay: 300, interval: 100});

sr.reveal(".app__container", {origin: "bottom"});
sr.reveal(".app__data", {delay: 100, origin: "left"});
sr.reveal(".app__img", {delay: 200, origin: "right"});

sr.reveal(".footer-box", {interval: 100});
sr.reveal(".copyright", {delay: 100});