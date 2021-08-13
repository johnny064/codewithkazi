



// Hambergur Menu Click testing

const burgerMenu = document.querySelector(".hamburger-bar");
const navLink = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", function(){
    navLink.classList.toggle("active");
})