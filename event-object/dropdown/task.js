let element = document.getElementsByClassName("dropdown__value");
let list = document.getElementsByClassName("dropdown__list");
let items = document.getElementsByClassName("dropdown__item");

function menu() {
    list[0].className = "dropdown__list dropdown__list_active";
    return false;
}

element[0].addEventListener("click", menu);

function replace() {
    element[0].textContent = this.textContent;
    list[0].className = "dropdown__list";
    return false;
};

for (const item of items) {
    item.onclick = replace;
}


