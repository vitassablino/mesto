import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithDeletingConfirm from "../components/PopupWithDeletingConfirm.js";

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
  userData,
  apiData,
  popupWithConfirm,
  popupAvatarEdit,
  avatarEditButton,
  formEditAvatar,
} from "../utils/constans.js";

/* API */
const api = new Api(apiData);

/* Колбэк нажатия на кнопку удаления */
/* const handleDeletingConfirm = (item, deleteCard) => {
  popupWithDeletingConfirm.setSubmitAction(() => {
    api
      .delete(item.id)
      .then(() => {
        deleteCard;
        popupWithDeletingConfirm.close();
      })
      .catch((err) => console.log(err));
  });
  popupWithDeletingConfirm.open();
}; */

/* Колбэк сабмита попапа редактирования профиля */
const handleEditSubmitForm = (data) => {
  popupProfile.rendering(true);
  api
    .setUserData(data)
    .then((item) => {
      user.setUserInfo(item);
      /* console.log(item); */
      popupProfile.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupProfile.rendering(false));
  /* user.setUserInfo(data); */
};

/* Колбэк сабмита попапа добавления картинки */
const handleAddCardSubmitForm = (items) => {
  /* Добавление экземпляра карточки */
  /* cardsSection.addItem(createCard(data).createCard()); */
  addCardPopup.rendering(true);
  api
    .addNewCard(items)
    .then((item) => {
      cardsSection.addItem(createCard(item).createCard());
      addCardPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => addCardPopup.rendering(false));
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

const avatarEditPopup = new PopupWithForm(popupAvatarEdit, (items) => {
  avatarEditPopup.rendering(true);
  api
    .editAvatar(items)
    .then((item) => {
      user.setUserAvatar(item);
      avatarEditPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => avatarEditPopup.rendering(false));
});

avatarEditPopup.setEventListeners();

const popupImage = new PopupWithImage(imagePopupSelector);
popupImage.setEventListeners();

const popupWithDeletingConfirm = new PopupWithDeletingConfirm(popupWithConfirm);
popupWithDeletingConfirm.setEventListeners();

const user = new UserInfo(userData);

/* Создание стартовых карточек */

const createCard = (item) => {
  const card = new Card(
    {
      data: item,
      cardTemplate: elementTemplate,
      handleCardClick: handleClickImage,
      handleDeletingConfirm: () => {
        popupWithDeletingConfirm.setSubmitAction(() => {
          api
            .delete(item._id)
            .then(() => {
              card.deleteCard();
              popupWithDeletingConfirm.close();
            })
            .catch((err) => console.log(err));
        });
        popupWithDeletingConfirm.open();
      },
    },
    userId,
    api
  );
  return card;
};

const cardsSection = new Section(
  {
    renderer: (item) => {
      const card = createCard(item);
      cardsSection.addItem(card.createCard());
    },
  },
  elements
);
/* cardsSection.renderItems(); */

/* Включение Валидации форм */
const formEditProfileValidation = new FormValidator(config, formEditProfile);
formEditProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(config, formAddCard);
formAddCardValidation.enableValidation();

const formEditAvatarValidation = new FormValidator(config, formEditAvatar);
formEditAvatarValidation.enableValidation();

/*Открытие попапа редактирования данных*/
editButton.addEventListener("click", () => {
  const userConfig = user.getUserInfo();
  inputName.value = userConfig.name;
  inputDesсription.value = userConfig.about;
  popupProfile.open();
});

/* Открытие попапа добавления карточки */
addCardButton.addEventListener("click", () => {
  addCardPopup.open();
  formAddCardValidation.disableSubmitButton();
});

/* Открытие попапа редактирования аватара */
avatarEditButton.addEventListener("click", () => {
  avatarEditPopup.open();
  formEditAvatarValidation.disableSubmitButton();
});

let userId;

api
  .getData()
  .then(([cards, userData]) => {
    user.setUserInfo(userData);
    userId = userData._id;

    cardsSection.renderItems(cards);
  })
  .catch((err) => console.log(err));
