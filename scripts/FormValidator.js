export class FormValidator {
  constructor(data, formToValidate) {
    this.formSelector = data.formSelector;
    this.inputSelector = data.inputSelector;
    this.submitButtonSelector = data.submitButtonSelector;
    this.inactiveButtonClass = data.inactiveButtonClass;
    this.inputErrorClass = data.inputErrorClass;
    this.form = formToValidate;
  }

  /* Убирание ошибки ввода */
  #hideInputError (error, input) {
    error.textContent = "";
    input.classList.remove(this.inputErrorClass);
  };


  /* Показ ошибки ввода */
  #showInputError (error, input)  {
    error.textContent = input.validationMessage;
    input.classList.add(this.inputErrorClass);
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
  #toggleButton (inputs, button) {
    const isFormValid = inputs.every((input) => input.validity.valid);

    if (isFormValid) {
      button.classList.remove(this.inactiveButtonClass);
      button.disabled = "";
    } else {
      button.classList.add(this.inactiveButtonClass);
      button.disabled = "disabled";
    }
  };

  /* Включение валидации формы */
  enableValidation() {
    const inputs = [...this.form.querySelectorAll(this.inputSelector)];
    const button = this.form.querySelector(this.submitButtonSelector);
    inputs.forEach((input) => {
    input.addEventListener("input", () => {
      this.#checkInputValidity(input);
      this.#toggleButton(inputs, button);
      });
    });
  }
}
