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
const avatarEditButton = document.querySelector(".profile__avatar-button");
const formEditAvatar = document.querySelector("#popup-avatar-edit");

/* Селекторы */
const imagePopupSelector = document.querySelector("#image-container");
const popupProfileSelector = document.querySelector("#edit-popup");
const popupAddCardSelector = document.querySelector("#card-popup");
const popupWithConfirm = document.querySelector("#popup_deleting-confirm");
const popupAvatarEdit = document.querySelector("#popup-avatar-edit");

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
  about: document.querySelector(".profile__description"),
  avatar: document.querySelector(".profile__avatar"),
};

/* Данные для Api mesto.nomoreparties.co */
const apiData = {
  url: "https://mesto.nomoreparties.co/v1/cohort-59",
  headers: {
    authorization: "44c0c0c8-2249-4c66-a825-6f516eb82eac",
    "Content-Type": "application/json",
  },
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
  apiData,
  popupWithConfirm,
  popupAvatarEdit,
  avatarEditButton,
  formEditAvatar,
};
