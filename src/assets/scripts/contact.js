//functions that reveals small text when something is typed

const nameInput = document.getElementById("name-input");
const surnameInput = document.getElementById("surname-input");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-input");

const nameInputWrapper = document.getElementById("name-input-wrapper");
const surnameInputWrapper = document.getElementById("surname-input-wrapper");
const emailInputWrapper = document.getElementById("email-input-wrapper");
const messageInputWrapper = document.getElementById("message-input-wrapper");

const smallTextWhileNameInput = document.querySelector(".name-while-input");
const smallTextWhileSurnameInput = document.querySelector(
  ".surname-while-input"
);
const smallTextWhileEmailInput = document.querySelector(".email-while-input");
const smallTextWhileMessageInput = document.querySelector(
  ".message-while-input"
);

nameInput.addEventListener("input", () => {
  if (nameInput.value.length === 0) {
    smallTextWhileNameInput.style.display = "none";
  } else {
    smallTextWhileNameInput.style.display = "block";
  }
});

surnameInput.addEventListener("input", () => {
  if (surnameInput.value.length === 0) {
    smallTextWhileSurnameInput.style.display = "none";
  } else {
    smallTextWhileSurnameInput.style.display = "block";
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.length === 0) {
    smallTextWhileEmailInput.style.display = "none";
  } else {
    smallTextWhileEmailInput.style.display = "block";
  }
});

messageInput.addEventListener("input", () => {
  if (messageInput.value.length === 0) {
    smallTextWhileMessageInput.style.display = "none";
  } else {
    smallTextWhileMessageInput.style.display = "block";
  }
});

//checkbox handler (css doesnt't support checkbox styling, so I added a png that will change on click)

const checkboxUnchecked = document.getElementById("checkbox-unfilled");
const checkboxChecked = document.getElementById("checkbox-filled");
let checkBoxStatus = "unchecked";

checkboxUnchecked.addEventListener("click", () => {
  checkBoxStatus = "checked";
  checkboxUnchecked.style.display = "none";
  checkboxChecked.style.display = "block";
});

checkboxChecked.addEventListener("click", () => {
  checkBoxStatus = "unchecked";
  checkboxChecked.style.display = "none";
  checkboxUnchecked.style.display = "block";
});

// form validation
const contactValidationText = document.querySelector(
  ".contact-validation-text"
);

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validateForm = () => {
  if (nameInput.value.trim() === "") {
    nameInputWrapper.style.border = "2px solid red";
    contactValidationText.style.color = "red";
    contactValidationText.textContent =
      "Polę z imieniem nie powinno być puste.";
    return false;
  }
  if (nameInput.value.trim() !== "") {
    nameInputWrapper.style.border = "none";
  }

  if (surnameInput.value.trim() === "") {
    surnameInputWrapper.style.border = "2px solid red";
    contactValidationText.textContent =
      "Polę z nazwiskiem nie powinno być puste.";
    contactValidationText.style.color = "red";
    return false;
  }
  if (surnameInput.value.trim() !== "") {
    surnameInputWrapper.style.border = "none";
  }

  if (emailInput.value === "" || !validateEmail(emailInput.value)) {
    emailInputWrapper.style.border = "2px solid red";
    contactValidationText.textContent = "Wprowadź mail poprawnie!";
    contactValidationText.style.color = "red";
    return false;
  }
  if (emailInput.value.trim() !== "") {
    emailInputWrapper.style.border = "none";
  }

  if (messageInput.value.trim() === "") {
    messageInputWrapper.style.border = "2px solid red";
    contactValidationText.textContent =
      "Treść wiadomości nie powinna być pusta.";
    contactValidationText.style.color = "red";
    return false;
  }
  if (messageInput.value.trim() !== "") {
    messageInputWrapper.style.border = "none";
  }

  if (checkBoxStatus === "unchecked") {
    contactValidationText.textContent = "Zgoda musi zostać zaakceptowana.";
    contactValidationText.style.color = "red";
    return false;
  }

  //if any case doesn't fulfil requirements code will stop before it reaches this lines

  contactValidationText.textContent = "Zgłoszenie wysłane!";
  contactValidationText.style.color = "green";
};
