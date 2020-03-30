const book = document.getElementById("book");
const fontSizes = document.querySelectorAll(".font-size");
console.log(book);
for (let fontSize of fontSizes) {
    fontSize.addEventListener("click", changeSize);

    function changeSize (event) {
        event.preventDefault();
        book.querySelector(".font-size_active").classList.remove("font-size_active");
        fontSize.classList.add("font-size_active");
        if (fontSize.classList.contains("font-size_small")) {
            book.className = "book book_fs-small";
        } else if (fontSize.classList.contains("font-size_big")) {
            book.className = "book book_fs-big";
        } else {
            book.className = "book";
        }
    }
}

const textColors = document.querySelectorAll(".book__control_color a.color");

for (let i = 0; i < textColors.length; i++) {
    textColors[i].addEventListener("click", changeColor);

    function changeColor () {
        for (const textColor of textColors) {
            if(textColor.className.includes("color_active")) {
                textColor.classList.remove("color_active");
            }
        }
        this.classList.add("color_active");
        if (this.hasAttribute("data-color")) {
            book.style.color = this.dataset.color;
        } else {
            book.style.color = " ";
        }
    }
}

