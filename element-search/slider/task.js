let imagesArr = Array.from(document.getElementsByClassName("slider__item"));
let dotsArr = Array.from(document.getElementsByClassName("slider__dot"));
let arrowNext = document.getElementsByClassName('slider__arrow_next');
let arrowPrev = document.getElementsByClassName('slider__arrow_prev');
let activeImage = 0;

function deactivateElements() {
    imagesArr[activeImage].className = "slider__item";
    dotsArr[activeImage].className = "slider__dot";
}

function activateElements() {
    imagesArr[activeImage].className = "slider__item slider__item_active";
    dotsArr[activeImage].className = "slider__dot slider__dot_active";
}

function nextImage() {
    deactivateElements();
    if (activeImage < imagesArr.length - 1) {
        activeImage = activeImage + 1;
    } else {
        activeImage = 0;
    }
    activateElements();
}

function prevImage() {
    deactivateElements();
    if (activeImage > 0) {
        activeImage = activeImage - 1;
    } else {
        activeImage = imagesArr.length - 1;
    }
    activateElements();
}

arrowNext[0].onclick = nextImage;
arrowPrev[0].onclick = prevImage;

function dotAction () {
    deactivateElements();
    activeImage = dotsArr.indexOf(this);
    activateElements();
}

for (const dots of dotsArr) {
    dots.onclick = dotAction;
}