let subscribeElement = document.getElementById("subscribe-modal");

let closeModal = document.querySelector(".modal__close");



  const getCookieName = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift(); 
    }
};

window.addEventListener("load", () => {
  if (!getCookieName("closedModal")) {
      subscribeElement.classList.add("modal_active");
  }
});

closeModal.addEventListener("click", () => {
  subscribeElement.classList.remove("modal_active");
  document.cookie = "closedModal=true";
});