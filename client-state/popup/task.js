
let subscribeElement = document.getElementById("subscribe-modal");

let showSubscribe = function() {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)closeModal\s*\=\s*([^;]*).*$)|^.*$/, "$1" ) !== true) {
      
      subscribeElement.classList.add("modal_active");
    }
      subscribeElement.querySelector(".modal__close").addEventListener("click", function(e) {
        this.closest(".modal").classList.remove("modal_active");
        // alert("Do something here!");
        document.cookie = "closeModal = true; expires=Fri, 24 Dec 2020 23:59:59 GMT";
        console.log(document.cookie)
      });
  
    
  };
  
  showSubscribe();