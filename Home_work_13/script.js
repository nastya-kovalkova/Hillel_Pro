const form = document.querySelector(".form");
const submitBtn = document.querySelector(".form__submit");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const nameField = document.querySelector('[name="name"]').value;
  const nameError = document.getElementById("nameError");
  if (!nameField.trim()) {
    nameError.textContent = "Name is required";
    nameError.classList.add("error--visible");
    isValid = false;
  } else {
    nameError.classList.remove("error--visible");
  }

  const messageField = document.querySelector('[name="message"]').value;
  const messageError = document.getElementById("messageError");
  if (messageField.length < 5) {
    messageError.textContent = "Message must be at least 5 characters";
    messageError.classList.add("error--visible");
    isValid = false;
  } else {
    messageError.classList.remove("error--visible");
  }

  const phoneField = document.querySelector('[name="phone"]').value;
  const phoneError = document.getElementById("phoneError");
  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phoneField)) {
    phoneError.textContent =
      "Phone number must start with +380 and be followed by 9 digits";
    phoneError.classList.add("error--visible");
    isValid = false;
  } else {
    phoneError.classList.remove("error--visible");
  }
  const emailField = document.querySelector('[name="email"]').value;
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailField)) {
    emailError.textContent = "Email must be valid";
    emailError.classList.add("error--visible");
    isValid = false;
  } else {
    emailError.classList.remove("error--visible");
  }

  if (isValid) {
    submitBtn.classList.remove("btn--none");
    console.log({
      name: nameField,
      message: messageField,
      phone: phoneField,
      email: emailField,
    });
  }
});
