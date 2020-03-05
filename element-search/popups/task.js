const elements = document.getElementsByClassName("modal__close");
console.log(elements);

function closing(click) {
    const active = click.toElement.closest(".modal_active");
    if (active) {
        active.className = "modal";
    }
    console.log(click)

}

function checkClosing(index) {
    let close = index;
    close.onclick = closing;
    console.log(index);
}

for (let i = 0; i < elements.length; i++) {
    checkClosing(elements[i]);
}

const element = document.getElementsByClassName("show-success");

for (let i = 0; i < element.length; i++) {
    checkShowing(element[i]);
}

function checkShowing(index) {
    let show = index;
    show.onclick = showing;
}
function showing(click) {
    open = document.getElementById("modal_success");

    if (open) {
        open.className = "modal modal_active";
        const elem = document.getElementById("modal_main");
        elem.className = "modal";
    }
    closing();
}