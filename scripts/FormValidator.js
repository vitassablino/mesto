export class FormValidator {
  constructor(data, formToValidate) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._form = formToValidate;
  }

  /* Убирание ошибки ввода */
  #hideInputError (error, input) {
    error.textContent = "";
    input.classList.remove(this._inputErrorClass);
  };


  /* Показ ошибки ввода */
  #showInputError (error, input)  {
    error.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  };

  /* Проверка правильности ввода */
  #checkInputValidity (input) {
    const error = document.querySelector(`#${input.id}-error`);

    if (input.validity.valid) {
      this.#hideInputError(error, input);
    } else {
      this.#showInputError(error, input);
    }
  };

  /* Переключение состояния кноаки сабмита*/
  #toggleButtonState (inputs, button) {
    const isFormValid = inputs.every((input) => input.validity.valid);

    if (isFormValid) {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = "";
    } else {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = "disabled";
    }
  };

  /* Установщик обработчиков */
  #setEventListeners(input, inputs, button) {
    input.addEventListener("input", () => {
      this.#checkInputValidity(input);
      this.#toggleButtonState(inputs, button);
      });
  }

  /* Включение валидации формы */
  enableValidation() {
    const inputs = [...this._form.querySelectorAll(this._inputSelector)];
    const button = this._form.querySelector(this._submitButtonSelector);
    inputs.forEach((input) => {
    this.#setEventListeners(input, inputs, button);
    });
  }
}
