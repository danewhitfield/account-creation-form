const form = document.getElementById("signup-form");

const invalidFirstname = document.getElementById("invalid-firstname");
const invalidLastname = document.getElementById('invalid-lastname');

const signupFirstname = document.getElementById("signup-firstname");
const signupLastname = document.getElementById('signup-lastname');

const signupUsername = document.getElementById('signup-username');
const invalidUsername = document.getElementById('invalid-username');

const emailAddress = document.getElementById('signup-email');
const invalidEmail = document.getElementById('invalid-email');





const nameRegex = /^[a-zA-Z]+$/;
const userNameRegex = /^\w+$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = event.target[0].value;
  const lastName = event.target[1].value;
  const username = event.target[2].value;
  const email = event.target[3].value;
  const password = event.target[4].value;
});

signupFirstname.addEventListener("keyup", (e) => {
  const firstname = e.target.value;
  if (!nameRegex.test(firstname)) {
    invalidFirstname.innerText = "First name can only contain letters";
    signupFirstname.classList.add("invalid-input");
    signupFirstname.classList.remove("valid-input");
  } else {
    signupFirstname.classList.add("valid-input");
    signupFirstname.classList.remove("invalid-input");
  }
});

signupLastname.addEventListener("keyup", (e) => {
  const Lastname = e.target.value;
  if (!nameRegex.test(Lastname)) {
    invalidLastname.innerText = "Last name can only contain letters";
    signupLastname.classList.add("invalid-input");
    signupLastname.classList.remove("valid-input");
  } else {
    signupLastname.classList.add("valid-input");
    signupLastname.classList.remove("invalid-input");
  }
});

signupUsername.addEventListener("keyup", (e) => {
  const username = e.target.value;
  if (!userNameRegex.test(username)) {
    invalidUsername.innerText = "User name can only contain letters, numbers and underscores.";
    signupUsername.classList.add("invalid-input");
    signupUsername.classList.remove("valid-input");
  } else {
    signupUsername.classList.add("valid-input");
    signupUsername.classList.remove("invalid-input");
  }
});

emailAddress.addEventListener("keyup", (e) => {
  const email = e.target.value;
  if (!emailRegex.test(email)) {
    invalidEmail.innerText = "Please add valid email address";
    emailAddress.classList.add("invalid-input");
    emailAddress.classList.remove("valid-input");
  } else {
    emailAddress.classList.add("valid-input");
    emailAddress.classList.remove("invalid-input");
  }
});
