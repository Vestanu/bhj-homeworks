// //базовый уровень

// const countdown = function () {
//     const time = document.getElementById("timer");
//     time.textContent -=1;
//     if (time.textContent == 0) {
//         return alert("Вы победили в конкурсе!");
//     }
   
// }
// setInterval (countdown, 1000);



//Повышенный №2

const countdown = function () {
    const time = document.getElementById("timer");
    time.textContent -=1;
    if (time.textContent == 0) {
        window.location = "https://upyachka.io/";
    }
   
}
setInterval (countdown, 1000);
