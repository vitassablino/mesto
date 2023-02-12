export class Card {
  constructor(data, cardTemplate, handleCardClick, userId, api) {
    this._cardName = data.cardName;
    this._cardLink = data.cardLink;
    this._likes = data.likes;

    this._temlate = cardTemplate;
    this.handleCardClick = handleCardClick;

    this._api = api;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
  }

  /*Создание карточки*/
  createCard() {
    this._card = this._temlate.querySelector(".element").cloneNode(true);
    this._like = this._card.querySelector(".element__like-button");
    this._deleteButton = this._card.querySelector(".element__delete");
    this._image = this._card.querySelector(".element__image");
    this._label = this._card.querySelector(".element__label");
    this._label.textContent = this._cardName;
    this._image.setAttribute("src", this._cardLink);
    this._image.setAttribute("alt", this._cardName);
    this._cardLikeCount = this._card.querySelector(".element__like-counter");
    this._cardLikeCount.textContent = this._likes.length;

    if (!(this._ownerId === this._userId)) {
      this._deleteButton.style.display = "none";
    }
    if (this._likes.find((item) => this._userId === item._id)) {
      this._like.classList.add("element__like-button_active");
    }

    this.#setEventListeners();
    return this._card;
  }

  /* Установка слушателей */
  #setEventListeners() {
    this._like.addEventListener("click", () => {
      this.#handleLikeClick();
    });

    this._deleteButton.addEventListener("click", () => {
      this.#handleDeleteButtonClick();
    });

    this._image.addEventListener("click", () => {
      this.handleCardClick(this._cardName, this._cardLink);
    });
  }

  /*Обработчик нажатия на лайк */
  /*   #handleLikeClick() {
    this._like.classList.toggle("element__like-button_active");
  } */
  #handleLikeClick() {
    if (!this._like.classList.contains("element__like-button_active")) {
      this._api
        .like(this._id)
        .then((item) => {
          this._like.classList.add("element__like-button_active");
          this._cardLikeCount.textContent = item.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this._api
        .notLike(this._id)
        .then((item) => {
          this._like.classList.remove("element__like-button_active");
          this._cardLikeCount.textContent = item.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  /*Обработчик нажатия на корзину*/
  #handleDeleteButtonClick() {
    this._card.remove();
  }

  /*Закрытие по Esc*/
  /*  #handleCloseByEsc = (event) => {
    const key = event.key;
    if (key === "Escape") {
      const popup = document.querySelector(".popup_active");
      this._closeCard(popup, this.#handleCloseByEsc);
    }
  }; */
}
