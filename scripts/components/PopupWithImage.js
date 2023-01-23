import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(link, name) {
    this._link = link;
    this._name = name;
  }

  open() {
    this._popupSelector.src = this._link;
    this._popupSelector.name = this._name;
    this._popupSelector.textContent = this._name;
    this._popupSelector.classList.add("popup_active");
    document.addEventListener("keydown", this._handleEscClose);
  }
}
