import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, handleSubmitForm) {
    super(popup);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector(".popup-form");
    this._inputList = this._popupForm.querySelectorAll(".popup-form__input");
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
      this.close();
    });
  }

  /* закрытие формы */
  close() {
    super.close();
    this._popupForm.reset();
  }
}
