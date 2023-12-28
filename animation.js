import activateLinks from "./skillsLink.js";
activateLinks();

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
function updateStyles() {
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
window.addEventListener("resize", updateStyles);
function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const emailParams = {
    name: name,
    email: email,
    message: message,
  };
  if (!name || !email || !message) {
    alert("Please fill out all required fields: Name, Email, and Message");
    return;
  }
  const serviceID = "service_ociqo3b";
  const templeteID = "template_65k98eo";
  emailjs
    .send(serviceID, templeteID, emailParams)
    .then((response) => {
      name;
      email;
      message;
      console.log(response);
      alert("your email has been sent successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}
