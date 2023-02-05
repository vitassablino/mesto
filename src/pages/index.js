import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {
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
  elementTemplate,
  config,
  initialCards,
  userData,
} from "../utils/constans.js";

/* Колбэк сабмита попапа редактирования профиля */
const handleEditSubmitForm = (data) => {
  user.setUserInfo(data);
};

/* Колбэк сабмита попапа добавления картинки */
const handleAddCardSubmitForm = (data) => {
  /* Добавление экземпляра карточки */
  cardsSection.addItem(createCard(data).createCard());
};

/* Колбэк нажатия картинки */
const handleClickImage = (name, link) => {
  popupImage.open(name, link);
};

/* Декларирование попапов */
const popupProfile = new PopupWithForm(
  popupProfileSelector,
  handleEditSubmitForm
);
popupProfile.setEventListeners();

const addCardPopup = new PopupWithForm(
  popupAddCardSelector,
  handleAddCardSubmitForm
);
addCardPopup.setEventListeners();

const popupImage = new PopupWithImage(imagePopupSelector);
popupImage.setEventListeners();

const user = new UserInfo(userData);

/* Создание стартовых карточек */

const createCard = (item) => {
  return new Card(item, elementTemplate, handleClickImage);
};

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      cardsSection.addItem(card.createCard());
    },
  },
  elements
);
cardsSection.renderItems();

/* Включение Валидации форм */
const formEditProfileValidation = new FormValidator(config, formEditProfile);
formEditProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(config, formAddCard);
formAddCardValidation.enableValidation();

/*Открытие попапа редактирования данных*/
editButton.addEventListener("click", () => {
  const userConfig = user.getUserInfo();
  inputName.value = userConfig.name;
  inputDesсription.value = userConfig.description;
  popupProfile.open();
});

/* Открытие попапа добавления карточки */
addCardButton.addEventListener("click", () => {
  addCardPopup.open();
  formAddCardValidation.disableSubmitButton();
});
