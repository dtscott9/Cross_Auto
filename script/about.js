const hamButton = document.querySelector(".ham");
const navi = document.querySelector(".links")

hamButton.addEventListener("click", ()=>{
  navi.classList.toggle("responsive")
},
false);