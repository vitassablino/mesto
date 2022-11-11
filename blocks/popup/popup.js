
let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close-button");
let background = document.querySelector(".popup__background");
let saveButton = document.querySelector(".popup__save-button");
let inputName = document.getElementById('name');
let name = document.querySelector(".profile__name");
let inputDesription = document.getElementById('description');
let description = document.querySelector(".profile__description");
let likes = document.querySelectorAll(".elements__like-button");



editButton.addEventListener("click", function (open) {
  open.preventDefault();
  background.classList.add("popup__background_active");  
  background.classList.remove("popup__background_inactive"); 
  popup.classList.remove("popup_inactive");
  popup.classList.add("popup_active");  
  inputName.value = name.innerText;
  inputDesription.value = description.innerText;
});

closeButton.addEventListener("click", function (close) {
  close.preventDefault();
  background.classList.add("popup__background_inactive"); 
  background.classList.remove("popup__background_active");   
  popup.classList.remove("popup_active");  
  popup.classList.add("popup_inactive");
});

saveButton.addEventListener("click", function (save) {
  save.preventDefault();
  name.innerText = inputName.value;
  description.innerText = inputDesription.value;
  background.classList.add("popup__background_inactive"); 
  background.classList.remove("popup__background_active"); 
  
  popup.classList.remove("popup_active");  
  popup.classList.add("popup_inactive");
});

likes.forEach((button) => {
  button.addEventListener("click", function (like) {
    like.preventDefault();
    button.classList.toggle("elements__like-button_active");
    button.classList.toggle("elements__like-button_inactive");
  })
});