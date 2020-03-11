let mainMenuItems = document.querySelectorAll("ul.menu_main>li");
let subMenuOpen = 0;

function openSubmenu() {
    let subMenuElement = this.getElementsByClassName("menu menu_sub");

    if (subMenuElement) {
        if (subMenuElement[0].className == "menu menu_sub menu_active") {
            subMenuElement[0].className = "menu menu_sub";
            subMenuOpen = 0;
            return false;
        }

        if (subMenuElement[0].className == "menu menu_sub") {
            if (subMenuOpen != 0) {
                subMenuOpen.className = "menu menu_sub";
            }
            subMenuElement[0].className = "menu menu_sub menu_active";
            subMenuOpen = subMenuElement[0];
            return false;
        }
    }
}

for (const itms of mainMenuItems) {
    itms.onclick = openSubmenu;
}