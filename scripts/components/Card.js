export class Card {
  constructor(name, link, cardTemplate, handleCardClick) {
    this._cardName = name;
    this._cardLink = link;
    this._temlate = cardTemplate;
    this.handleCardClick = handleCardClick;
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
  #handleLikeClick() {
    this._like.classList.toggle("element__like-button_active");
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
