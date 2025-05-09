function leftScroll() {
    const left = document.querySelector(".flags-container");
    left.scrollBy(-510, 0);
}

function rightScroll() {
    const right = document.querySelector(".flags-container");
    right.scrollBy(510, 0);
}

let textDisplay = document.getElementsByClassName('flag-name');

function displayFlagName() {
    textDisplay.style.display = 'block'
}