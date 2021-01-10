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
    scrollIntoView(link);
});

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});

const home = document.querySelector(".home__container");
const homebot = document.querySelector(".home__botcontainer");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / (homeHeight * 2.5);
    homebot.style.opacity = 1 - window.scrollY / (homeHeight * 2.5);
});

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add("visible");
    } else {
        arrowUp.classList.remove("visible");
    }
});

arrowUp.addEventListener("click", () => {
    scrollIntoView("#home");
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}

const actButton1 = document.querySelector(".activity__button1")
const actButton2 = document.querySelector(".activity__button2")     
const actButton3 = document.querySelector(".activity__button3")  
const actButton4 = document.querySelector(".activity__button4")  
const actButton5 = document.querySelector(".activity__button5")  
const actPhoto = document.querySelectorAll(".activity__photos")  

actButton1.addEventListener("click", () => {
    actPhoto[0].classList.toggle('view')
});

actButton2.addEventListener("click", () => {
    actPhoto[1].classList.toggle('view')
});

actButton3.addEventListener("click", () => {
    actPhoto[2].classList.toggle('view')
});

actButton4.addEventListener("click", () => {
    actPhoto[3].classList.toggle('view')
});

actButton5.addEventListener("click", () => {
    actPhoto[4].classList.toggle('view')
});
