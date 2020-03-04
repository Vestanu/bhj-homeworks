const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function checking(){
    if (dead.textContent == 10) {
        alert("Вы выиграли!");
        dead.textContent = 0;
        lost.textContent = 0;
    } else if(lost.textContent == 5) {
        alert("Вы проиграли! :(")
        dead.textContent = 0;
        lost.textContent = 0;
    }
}

const checkHole = function(click) {
    if (click.toElement.className == 'hole'){
        lost.textContent++;
    }
    if (click.toElement.className == 'hole hole_has-mole'){
        dead.textContent++
    }
    setTimeout (checking, 0)
} 

function getHole(index) {
    let hole = index;
    hole.onclick = checkHole;
}

let holes = document.getElementsByClassName("hole");

for (let i = 0; i < holes.length; i++) {
    getHole(holes[i]);
}
