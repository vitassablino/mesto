import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector(".popup-form")
    this._inputList = this._popupForm.querySelectorAll(".popup-form__input");
  }


  /* Сбор данных с полей формы */
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    });
    return this._formValues;
  }


  /* Установка слушателей */
  setEventListeners() {
    super.setEventListeners();

    /* Сабмит формы */
    this._popupForm.addEventListener("submit",  (evt) => {
      evt.preventDefault();
      /* console.log("111"); */
      this._handleSubmitForm(this._getInputValues());
      this.close()
    });
  }

  /* закрытие формы */
  close() {
    super.close();
    /* console.log(this._getInputValues());
    console.log(this._inputList); */
    this._popupForm.reset();
  }
}
