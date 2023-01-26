/* Константы */
const editButton = document.querySelector(".profile__edit-button");
const formEditProfile = document.querySelector("#popup-form-profile");
const formAddCard = document.querySelector("#popup-form-card");
const inputName = document.getElementById("name");
const inputDesсription = document.getElementById("description");
const elements = document.querySelector(".elements");
const addCardButton = document.querySelector(".profile__add-button");
const inputCardName = document.querySelector("#cardName");
const inputCardLink = document.querySelector("#cardLink");
const elementTemplate = document.querySelector("#element-template").content;

/* Селекторы */
const imagePopupSelector = document.querySelector("#image-container");
const popupProfileSelector = document.querySelector("#edit-popup");
const popupAddCardSelector = document.querySelector("#card-popup");

/* Объекты */
const config = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".popup-form__save-button",
  inactiveButtonClass: "popup-form__save-button_disabled",
  inputErrorClass: "popup-form__input_wrong",
};

const initialCards = [
  {
    cardName: "Архыз",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    cardName: "Челябинская область",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    cardName: "Иваново",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    cardName: "Камчатка",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    cardName: "Холмогорский район",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    cardName: "Байкал",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

/* Конфиг для PopupWithForm */
const startCards = {
  items: [],
  renderer: (container, item) => {
    container.prepend(item);
  },
};

/* Конфиг для информации о пользователе */
const userData = {
  name: document.querySelector(".profile__name"),
  description: document.querySelector(".profile__description"),
};

export {
  imagePopupSelector,
  popupProfileSelector,
  popupAddCardSelector,
  editButton,
  formEditProfile,
  formAddCard,
  inputName,
  inputDesсription,
  elements,
  addCardButton,
  inputCardName,
  inputCardLink,
  elementTemplate,
  config,
  initialCards,
  startCards,
  userData,
};
