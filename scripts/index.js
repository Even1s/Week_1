const burger = document.querySelector("#menu-hamburger");
const mobileHeader = document.querySelector(".mobile-header");
const burgerImg = burger.querySelector("img"); // img это не класс, это блок img внутри кнопки бургера (открытие меню), всегда будет один
burger.onclick = () =>{
    mobileHeader.classList.toggle('mobile-header_open');
    document.body.classList.toggle('lock');
    if(document.body.classList.contains('lock')) {
        burgerImg.setAttribute('src', '/img/menu-close.svg');
    } else {
        burgerImg.setAttribute('src', '/img/menu-hamburger.svg')
    }
};