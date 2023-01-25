import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const imagePopup = document.querySelector("#image-container");
const bigImage = document.querySelector(".image-figure__big-image");
const bigImageCaption = document.querySelector(".image-figure__figcaption");

const handleCardClick = {
  handleCardClick: () => {
    popupImage.open();
  },
};

const config = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".popup-form__save-button",
  inactiveButtonClass: "popup-form__save-button_disabled",
  inputErrorClass: "popup-form__input_wrong",
};

const editButton = document.querySelector(".profile__edit-button");
const formEditProfile = document.querySelector("#popup-form-profile");
const formAddCard = document.querySelector("#popup-form-card");
const closeButtons = document.querySelectorAll(".popup__close-button");
const popupProfileSelector = document.querySelector("#edit-popup");
const popupAddCardSelector = document.querySelector("#card-popup");
const popups = document.querySelectorAll(".popup");
const inputName = document.getElementById("name");
/* const profileName = document.querySelector(".profile__name"); */
const inputDesсription = document.getElementById("description");
/* const description = document.querySelector(".profile__description"); */
const elements = document.querySelector(".elements");
const addCardButton = document.querySelector(".profile__add-button");
const inputCardName = document.querySelector("#cardName");
const inputCardLink = document.querySelector("#cardLink");
const elementTemplate = document.querySelector("#element-template").content;
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

const startCards = {
  items: [],
  renderer: (container, item) => {
    container.prepend(item);
  },
};

const userData = {
  name: document.querySelector(".profile__name"),
  description: document.querySelector(".profile__description")
}

const profileStartInfo = {
  name: "Жак-Ив Кусто",
  description: "Исследователь океана"
}
/* Блок описания функций */

/* Закрытие по нажатию Esc */
/* const closeByEsc = (event) => {
  const key = event.key;
  if (key === "Escape") {
    const popup = document.querySelector(".popup_active");
    closePopup(popup);
  }
}; */

/*Открытие попапа*/
/* function openPopup(popup) {
  popup.classList.add("popup_active");
  document.addEventListener("keydown", closeByEsc);
} */

/*Закрытие попапа*/
/* function closePopup(popup) {
  popup.classList.remove("popup_active");
  document.removeEventListener("keydown", closeByEsc);
} */

///////////////////////////////////////////////////////


const user = new UserInfo(userData);

const handleEditSubmitForm = () => {
  user.setUserInfo(inputName, inputDesсription);

}

const handleClickImage = (name, link) => {
  popupImage.open(name, link)
}

/*Открытие попапа редактирования данных*/
editButton.addEventListener("click", () => {
  const userConfig = user.getUserInfo();
  inputName.value = userConfig.name;
  inputDesсription.value = userConfig.description
  popupProfile.open();
  /*   inputName.value = profileName.textContent;
  inputDesсription.value = description.textContent */
});

const popupProfile = new PopupWithForm(popupProfileSelector, handleEditSubmitForm);
popupProfile.setEventListeners();

const popupImage = new PopupWithImage(imagePopup);
popupImage.setEventListeners();


/* Создание стартовых карточек */
initialCards.forEach((element) => {
  element = new Card(element.name, element.link, elementTemplate, handleClickImage);
  startCards.items.push(element.createCard());
});
const cardsSection = new Section(startCards, elements);
cardsSection.startingRendering();



/*Закрытие попапа при нажатии на крестик*/
/* closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", function () {
    popup.close();
  });
}); */

/* Сохранение изменения информации профиля */
/* formEditProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  description.textContent = inputDesсription.value;
  popupProfile.close();
}); */

/* Включение Валидации форм */
const formEditProfileValidation = new FormValidator(config, formEditProfile);
formEditProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(config, formAddCard);
formAddCardValidation.enableValidation();

/* Добавление новой карточки*/
formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardName = inputCardName.value;
  const cardLink = inputCardLink.value;
  const newCard = new Card(cardName, cardLink, elementTemplate, handleCardClick);

  cardsSection.addItem(newCard.createCard());
  popupImage.close();
  formAddCardValidation.disableSubmitButton();
  formAddCard.reset();
});

/* Закрытие попапа по клику вне окна*/
/* popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
}); */

/* Открытие изображения */
addCardButton.addEventListener("click", () => {
  popupImage.open();
});

/* console.log(user.getUserInfo()) */