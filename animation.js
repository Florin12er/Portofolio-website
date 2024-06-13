import activateLinks from "./skillsLink.js";
import sendEmail from "./email.js";

const send = document.getElementById("send");
const hiddenElements = document.querySelectorAll(".hidden");
const toggle = document.getElementById("switch");
const app = document.querySelectorAll("#app");
const menuImage = document.getElementById("menu");
const nav = document.querySelector("nav");
const myProjectMobile = document.getElementById("projects-mobile");
const root_theme = document.querySelector(":root");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

app.forEach(entry => {
    entry.style = "stroke: white"
})

myProjectMobile.style.display = "none";
nav.style.height = "70px";

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        else entry.target.classList.remove("show");
    });
});
hiddenElements.forEach((el) => observer.observe(el));

function changeColor() {
    if (toggle.checked == true) {
        root_theme.style.setProperty("--body-color", "#ffffff");
        root_theme.style.setProperty("--text-color", "#121211");
        root_theme.style.setProperty("--footer-color", "#dcdcdc");
        root_theme.style.setProperty("--nav-color", "#d1d5db");
        app.forEach(entry => {
            entry.style = "stroke: black"
        })
    } else {
        root_theme.style.setProperty("--body-color", "#121211");
        root_theme.style.setProperty("--text-color", "#ffffff");
        root_theme.style.setProperty("--footer-color", "#555555");
        root_theme.style.setProperty("--nav-color", "#333333");
    app.forEach(entry => {
            entry.style = "stroke: white"
        })

    }
}

function addMenuStyle() {
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
}

function resize() {
    if (window.innerWidth >= 3840) {
        nav.style.height = "70px";
        header.style.opacity = "1";
        footer.style.opacity = "1";
        myProjectMobile.style.display = "none";
    } else if (window.innerWidth >= 2560) {
        nav.style.height = "70px";
        header.style.opacity = "1";
        footer.style.opacity = "1";
        myProjectMobile.style.display = "none";
    } else if (window.innerWidth >= 1920) {
        nav.style.height = "70px";
        header.style.opacity = "1";
        footer.style.opacity = "1";
        myProjectMobile.style.display = "none";
    }
}

activateLinks();

window.addEventListener("resize", resize);

menuImage.addEventListener("click", addMenuStyle);

toggle.addEventListener("change", changeColor);

send.addEventListener("click", sendEmail);
