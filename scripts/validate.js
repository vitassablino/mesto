const config = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".popup-form__save-button",
  inactiveButtonClass: "popup-form__save-button_disabled",
  inputErrorClass: "popup-form__input_wrong",
};

const hideInputError = (error, input) => {
  error.textContent = "";
  input.classList.remove(config.inputErrorClass);
};

const showInputError = (error, input) => {
  error.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
};

const checkInputValidity = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`);

  if (input.validity.valid) {
    hideInputError(error, input);
  } else {
    showInputError(error, input);
  }
};

const toggleButton = (inputs, button, config) => {
  const isFormValid = inputs.every((input) => input.validity.valid);

  if (isFormValid) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = "";
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = "disabled";
  }
};

const enableValidation = (config) => {
  const forms = [...document.querySelectorAll(config.formSelector)];

  forms.forEach((form) => {
    const inputs = [...form.querySelectorAll(config.inputSelector)];
    const button = form.querySelector(config.submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(input, config);
        toggleButton(inputs, button, config);
      });
    });
  });
};

enableValidation(config);
