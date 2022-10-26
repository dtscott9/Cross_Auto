// carousel

function goRight() {
  document.querySelector(".carousel").scrollLeft += 400;
}
const right_button = document.querySelector(".right-button");
right_button.addEventListener("click", goRight);
right_button.addEventListener("touchend", goRight);

function goLeft() {
  document.querySelector(".carousel").scrollLeft -= 400;
}
function goRight2() {
  document.querySelector(".carousel2").scrollLeft += 400;
}

function goLeft2() {
  document.querySelector(".carousel2").scrollLeft -= 400;
}
function goRight3() {
  document.querySelector(".carousel3").scrollLeft += 400;
}

function goLeft3() {
  document.querySelector(".carousel3").scrollLeft -= 400;
}
// --------------

function showVideos(group) {
  let genres = document.getElementById("genres");
  for (let i = 0; i < genres.childElementCount; i++) {
    genres.children[i].classList.add("hidden");
  }
  document.getElementById(group).classList.remove("hidden");
}

// Header and footer

export function renderWithTemplate(template, parent, data, callback) {
  let clone = template.content.cloneNode(true);
  if (callback) {
    clone = callback(clone, data);
  }
  parent.appendChild(clone);
}

export function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement("template");
  template.innerHTML = html;
  return template;
}

export async function loadHeaderFooter() {
  const header = await loadTemplate("../partials/header.html");
  const footer = await loadTemplate("../partials/footer.html");
  const headerElement = document.getElementById("main-header");
  const footerElement = document.getElementById("main-footer");
  renderWithTemplate(header, headerElement);
  renderWithTemplate(footer, footerElement);
}

loadHeaderFooter();
