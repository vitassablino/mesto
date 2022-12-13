const config = {
  formSelector: ".popup-form",
  inputSelector: ".popup-form__input",
  submitButtonSelector: ".popup-form__save-button",
  inactiveButtonClass: "popup-form__save-button_disabled",
  inputErrorClass: "popup-form__input_wrong",
};

const checkInputValidity = (input, config) => {
  const error = document.querySelector(`#${input.id}-error`);

  if (input.validity.valid) {
    error.textContent = "";
    input.classList.remove(config.inputErrorClass);
  } else {
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
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
