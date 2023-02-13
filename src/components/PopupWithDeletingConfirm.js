import Popup from "./Popup.js";

export default class PopupWithDeletingConfirm extends Popup {
  constructor(popup) {
    super(popup);
    this._popupForm = this._popup.querySelector(".popup-form");
    this._submitButton = this._popupForm.querySelector(
      ".popup-form__save-button"
    );
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  /* rendering(isLoading) {
    if (isLoading) {
      console.log(this._submitButton.textContent);
      this._submiButton.textContent = "Удаление";
    } else {
      this._submiButton.textContent = "Да";
    }
  } */
}
