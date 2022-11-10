let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector("popup__close-button");

editButton.addEventListener("click", function () {
  popup.classList.remove("popup_inactive");
  popup.classList.add("popup_active");
  popup.style.console.log("123");
});
