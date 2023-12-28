const links = {
  html5: "https://en.wikipedia.org/wiki/Hypertext_Markup_Language",
  sass: "https://sass-lang.com/",
  npm: "https://npmjs.org/",
  linux: "https://en.wikipedia.org/wiki/Linux",
  css3: "https://en.wikipedia.org/wiki/CSS",
  git: "https://git-scm.com/",
  typescript: "https://www.typescriptlang.org/",
  webpack: "https://webpack.js.org/",
  tailwindcss: "https://tailwindcss.com/",
  wordpress: "https://wordpress.org/",
  react: "https://react.dev/",
  nextJS: "http://nextjs.org/",
};

function redirectToLink(link) {
  window.location.href = link;
}

function addLinkListener(element, link) {
  element.addEventListener("click", () => {
    redirectToLink(link);
  });
}

export default function activateLinks() {
  for (const key in links) {
    if (links.hasOwnProperty(key)) {
      const element = document.getElementById(key);
      if (element) {
        addLinkListener(element, links[key]);
      }
    }
  }
}
