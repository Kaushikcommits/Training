const hamburger = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const navLogo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navLogo.classList.toggle("open");
    
});