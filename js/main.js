const btnToggle = document.querySelector(".topbar-mobile-menu");
const btnCloseMenu = document.querySelector(".button-closed");
if (btnToggle) {
  btnToggle.addEventListener("click", () => {
    const menu = document.querySelector(".header-menu-link");
    menu.classList.toggle("active");
  });
}

if (btnCloseMenu) {
  btnCloseMenu.addEventListener("click", () => {
    const menu = document.querySelector(".header-menu-link");
    menu.classList.remove("active");
  });
}
