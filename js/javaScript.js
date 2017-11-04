"use strict";

var headToggler = document.querySelector(".header__toggler");
var headNav = document.querySelector(".header__nav");
var headerToggler = document.querySelector(".header__toggler");
var headerMenu = document.querySelector(".header__menu");
var headLogtog = document.querySelector(".header__logtog");
var headerPhoto = document.querySelector(".header--photo");
var headerForm = document.querySelector(".header--form");
var headerIndex = document.querySelector(".header--index");

headNav.classList.add("header__nav--hidden");


headToggler.addEventListener("click", function (evt) {

    headNav.classList.toggle("header__nav-show");
    headToggler.classList.add("header__logtog-close");
    headerToggler.classList.toggle("header__toggler-close");
    headerMenu.classList.toggle("header__menu-color");
    headerToggler.classList.toggle("header__logtog-color");
    headLogtog.classList.toggle("header__logtog-color");
    headerPhoto.classList.toggle("header--photo-show");
    headerForm.classList.toggle("header--photo-show");
    headerIndex.classList.toggle("header--index-show");

});

var package1 = document.querySelector(".options__package1");
var package2 = document.querySelector(".options__package2");
var package3 = document.querySelector(".options__package3");

package2.classList.add("options__package-show");
