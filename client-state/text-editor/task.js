const text = document.getElementById("editor");
const eraser = document.getElementById("button");

let previousText = localStorage.getItem("text");

text.value = previousText;

text.addEventListener("keyup", dataText_OnKeyUp);

function dataText_OnKeyUp(e) {
  localStorage.setItem("text", this.value);
}

eraser.addEventListener("click", function() {
  text.value = "";
  localStorage.removeItem("text");
});