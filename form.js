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

form.addEventListener("submit", (event) => {
  if (
    isFirstnameValid &&
    isLastnameValid &&
    isUsernameValid &&
    isPasswordValid &&
    invalidAvatar.innerText.length === 0
  ) {
  } else {
    event.preventDefault();
  }
  /* const firstName = event.target[0].value;
  const lastName = event.target[1].value;
  const username = event.target[2].value;
  const email = event.target[3].value;
  const password = event.target[4].value; */
});

signupFirstname.addEventListener("keyup", (e) => {
  const firstname = e.target.value;
  if (!nameRegex.test(firstname)) {
    invalidFirstname.innerText = "First name can only contain letters";
    signupFirstname.classList.add("invalid-input");
    signupFirstname.classList.remove("valid-input");
    isFirstnameValid = false;
  } else {
    signupFirstname.classList.add("valid-input");
    signupFirstname.classList.remove("invalid-input");
    invalidFirstname.innerText = "";
    isFirstnameValid = true;
  }
});

signupLastname.addEventListener("keyup", (e) => {
  const Lastname = e.target.value;
  if (!nameRegex.test(Lastname)) {
    invalidLastname.innerText = "Last name can only contain letters";
    signupLastname.classList.add("invalid-input");
    signupLastname.classList.remove("valid-input");
    isLastnameValid = false;
  } else {
    signupLastname.classList.add("valid-input");
    signupLastname.classList.remove("invalid-input");
    invalidLastname.innerText = "";
    isLastnameValid = true;
  }
});

signupUsername.addEventListener("keyup", (e) => {
  const username = e.target.value;
  if (!userNameRegex.test(username)) {
    invalidUsername.innerText =
      "User name can only contain letters, numbers and underscores.";
    signupUsername.classList.add("invalid-input");
    signupUsername.classList.remove("valid-input");
    isUsernameValid = false;
  } else {
    signupUsername.classList.add("valid-input");
    signupUsername.classList.remove("invalid-input");
    invalidUsername.innerText = "";
    isUsernameValid = true;
  }
});

emailAddress.addEventListener("keyup", (e) => {
  const email = e.target.value;
  if (!emailRegex.test(email)) {
    invalidEmail.innerText = "Please add valid email address";
    emailAddress.classList.add("invalid-input");
    emailAddress.classList.remove("valid-input");
    isEmailValid = false;
  } else {
    invalidEmail.innerText = "";
    emailAddress.classList.add("valid-input");
    emailAddress.classList.remove("invalid-input");
    isEmailValid = true;
  }
});

password.addEventListener("keyup", (e) => {
  const usersPassword = e.target.value;
  console.log("usersPassword:", usersPassword);
  if (!passwordRegex.test(usersPassword)) {
    invalidPassword.innerText =
      "Password must contain at least 8 characters, at least one number and both lower and uppercase letters and special characters";
    password.classList.add("invalid-input");
    password.classList.remove("valid-input");
    isPasswordValid = false;
  } else {
    invalidPassword.innerText = "";
    password.classList.add("valid-input");
    password.classList.remove("invalid-input");
    isPasswordValid = true;
  }
});

const validImageType = ["png", "jpeg", "svg"];
avatar.addEventListener("change", (e) => {
  const fileType = e.target.value;
  const split = fileType.split(".");
  console.log("split:", split);
  if (!validImageType.includes(split[1])) {
    invalidAvatar.innerText = "Please use .png, .jpeg or .svg file types";
    isAvatarValid = false;
  } else {
    invalidAvatar.innerText = "";
    isAvatarValid = true;
  }
});
