const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup-container__close-button");
const background = document.querySelector(".popup-container");
const saveButton = document.querySelector(".popup__save-button");
const inputName = document.getElementById("name");
const name = document.querySelector(".profile__name");
const inputDesсription = document.getElementById("description");
const description = document.querySelector(".profile__description");
const likes = document.querySelectorAll(".element__like-button");
const popupContainer = document.querySelector(".popup-container__form");
const popupForm = document.querySelector(".popup");

editButton.addEventListener("click", function (open) {
  background.classList.remove("popup-container_inactive");
  inputName.value = name.textContent;
  inputDesсription.value = description.textContent;
});

closeButton.addEventListener("click", function (close) {
  background.classList.add("popup-container_inactive");
});

popupForm.addEventListener("submit", function (save) {
  save.preventDefault(); // без этой функции при нажатии на кнопку  страница перезагружается
  name.textContent = inputName.value;
  description.textContent = inputDesсription.value;
  background.classList.add("popup-container_inactive");
});

/* likes.forEach((button) => {
  button.addEventListener("click", function (like) {
    button.classList.toggle("element__like-button_active");
  });
});

document.addEventListener("click", function (close) {
  var clickPopup = close.composedPath().includes(popupContainer);
  var clickEdit = close.composedPath().includes(editButton);

  if (!clickEdit && !clickPopup) {
    background.classList.add("popup-container_inactive");
  }
}); */
