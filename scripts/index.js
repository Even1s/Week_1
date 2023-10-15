const burger = document.querySelector("#menu-hamburger");
const mobHeader = document.querySelector(".mobile-header");
const burgerImg = burger.querySelector("img");
burger.onclick = (e) =>{
    mobHeader.classList.toggle('mobile-header_open');
    document.querySelector("body").classList.toggle('lock');
    if(burgerImg.getAttribute('src')=="/img/menu-hamburger.svg") {
        burgerImg.setAttribute('src', '/img/menu-close.svg');
} else { burgerImg.setAttribute('src', '/img/menu-hamburger.svg') }
};