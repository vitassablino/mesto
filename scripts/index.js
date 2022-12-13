const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup-form-profile");
const imageForm = document.querySelector(".image-figure");
const popupCard = document.querySelector("#popup-form-card");
const closeButtons = document.querySelectorAll(".popup__close-button");
const editBackground = document.querySelector("#edit-popup");
const cardBackground = document.querySelector("#card-popup");
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
  image.setAttribute("alt", "Фото");

  like.addEventListener("click", () => {
    like.classList.toggle("element__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    element.remove();
  });

  image.addEventListener("click", () => {
    const alt = element.getAttribute("alt");
    openPopup(imagePopup);
    bigImage.setAttribute("src", link);
    bigImage.setAttribute("alt", alt);
    bigImageCaption.textContent = label.textContent;
  });

  return element;
}

/*Добавление карточки*/
function addElementPrepend(name, link) {
  elements.prepend(createElement(name, link));
}

/*Открытие попапа*/
function openPopup(popup) {
  popup.classList.remove(popup.className.split(" ")[0] + "_inactive");
}

/*Закрытие попапа*/
function closePopup(popup) {
  popup.classList.add("popup_inactive");
}

/* Проверка на нажатие Esc */
function escClosesPopup(popup) {
  document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "Escape") {
      closePopup(popup);
    }
  });
}
///////////////////////////////////////////////////////

/* Добавление стартовых карточек */
initialCards.forEach((element) => {
  addElementPrepend(element.name, element.link);
});

/*Открытие попапа редактирования данных*/
editButton.addEventListener("click", () => {
  openPopup(editBackground);
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
popupProfile.addEventListener("submit", function (save) {
  save.preventDefault();
  profileName.textContent = inputName.value;
  description.textContent = inputDesсription.value;
  closePopup(save.target.closest(".popup"));
});

/* Добавление новой карточки*/
popupCard.addEventListener("submit", function (create) {
  create.preventDefault();
  const cardName = inputCardName.value;
  const cardLink = inputCardLink.value;

  if (cardName !== "" || cardLink !== "") {
    addElementPrepend(cardName, cardLink);
  }
  closePopup(create.target.closest(".popup"));
  create.target.reset();
});

/* Закрытие попапа по клику вне окна*/
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
  escClosesPopup(popup);
});

/* Открытие изображения */
addCardButton.addEventListener("click", () => {
  openPopup(cardBackground);
});

/*Закрытие попапа по нажатию Esc*/
/* popups.forEach((popup) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePopup(popup);
    }
  });
}); */
/* escPressed(); */

////////////////////////////////////////////////////////////////////////////////////////////
/* ToDoList /*
/* Анимация масштабирования при добавлении новых карточек */
/* Анимация масштабирования окна папапа */
/* Анимация при открытии изображения */
///////////////////////////////////////////////////////////////////////////////////////////
