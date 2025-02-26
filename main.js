const formButton = document.getElementById("form-btn");
const form = document.getElementById("form");

function handleSubmit(e) {
  e.preventDefault();
  let answer = e.currentTarget;
  console.log(answer);
}

form.addEventListener("submit", handleSubmit);
