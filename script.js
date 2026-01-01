const email = document.getElementById("email");
const error = document.getElementById("error");
const button = document.querySelector(".continue");

email.addEventListener("input", () => {
  if (!email.value.includes("@")) {
    error.textContent = "Please enter a valid email address";
    button.disabled = true;
  } else {
    error.textContent = "";
    button.disabled = false;
  }
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  button.textContent = "Checking...";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = "Continue";
    error.textContent = "Login system not connected yet";
    button.disabled = false;
  }, 1500);
});
