import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";

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
} from "../scripts/utils/constans.js";

/* Колбэк сабмита попапа редактирования профиля */
const handleEditSubmitForm = () => {
  user.setUserInfo(popupProfile._getInputValues());
};

/* Колбэк сабмита попапа добавления картинки */
const handleAddCardSubmitForm = () => {
  const cardData = addCardPopup._getInputValues(); //_getInputValues() - приватный метод. Допустимо ли использовать приватные методы в области глобальной видимости?
  /* Добавление экземпляра карточки */
  cardsSection.addItem(createCard(cardData).createCard());
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
