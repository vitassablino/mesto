import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._bigImage = this._popup.querySelector(
      ".image-figure__big-image"
    );
    this._bigImageCaption = this._popup.querySelector(
      ".image-figure__figcaption"
    );
  }

  open(name, link) {    
    this._bigImage.src = link;
    this._bigImage.alt = `Изображение ${name}`;
    this._bigImageCaption.textContent = name;
    super.open();
    }
}
