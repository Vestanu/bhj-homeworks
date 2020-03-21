const element = document.querySelectorAll(".reveal");
// console.log(element)
let isInViewport = function () {
    const viewportHeight = window.innerHeight;
    for (let el of element) {
        if (el.getBoundingClientRect().top < viewportHeight && el.getBoundingClientRect().top > 0) {
            el.classList.add("reveal_active");
        } else {
            el.classList.remove("reveal_active");
        }
    }
    }
    
    
    window.addEventListener("scroll", isInViewport);