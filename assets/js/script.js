const btn = document.querySelector(".acrd-btn");
const list = document.querySelectorAll(".list");

btn.addEventListener("click", function () {
    for (let i = 0; i < list.length; i++) {
        list[0].classList.toggle("listtgl");
    }
});

$(document).ready(function () {
    $('.cards-section').slick({
        // setting-name: setting - value
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<i class="fa-solid fa-angle-left"></i>',
        nextArrow:'<i class="fa-solid fa-angle-right"></i>',
        autoplay:true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        // dots:true

    });
});