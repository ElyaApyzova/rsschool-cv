//menu

const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".mobile__menu_list");
const closeBtn = document.querySelector(".close__btn");

menuBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("menu__open");
    closeBtn.style.display = menuMobile.classList.contains("menu__open") ? "block" : "none";
});

closeBtn.addEventListener("click", () => {
    menuMobile.classList.remove("menu__open");
    closeBtn.style.display = "none";
});

document.addEventListener('click', (event) => {
    if (!menuBtn.contains(event.target) && !menuMobile.contains(event.target)) {
        if (menuMobile.classList.contains('menu__open')) {
            menuMobile.classList.remove('menu__open');
            closeBtn.style.display = "none";
        }
    }
});


// scroll the page to the section


const menuLinks = document.querySelectorAll(".nav__menu_link");

menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); 
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            menuMobile.classList.remove("menu__open"); 
        }
    });
});
