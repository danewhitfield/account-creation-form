const form = document.getElementById("signup-form");
const invalidFirstname = document.getElementsByClassName("invalid-firstname");
const singupFirstname = document.getElementById("signup-firstname");
console.log("singupFirstname:", singupFirstname);

const nameRegex = /^[a-zA-Z]$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = event.target[0].value;
  const lastName = event.target[1].value;
  const username = event.target[2].value;
  const email = event.target[3].value;
  const password = event.target[4].value;
});

singupFirstname.addEventListener("keyup", (e) => {
  const firstname = e.target.value;
  if (!nameRegex.test(firstname)) {
    invalidFirstname.innerText = "First name can only contain letters";
    singupFirstname.classList.add("invalid-input");
    singupFirstname.classList.remove("valid-input");
  } else {
    singupFirstname.classList.add("valid-input");
    singupFirstname.classList.remove("invalid-input");
  }
});
