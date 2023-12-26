const hiddenElements = document.querySelectorAll(".hidden");
const toggle = document.getElementById("switch");
const menuImage = document.getElementById("menu");
const nav = document.querySelector("nav");
const myProjectMobile = document.getElementById("projects-mobile");
myProjectMobile.style.display = "none";

nav.style.height = "70px";
const header = document.querySelector("header");
const footer = document.querySelector("footer");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
    else entry.target.classList.remove("show");
  });
});
hiddenElements.forEach((el) => observer.observe(el));

const root_theme = document.querySelector(":root");

toggle.addEventListener("change", () => {
  if (toggle.checked == true) {
    root_theme.style.setProperty("--body-color", "#ffffff");
    root_theme.style.setProperty("--text-color", "#121211");
    root_theme.style.setProperty("--footer-color", "#dcdcdc");
    root_theme.style.setProperty("--nav-color", "#d1d5db");
  } else {
    root_theme.style.setProperty("--body-color", "#121211");
    root_theme.style.setProperty("--text-color", "#ffffff");
    root_theme.style.setProperty("--footer-color", "#555555");
    root_theme.style.setProperty("--nav-color", "#333333");
  }
});

function setTheme(property, value) {
  root_theme.style.setProperty(property, value);
}
setTheme();

menuImage.addEventListener("click", () => {
  let closeMenu =
    "https://github.com/Florin12er/Portofolio-website/blob/main/images/menu-close.png?raw=true";
  let menu =
    "https://github.com/Florin12er/Portofolio-website/blob/main/images/menu.png?raw=true";
  if (nav.style.height === "70px") {
    footer.style.opacity = "0.2";
    header.style.opacity = "0.2";
    menuImage.src = closeMenu;
    nav.style.height = "250px";
    myProjectMobile.style.display = "block";
  } else {
    header.style.opacity = "1";
    footer.style.opacity = "1";
    menuImage.src = menu;
    myProjectMobile.style.display = "none";
    nav.style.height = "70px";
  }
});
