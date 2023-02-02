/* import { closeByEsc } from "../utils/utils.js"; */

export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._closeButton = this._popup.querySelector(
      ".popup__close-button"
    );
  }

  /* Закрытие по нажатию Esc */
  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

/* Закрытие по клику вне окна */
  _handleOverlayClick(evt) {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
  }

  /* Открытие попапа */
  open() {
    this._popup.classList.add("popup_active");
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }

  /* Закрытие попапа */
  close() {
    this._popup.classList.remove("popup_active");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  }

  setEventListeners() {
    /* Закрытие по нажатию на крестик */
   this._popup.querySelector(
      ".popup__close-button").addEventListener("click", this.close.bind(this));
    /* Закрытие по клику вне окна */
    this._popup.addEventListener("mousedown", this._handleOverlayClick.bind(this));
  }
}
