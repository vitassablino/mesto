import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, handleSubmitForm) {
    super(popup);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector(".popup-form");
    this._inputList = this._popupForm.querySelectorAll(".popup-form__input");
    this._submiButton = this._popupForm.querySelector(
      ".popup-form__save-button"
    );
    this._submiButtonOriginalText = this._submiButton.textContent;
  }

  /* Сбор данных с полей формы */
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  /* Установка слушателей */
  setEventListeners() {
    super.setEventListeners();

    /* Сабмит формы */
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
  }

  /* закрытие формы */
  close() {
    super.close();
    this._popupForm.reset();
  }

  rendering(isLoading) {
    if (isLoading) {
      this._submiButton.textContent = "Сохранение";
    } else {
      this._submiButton.textContent = this._submiButtonOriginalText;
    }
  }
}
