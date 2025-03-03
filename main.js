const formButton = document.getElementById("form-btn");
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const successCard = document.getElementById("success-card");
const errorMessage = document.getElementById("error-message");
const cardContainer = document.getElementById("card");
const dismissButton = document.getElementById("dismiss-btn");
const userEmail = document.getElementById("user-email");

let email = emailInput.value.trim();

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function handleSubmit(e) {
  e.preventDefault();

  let email = emailInput.value.trim();

  if (!isValidEmail(email) || email === "") {
    errorMessage.style.display = "inline-block";
    emailInput.classList.toggle("error");
    return;
  } else {
    emailInput.value = "";
    cardContainer.style.display = "none";
    successCard.style.display = "flex";

    userEmail.textContent = email;
  }
}

form.addEventListener("submit", handleSubmit);

dismissButton.addEventListener("click", (e) => {
  e.preventDefault();

  cardContainer.style.display = "flex";
  successCard.style.display = "none";

  if (errorMessage.style.display === "inline-block") {
    errorMessage.style.display = "none";
    emailInput.classList.toggle("error");
  }
});
