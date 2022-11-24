const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup-form-profile");
const popupCard = document.querySelector("#popup-form-card");
const closeButton = document.querySelector(".popup-container__close-button");
const editBackground = document.querySelector("#edit-popup-container");
const imageBackground = document.querySelector("#image-popup-container");
const saveButton = document.querySelector(".popup__save-button");
const inputName = document.getElementById("name");
const profileName = document.querySelector(".profile__name");
const inputDesсription = document.getElementById("description");
const description = document.querySelector(".profile__description");
const popupContainer = document.querySelector(".popup-container__form");
const elements = document.querySelector(".elements");
const addCardButton = document.querySelector(".profile__add-button");
const inputCardName = document.querySelector("#cardName");
const inputCardLink = document.querySelector("#cardLink");
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function addElement(name, link) {
  const elementTemplate = document.querySelector("#element").content;
  const element = elementTemplate.querySelector(".element").cloneNode(true);

  element.querySelector(".element__label").textContent = name;
  element.querySelector(".element__image").setAttribute("src", link);
  const like = element.querySelector(".element__like-button");

  elements.prepend(element);
}

function openPopup(popup, form) {
  popup.classList.remove("popup-container_inactive");
  form.style.transform = "scale(1)";
  form.style.display = "flex";
}

function closePopup(popup) {
  setTimeout(function () {
    popup.classList.add("popup-container_inactive");
  }, 600);
  popupProfile.style.transform = "scale(0)";
  setTimeout(function () {
    popupProfile.style.display = "none";
  }, 600);
  popupCard.style.transform = "scale(0)";
  setTimeout(function () {
    popupCard.style.display = "none";
  }, 600);
}

initialCards.forEach((element) => {
  addElement(element.name, element.link);
});

editButton.addEventListener("click", () => {
  openPopup(editBackground, popupProfile);
  inputName.value = profileName.textContent;
  inputDesсription.value = description.textContent;
});

closeButton.addEventListener("click", () => {
  closePopup(editBackground);
});

popupProfile.addEventListener("submit", function (save) {
  save.preventDefault();
  profileName.textContent = inputName.value;
  description.textContent = inputDesсription.value;
  closePopup(editBackground);
});

popupCard.addEventListener("submit", function (create) {
  create.preventDefault();
  const cardName = inputCardName.value;
  const cardLink = inputCardLink.value;

  if (cardName !== "" && cardLink !== "") {
    addElement(cardName, cardLink);
  }
  closePopup(editBackground);

  inputCardName.value = "";
  inputCardLink.value = "";
});
/* Метод ниже удобен в тех сдучаях, когда коллекция требуемых 
элементов собирается из объявленных в html объектов
likes.forEach((button) => {
  button.addEventListener("click", function (like) {
    button.classList.toggle("element__like-button_active");
  });
}); */

/* Метод ниже реализует "лайки" и "удаление" путём отслеживания, на какой 
таргет был совершён клик */
elements.addEventListener("click", function (e) {
  if (e.target.classList.contains("element__like-button")) {
    e.target.classList.toggle("element__like-button_active");
  }

  if (e.target.classList.contains("element__delete")) {
    e.target.closest(".element").remove();
  }

  if (e.target.classList.contains("element__image")) {
    openPopup(imageBackground);
  }
});

/* Закрытие попапа по клику вне окна*/
document.addEventListener("click", function (close) {
  const clickPopup = close.composedPath().includes(popupContainer);
  const clickEdit = close.composedPath().includes(editButton);
  const clickPlus = close.composedPath().includes(addCardButton);

  if (!clickEdit && !clickPopup && !clickPlus) {
    closePopup(editBackground);
  }
});

addCardButton.addEventListener("click", () => {
  openPopup(editBackground, popupCard);
});

/* console.log(
  (document
    .querySelector(".element__delete")
    .closest(".element").style.display = "none")
);
 */
