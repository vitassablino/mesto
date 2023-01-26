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
  inputCardName,
  inputCardLink,
  elementTemplate,
  config,
  initialCards,
  startCards,
  userData,
} from "../utils/constans.js";

/* Колбэк сабмита попапа редактирования профиля */
const handleEditSubmitForm = () => {
  user.setUserInfo(inputName, inputDesсription);
};

/* Колбэк сабмита попапа добавления картинки */
const handleAddCardSubmitForm = () => {
  const cardData = {
    cardLink: inputCardLink.value,
    cardName: inputCardName.value,
  };
  /* const cardData = addCardPopup._getInputValues(); */
  const newCard = new Card(cardData, elementTemplate, handleClickImage);
  cardsSection.addItem(newCard.createCard());
  formAddCardValidation.disableSubmitButton();
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
initialCards.forEach((element) => {
  element = new Card(element, elementTemplate, handleClickImage);
  startCards.items.push(element.createCard());
});
const cardsSection = new Section(startCards, elements);
cardsSection.startingRendering();

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
});
