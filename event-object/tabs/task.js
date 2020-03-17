let index = 0;
let active = 0;
let activeContent = 0;
const menu = document.body.querySelectorAll(".tab");
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function () {
        this.classList.add("tab_active");
        const content = document.body.querySelectorAll('.tab__content');
        if (index >= 1) {
            active.remove("tab_active");
            activeContent.remove("tab__content_active");
            if (index > 3) {
                index = 0;
                activeContent = 0;
            }

        }
        content[i].classList.add('tab__content_active');
        activeContent = content[i].classList;
        active = this.classList;
        index += 1;
    })
}