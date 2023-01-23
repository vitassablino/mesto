/* import { closeByEsc } from "../utils/utils.js"; */

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeButton = this._popupSelector.querySelector(
      ".popup__close-button"
    );
  }

  /* Закрытие по нажатию Esc */
  _handleEscClose = (event) => {
    const key = event.key;
    if (key === "Escape") {
      this.close();
    }
  };

  /* Открытие попапа */
  open() {
    this._popupSelector.classList.add("popup_active");
    document.addEventListener("keydown", this._handleEscClose);
  }

  /* Закрытие попапа */
  close() {
    this._popupSelector.classList.remove("popup_active");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    /* Закрытие по нажатию на крестик */
    this._closeButton.addEventListener("click", this.close.bind(this));
    /* Закрытие по клику вне окна */
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
