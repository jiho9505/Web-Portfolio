"use stric";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.remove("navbar--dark");
    }

    navbarMenu.classList.remove("open");
});


const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
    const target = e.target;
    const link = target.dataset.link;
    
    if (link == null) {
        return;
    }
    
    navbarMenu.classList.remove("open");
    const scrollTo = document.querySelector(link)
    scrollTo.scrollIntoView({ behavior : 'smooth' });
});