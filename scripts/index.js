let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup-container__close-button");
let background = document.querySelector(".popup-container");
let saveButton = document.querySelector(".popup__save-button");
let inputName = document.getElementById("name");
let name = document.querySelector(".profile__name");
let inputDesсription = document.getElementById("description");
let description = document.querySelector(".profile__description");
let likes = document.querySelectorAll(".element__like-button");
let popupContainer = document.querySelector(".popup-container__form");
let popupForm = document.querySelector(".popup");


editButton.addEventListener("click", function (open) {
  background.classList.add("popup-container_status_active");
  background.classList.remove("popup-container_status_inactive");
  inputName.value = name.textContent;
  inputDesсription.value = description.textContent;
});

closeButton.addEventListener("click", function (close) {
  background.classList.add("popup-container_status_inactive");
  background.classList.remove("popup-container_status_active");
});

popupForm.addEventListener("submit", function (save) {
  save.preventDefault(); // без этой функции при нажатии на кнопку  страница перезагружается
  name.textContent = inputName.value;
  description.textContent = inputDesсription.value;
  background.classList.add("popup-container_status_inactive");
  background.classList.remove("popup-container_status_active");
});

/* likes.forEach((button) => {
  button.addEventListener("click", function (like) {
    button.classList.toggle("element__like-button_activity_active");
    button.classList.toggle("element__like-button_activity_inactive");
  });
}); */

document.addEventListener("click", function (close) {
  var clickPopup = close.composedPath().includes(popupContainer);
  var clickEdit = close.composedPath().includes(editButton);
 
      if (!clickEdit && !clickPopup) {
        background.classList.add("popup-container_status_inactive");
        background.classList.remove("popup-container_status_active");
      };
});
