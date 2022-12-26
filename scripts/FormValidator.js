export class FormValidator {
  constructor(data, formToValidate) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._form = formToValidate;
    this._inputs = [...this._form.querySelectorAll(this._inputSelector)];
    this._button = this._form.querySelector(this._submitButtonSelector);
  }

  /* Убирание ошибки ввода */
  #hideInputError(error, input) {
    error.textContent = "";
    input.classList.remove(this._inputErrorClass);
  }

  /* Показ ошибки ввода */
  #showInputError(error, input) {
    error.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  /* Проверка правильности ввода */
  #checkInputValidity(input) {
    const error = document.querySelector(`#${input.id}-error`);

    if (input.validity.valid) {
      this.#hideInputError(error, input);
    } else {
      this.#showInputError(error, input);
    }
  }

  /* Отключение кнопки сабмита */
  disableSubmitButton() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.disabled = "disabled";
  }

  /* Переключение состояния кноаки сабмита*/
  #toggleButtonState() {
    const isFormValid = this._inputs.every((input) => input.validity.valid);
    if (isFormValid) {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    } else {
      this.disableSubmitButton();
    }
  }

  /* Установщик обработчиков */
  #setEventListeners(input) {
    input.addEventListener("input", () => {
      this.#checkInputValidity(input);
      this.#toggleButtonState();
    });
  }

  /* Включение валидации формы */
  enableValidation() {
    this._inputs.forEach((input) => {
      this.#setEventListeners(input);
    });
  }
}
