const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMsg = document.querySelector("#fName-error");

const error = (el, msg = "") => {
  const inputControl = el.parentElement;
  const displayError = inputControl.querySelector(".error");

  displayError.innerText = msg;
  inputControl.classList.add("error");
};
const validate = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    error(firstName, "First Name cannot be empty");
    firstName.classList.add("input-error");
    firstName.style.borderColor = "hsl(0, 100%, 74%)";
    firstName.value = " ";
    firstName.addEventListener("input", () => {
      firstName.classList.remove("input-error");
      firstName.style.borderColor = "hsl(245, 28%, 84%)";
      error(firstName);
    });
  }
  if (lastNameValue === "") {
    error(lastName, "Last Name cannot be empty");
    lastName.style.borderColor = "hsl(0, 100%, 74%)";
    lastName.classList.add("input-error");
    lastName.value = " ";
    lastName.addEventListener("input", () => {
      lastName.classList.remove("input-error");
      lastName.style.borderColor = "hsl(245, 28%, 84%)";
      error(lastName);
    });
  }
  if (emailValue === "") {
    error(email, "Looks like this is not an email.");
    email.style.borderColor = "hsl(0, 100%, 74%)";
    email.classList.add("input-error");
    email.value = "email@example.com";
    email.style.color = "hsl(0, 100%, 74%)";
    email.addEventListener("focus", () => {
      email.value = " ";
      email.style.color = "black";

      email.addEventListener("input", () => {
        email.classList.remove("input-error");
        email.style.borderColor = "hsl(245, 28%, 84%)";
        error(email);
      });
    });
  }
  if (passwordValue === "") {
    error(password, "Password cannot be empty");
    password.style.borderColor = "hsl(0, 100%, 74%)";
    password.classList.add("input-error");
    password.style.color = "white";
    password.value = ` `;
    password.addEventListener("focus", () => {
      password.value = "";
      password.style.color = "black";
      password.addEventListener("input", () => {
        password.classList.remove("input-error");
        password.style.borderColor = "hsl(245, 28%, 84%)";
        error(password);
      });
    });
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});
