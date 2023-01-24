import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._bigImage = this._popupSelector.querySelector(
      ".image-figure__big-image"
    );
    this._bigImageCaption = this._popupSelector.querySelector(
      ".image-figure__figcaption"
    );
  }

  open(link, name) {
    this._bigImage.src = link;
    this._bigImage.alt = `Изображение ${name}`;
    this._bigImageCaption.textContent = name;
    super.open();
  }
}
