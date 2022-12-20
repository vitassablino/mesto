export class Card {
  constructor(name, link, cardTemplate, data) {
    this.cardName = name;
    this.cardLink = link;
    this.temlate = cardTemplate;
    this.imagePopup = data.imagePopup;
    this.bigImage = data.bigImage;
    this.bigImageCaption = data.bigImageCaption;
  }

  /*Создание карточки*/
  #createCard() {
    this.card = this.temlate.querySelector(".element").cloneNode(true);
    this.like = this.card.querySelector(".element__like-button");
    this.deleteButton = this.card.querySelector(".element__delete");
    this.image = this.card.querySelector(".element__image");
    this.label = this.card.querySelector(".element__label");
    this.label.textContent = this.cardName;
    this.image.setAttribute("src", this.cardLink);
    this.image.setAttribute("alt", this.cardName);
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
      this.#handleImageClick();
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
    this.#openCard(this.imagePopup);
    this.bigImage.setAttribute("src", this.cardLink);
    this.bigImage.setAttribute("alt", this.cardName);
    this.bigImageCaption.textContent = this.label.textContent;
  }

  /* Открытие большого изображения */
  #openCard(popup) {
    popup.classList.add("popup_active");
    document.addEventListener("keydown", this.#handleCloseByEsc);
  }

  /*Закрытие по Esc*/
  #handleCloseByEsc = (event) => {
    const key = event.key;
    if (key === "Escape") {
      const popup = document.querySelector(".popup_active");
      this.#closeCard(popup);
    }
  };

  /* Закрытие большого изображения */
  #closeCard(popup) {
    popup.classList.remove("popup_active");
    document.removeEventListener("keydown", this.#handleCloseByEsc);
  }

  /* Добавление карточки */
  addCardPrepend(placeToAdd) {
    placeToAdd.prepend(this.#createCard());
  }
}
