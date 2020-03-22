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