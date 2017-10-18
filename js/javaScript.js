"use strict";

var headToggler = document.querySelector(".header__logtog");
var headNav = document.querySelector(".header__nav");


headToggler.addEventListener("click", function (evt) {
    headNav.classList.toggle("header__nav-show");
    headToggler.classList.add("header__logtog-close");
});
