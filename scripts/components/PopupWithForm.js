import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._profileName = document.querySelector(".profile__name");
    this._description = document.querySelector(".profile__description");
    this._inputName = this._popupSelector.querySelector(".input");
    /* this._inputDesсription = this._popupSelector.getElementById("description"); */
  }

  /* Сбор данных с полей формы */
  _getInputValues() {
    this._formValues = {
      inputName,
      inputDescription,
    };
    this._formValues.inputName = this._profileName.value;
    this._formValues.inputDescription = this._description.value;
    return this._formValues;
  }

  /* Установка слушателей */
  setEventListeners() {
    /* Закрытие по нажатию на крестик */
    this._closeButton.addEventListener("click", this.close.bind(this));
    /* Закрытие по клику вне окна */
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
    /* Сабмит формы */
    this._popupSelector.addEventListener("submit", function (evt) {
      evt.preventDefault();
      console.log("111");
      this._handleSubmitForm(this._getInputValues());
    });
  }

  /* закрытие формы */
  close() {
    super.close();
  }
}
