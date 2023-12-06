const hiddenElements = document.querySelectorAll(".hidden");
const toggle = document.getElementById("switch");

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
