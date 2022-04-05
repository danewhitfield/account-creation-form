const form = document.getElementById("signup-form");

const signupFirstname = document.getElementById("signup-firstname");
const invalidFirstname = document.getElementById("invalid-firstname");
let isFirstnameValid = false;

const signupLastname = document.getElementById("signup-lastname");
const invalidLastname = document.getElementById("invalid-lastname");
let isLastnameValid = false;

const signupUsername = document.getElementById("signup-username");
const invalidUsername = document.getElementById("invalid-username");
let isUsernameValid = false;

const emailAddress = document.getElementById("signup-email");
const invalidEmail = document.getElementById("invalid-email");
let isEmailValid = false;

const password = document.getElementById("signup-password");
const invalidPassword = document.getElementById("invalid-password");
let isPasswordValid = false;

const avatar = document.getElementById("signup-avatar");
const invalidAvatar = document.getElementById("invalid-avatar");
let isAvatarValid;

// const submitBtn = document.getElementById("singup-submit");
// submitBtn.innerText = "SUBMIT";

const nameRegex = /^[a-zA-Z]+$/;
const userNameRegex = /^\w+$/;
const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validImageType = ["png", "jpeg", "svg"];

form.addEventListener("submit", (e) => {
  if (
    isFirstnameValid &&
    isLastnameValid &&
    isUsernameValid &&
    isPasswordValid &&
    invalidAvatar.innerText.length === 0
  ) {
  } else {
    e.preventDefault();
  }
});

const validator = (el, pTag, isValid) => {
  el.addEventListener("keyup", (e) => {
    const lastname = e.target.value;
    if (lastname.length === 0) {
      //   el.classList.remove("invalid-input");
      //   el.classList.remove("valid-input");
      pTag.innerText = "";
    } else if (!nameRegex.test(lastname)) {
      pTag.innerText = "❌";
      setTimeout(() => {
        pTag.innerText = "";
      }, 5000);
      //   el.classList.add("invalid-input");
      //   el.classList.remove("valid-input");
      isValid = false;
    } else {
      //   el.classList.add("valid-input");
      //   el.classList.remove("invalid-input");
      pTag.innerText = "✅";
      isValid = true;
    }
  });
};
validator(signupFirstname, invalidFirstname, isFirstnameValid);
validator(signupLastname, invalidLastname, isLastnameValid);
validator(signupUsername, invalidUsername, isUsernameValid);
validator(emailAddress, invalidEmail, isEmailValid);
validator(password, invalidPassword, isPasswordValid);
validator(avatar, invalidAvatar, isAvatarValid);
