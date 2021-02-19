"use strict";

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
const homebotHeight = homebot.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / (homebotHeight * 5);
    homebot.style.opacity = 1 - window.scrollY / (homebotHeight * 5);
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

const actButtons = document.querySelectorAll(".activity__button")
const actPhoto = document.querySelectorAll(".activity__photos")  

actButtons.forEach((actButton,index) => {
    
    actButton.addEventListener("click", () => {
         actPhoto[index].classList.toggle('view')
    });
    
})



const sectionIds = [
    '#home',,
    '#skills',
    '#work',
    '#activitys',
    '#contact',
  ];
  const sections = sectionIds.map(id => document.querySelector(id));
  const navItems = sectionIds.map(id =>
    document.querySelector(`[data-link="${id}"]`)
  );
  
  let selectedNavIndex = 0;
  let selectedNavItem = navItems[0];
  function selectNavItem(selected) {
    selectedNavItem.classList.remove('active');
    selectedNavItem = selected;
    selectedNavItem.classList.add('active');
  }
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && entry.intersectionRatio > 0) {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        // 스크롤링이 아래로 되어서 페이지가 올라옴
        if (entry.boundingClientRect.y < 0) {
          selectedNavIndex = index + 1;
        } else {
          selectedNavIndex = index - 1;
        }
      }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));