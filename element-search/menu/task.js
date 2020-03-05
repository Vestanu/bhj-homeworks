const element = document.getElementsByClassName("menu__link");

element.onclick = function() {
    alert(element.textContent)
    // let elem = index;
    // if(elem.textContent == ) {
    // elem.className = "menu menu_sub menu_active"
    // }
    if (element.textContent == "О компании") {
        menuList[0].className = "menu menu_sub menu_active";
    } else if (element.textContent == "Услуги") {
        menuList[1].className == "menu menu_sub menu_active"
    }
    return false;
}

const menuList = document.getElementsByClassName("menu_sub");
console.log(menuList)

// let arr = Array.from(menuList);
// console.log(arr[0])

// for (let i = 0; i < menuList.length; i++) {
//     element.onclick(menuList[i]);
// }

// // function checkMenu (index) {

// // }