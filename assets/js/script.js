const info = document.querySelectorAll(".info");
const head = document.querySelector(".acrd-btn");
const acord = document.querySelectorAll(".accordion");

head.addEventListener("click", function () {
    for (let i = 0; i < acord.length; i++) {
        info[i].classList.toggle("info1");
    }
});