// ===============================
// Hamidreza Ghorbani Official Website
// JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Header Shadow on Scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 40){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

});
