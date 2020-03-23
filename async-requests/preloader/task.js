let pic = document.getElementById("loader")
const text = document.getElementById("items");
let dates;
console.log(text);
let xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
xhr.responseType = "json";
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        pic.classList.toggle("loader_active");
        dates = xhr.response.response.Valute;
        console.log(dates);
    }
        for (let data in dates) {
            text.insertAdjacentHTML("afterBegin",
            `<div class="item__code">${dates[data].CharCode}</div>
            <div class="item__value">${dates[data].Value}</div>
            <div class="item__currency">руб.</div>`);
        }
        console.log(text);
    
}
