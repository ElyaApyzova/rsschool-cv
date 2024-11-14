//menu

const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".mobile__menu_list ");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu__open");
});

