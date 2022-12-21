export class Card {
  constructor(name, link, cardTemplate, data) {
    this._cardName = name;
    this._cardLink = link;
    this._temlate = cardTemplate;
    this._imagePopup = data.imagePopup;
    this._bigImage = data.bigImage;
    this._bigImageCaption = data.bigImageCaption;
    this._openCard = data.openCard;
    this._closeCard = data.closeCard;
  }

  /*Создание карточки*/
  createCard() {
    this.card = this._temlate.querySelector(".element").cloneNode(true);
    this.like = this.card.querySelector(".element__like-button");
    this.deleteButton = this.card.querySelector(".element__delete");
    this.image = this.card.querySelector(".element__image");
    this.label = this.card.querySelector(".element__label");
    this.label.textContent = this._cardName;
    this.image.setAttribute("src", this._cardLink);
    this.image.setAttribute("alt", this._cardName);
    this.#setEventListeners();
    return this.card;
  }

  /* Установка слушателей */
  #setEventListeners() {
    this.like.addEventListener("click", () => {
      this.#handleLikeClick();
    });

    this.deleteButton.addEventListener("click", () => {
      this.#handleDeleteButtonClick();
    });

    this.image.addEventListener("click", () => {
      this.#handleImageClick(this._bigImage, this._bigImageCaption);
    });
  }

  /*Обработчик нажатия на лайк */
  #handleLikeClick() {
    this.like.classList.toggle("element__like-button_active");
  }

  /*Обработчик нажатия на корзину*/
  #handleDeleteButtonClick() {
    this.card.remove();
  }

  /*Обработчик нажатия на изображение*/
  #handleImageClick() {
    this._openCard(this._imagePopup, this.#handleCloseByEsc);
    this._bigImage.setAttribute("src", this._cardLink);
    this._bigImage.setAttribute("alt", this._cardName);
    this._bigImageCaption.textContent = this.label.textContent;
  }

  /*Закрытие по Esc*/
  #handleCloseByEsc = (event) => {
    const key = event.key;
    if (key === "Escape") {
      const popup = document.querySelector(".popup_active");
      this._closeCard(popup, this.#handleCloseByEsc);
    }
  };

  /* Добавление карточки */
  /* addCardPrepend(placeToAdd) {
    placeToAdd.prepend(this.createCard());
  } */
}
