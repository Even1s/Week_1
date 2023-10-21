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
const favourite = document.querySelectorAll("img.hits__favourite");
const cart = document.querySelectorAll("button.hits__cart");
favourite.forEach((imgFavourite) => {
    imgFavourite.onclick = () => {
        if(imgFavourite.getAttribute('src')==="./img/heart.svg") {
            imgFavourite.setAttribute('src', './img/heart-On.png');
        } else {
            imgFavourite.setAttribute('src', './img/heart.svg');
        }
    }
})
cart.forEach((btn) => {
    const imgCart = btn.querySelector("img");
    btn.onclick = () => {
        btn.classList.toggle('hits__cart_on');
        if (imgCart.getAttribute('src')==="./img/cart.svg") {
            imgCart.setAttribute('src',"./img/cart-On.svg");
        } else {
            imgCart.setAttribute('src',"./img/cart.svg");
        }
    }
})