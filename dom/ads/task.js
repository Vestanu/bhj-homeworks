function changeElement() {
    const element = document.querySelector('.rotator__case_active');
    element.classList.remove('rotator__case_active');
    if (element.nextElementSibling) {
        element.nextElementSibling.classList.add('rotator__case_active');
    } else {
        element.parentElement.querySelector('.rotator__case').classList.add('rotator__case_active');
    }
    const active = document.querySelector('.rotator__case_active');
    active.style.color = active.dataset.color;
}

setInterval(changeElement, 1000);