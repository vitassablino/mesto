import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const imagePopup = document.querySelector("#image-container");
const bigImage = document.querySelector(".image-figure__big-image");
const bigImageCaption = document.querySelector(".image-figure__figcaption");
const data = {
  handleCardClick: (name, link) => {
    bigImage.src = link;
    bigImage.alt = name;
    bigImageCaption.textContent = name;
    openPopup(imagePopup);
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
const popupEditProfile = document.querySelector("#edit-popup");
const popupAddCard = document.querySelector("#card-popup");
const popups = document.querySelectorAll(".popup");
const inputName = document.getElementById("name");
const profileName = document.querySelector(".profile__name");
const inputDesсription = document.getElementById("description");
const description = document.querySelector(".profile__description");
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

/* Блок описания функций */

/* Закрытие по нажатию Esc */
const closeByEsc = (event) => {
  const key = event.key;
  if (key === "Escape") {
    const popup = document.querySelector(".popup_active");
    closePopup(popup);
  }
};

/*Открытие попапа*/
function openPopup(popup) {
  popup.classList.add("popup_active");
  document.addEventListener("keydown", closeByEsc);
}

/*Закрытие попапа*/
function closePopup(popup) {
  popup.classList.remove("popup_active");
  document.removeEventListener("keydown", closeByEsc);
}

///////////////////////////////////////////////////////

/* Добавление стартовых карточек */
initialCards.forEach((element) => {
  element = new Card(element.name, element.link, elementTemplate, data);
  elements.prepend(element.createCard());
  /*  element.addCardPrepend(elements); */
});

/*Открытие попапа редактирования данных*/
editButton.addEventListener("click", () => {
  openPopup(popupEditProfile);
  inputName.value = profileName.textContent;
  inputDesсription.value = description.textContent;
});

/*Закрытие попапа при нажатии на крестик*/
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", function () {
    closePopup(popup);
  });
});

/* Сохранение изменения информации профиля */
formEditProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  description.textContent = inputDesсription.value;
  closePopup(popupEditProfile);
});

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
  const newCard = new Card(cardName, cardLink, elementTemplate, data);

  elements.prepend(newCard.createCard());
  closePopup(popupAddCard);
  formAddCardValidation.disableSubmitButton();
  formAddCard.reset();
});

/* Закрытие попапа по клику вне окна*/
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
});

/* Открытие изображения */
addCardButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});

////////////////////////////////////////////////////////////////////////////////////////////
/* ToDoList /*
/* Анимация масштабирования при добавлении новых карточек 
Алгоритм:
1. Снятие координат нажатия по картинке относительно монитора (Точка А0)
2. Анимация от (масштаб 0, центр в точке А0) до (масштаб 1, центр монитора)*/
/* Анимация масштабирования окна папапа */
/* Анимация при открытии изображения */
///////////////////////////////////////////////////////////////////////////////////////////
