export class FormValidator {
  constructor(data, elementToValidate) {
    this.formSelector = data.formSelector;
    this.inputSelector = data.inputSelector;
    this.submitButtonSelector = data.submitButtonSelector;
    this.inactiveButtonClass = data.inactiveButtonClass;
    this.inputErrorClass = data.inputErrorClass;
    this.input = elementToValidate;
  }

  #hideInputError = (error, input) => {
    error.textContent = "";
    input.classList.remove(this.inputErrorClass);
  };

  #showInputError = (error, input) => {
    error.textContent = input.validationMessage;
    input.classList.add(this.inputErrorClass);
  };

  #checkInputValidity = (input) => {
    const error = document.querySelector(`#${input.id}-error`);

    if (input.validity.valid) {
      hideInputError(error, this.input);
    } else {
      showInputError(error, this.input);
    }
  };

  #toggleButton = (inputs, button, config) => {
    const isFormValid = inputs.every((input) => input.validity.valid);

    if (isFormValid) {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = "";
    } else {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = "disabled";
    }
  };

  enableValidation(elem) {
    const forms = [...document.querySelectorAll(data.formSelector)];

    forms.forEach((form) => {
      const inputs = [...form.querySelectorAll(data.inputSelector)];
      const button = form.querySelector(data.submitButtonSelector);

      inputs.forEach((input) => {
        input.addEventListener("input", () => {
          checkInputValidity(input, data);
          toggleButton(inputs, button, data);
        });
      });
    });
  }
}
