// Carousel
function goRight() {
    document.querySelector(".carousel").scrollLeft += 400;
}

const right_button = document.querySelector(".right-button");
right_button.addEventListener("click", goRight);
right_button.addEventListener("touchend", goRight);

function goLeft(){
    document.querySelector(".carousel").scrollLeft -= 400;
}
function goRight2(){
    document.querySelector(".carousel2").scrollLeft += 400;
}

function goLeft2(){
    document.querySelector(".carousel2").scrollLeft -= 400;
}
function goRight3(){
    document.querySelector(".carousel3").scrollLeft += 400;
}

function goLeft3(){
    document.querySelector(".carousel3").scrollLeft -= 400;
}

// --------------------

function showVideos(group) {
    let genres = document.getElementById("genres");
    for(let i = 0; i < genres.childElementCount; i++) {
        genres.children[i].classList.add("hidden");
    }
    document.getElementById(group).classList.remove("hidden");
}
