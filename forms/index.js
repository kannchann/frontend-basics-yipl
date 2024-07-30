const email = document.getElementById("email");
const password = document.getElementById("password");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

password.addEventListener("input", (event) => {
  if (password.validity.valueMissing) {
    password.setCustomValidity("I am expecting an email address!");
  } else {
    password.setCustomValidity("");
  }
});
