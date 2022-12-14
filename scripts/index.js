const editButton = document.querySelector(".profile__edit-button");
const formEditProfile = document.querySelector("#popup-form-profile");
const imageForm = document.querySelector(".image-figure");
const formAddCard = document.querySelector("#popup-form-card");
const closeButtons = document.querySelectorAll(".popup__close-button");
const popupEditProfile = document.querySelector("#edit-popup");
const popupAddCard = document.querySelector("#card-popup");
const popups = document.querySelectorAll(".popup");
const imagePopup = document.querySelector("#image-container");
const saveButton = document.querySelector(".popup__save-button");
const inputName = document.getElementById("name");
const profileName = document.querySelector(".profile__name");
const inputDesсription = document.getElementById("description");
const description = document.querySelector(".profile__description");
const popupForm = document.querySelector(".popup__form");
const elements = document.querySelector(".elements");
const addCardButton = document.querySelector(".profile__add-button");
const inputCardName = document.querySelector("#cardName");
const inputCardLink = document.querySelector("#cardLink");
const closeFigure = document.querySelector(".image-figure__close-button");
const bigImage = document.querySelector(".image-figure__big-image");
const bigImageCaption = document.querySelector(".image-figure__figcaption");
const elementTemplate = document.querySelector("#element").content;
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

/*Создание карточки*/
function createElement(name, link) {
  const element = elementTemplate.querySelector(".element").cloneNode(true);
  const like = element.querySelector(".element__like-button");
  const deleteButton = element.querySelector(".element__delete");
  const image = element.querySelector(".element__image");
  const label = element.querySelector(".element__label");
  label.textContent = name;
  image.setAttribute("src", link);
  image.setAttribute("alt", name);

  like.addEventListener("click", () => {
    like.classList.toggle("element__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    element.remove();
  });

  image.addEventListener("click", () => {
    openPopup(imagePopup);
    bigImage.setAttribute("src", link);
    bigImage.setAttribute("alt", name);
    bigImageCaption.textContent = label.textContent;
  });

  return element;
}

/*Добавление карточки*/
function addElementPrepend(name, link) {
  elements.prepend(createElement(name, link));
}

/* Закрытие по нажатию Esc */
const closeByEsc = (event) => {
  const key = event.key;
  if (key === "Escape") {
    closePopup();
  }
};

/*Открытие попапа*/
function openPopup(popup) {
  popup.classList.add("popup_active");
  document.addEventListener("keydown", closeByEsc);
}

/*Закрытие попапа*/
function closePopup() {
  const openedPopup = document.querySelector(".popup_active");
  openedPopup.classList.remove("popup_active");
  document.removeEventListener("keydown", closeByEsc);
}

///////////////////////////////////////////////////////

/* Добавление стартовых карточек */
initialCards.forEach((element) => {
  addElementPrepend(element.name, element.link);
});

/*Открытие попапа редактирования данных*/
editButton.addEventListener("click", () => {
  openPopup(popupEditProfile);
  inputName.value = profileName.textContent;
  inputDesсription.value = description.textContent;
});

/*Закрытие попапа при нажатии на крестик*/
closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    closePopup();
  });
});

/* Сохранение изменения информации профиля */
formEditProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  description.textContent = inputDesсription.value;
  closePopup();
});

/* Добавление новой карточки*/
formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardName = inputCardName.value;
  const cardLink = inputCardLink.value;

  addElementPrepend(cardName, cardLink);
  closePopup();
  evt.target.reset();
});

/* Закрытие попапа по клику вне окна*/
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup();
    }
  });
});

/* Открытие изображения */
addCardButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});

////////////////////////////////////////////////////////////////////////////////////////////
/* ToDoList /*
/* Анимация масштабирования при добавлении новых карточек */
/* Анимация масштабирования окна папапа */
/* Анимация при открытии изображения */
///////////////////////////////////////////////////////////////////////////////////////////
