const burger = document.querySelector("#menu-hamburger");
const mobHeader = document.querySelector(".mobile-header");
const burgerImg = burger.querySelector("img");
burger.onclick = () =>{
    mobHeader.classList.toggle('mobile-header_open');
    document.querySelector("body").classList.toggle('lock');
    if(document.querySelector("body").classList.contains('lock')) {
        burgerImg.setAttribute('src', '/img/menu-close.svg');
    } else {
        burgerImg.setAttribute('src', '/img/menu-hamburger.svg')
    }
};