const email = document.getElementById("email");
const password = document.getElementById("password");
const toggle = document.getElementById("toggle");
const error = document.getElementById("error");
const button = document.querySelector(".continue");
const spinner = document.querySelector(".spinner");
const text = document.querySelector(".btn-text");

/* SHOW / HIDE PASSWORD */
toggle.onclick = () => {
  if (password.type === "password") {
    password.type = "text";
    toggle.textContent = "Hide";
  } else {
    password.type = "password";
    toggle.textContent = "Show";
  }
};

/* VALIDATION */
function validate() {
  if (!email.value.includes("@")) {
    error.textContent = "Enter a valid email";
    button.disabled = true;
    return;
  }

  if (password.value.length < 6) {
    error.textContent = "Password must be at least 6 characters";
    button.disabled = true;
    return;
  }

  error.textContent = "";
  button.disabled = false;
}

email.oninput = validate;
password.oninput = validate;

/* SUBMIT */
document.getElementById("loginForm").onsubmit = e => {
  e.preventDefault();

  text.textContent = "Checking...";
  spinner.style.display = "block";
  button.disabled = true;

  setTimeout(() => {
    spinner.style.display = "none";
    text.textContent = "Continue";
    error.textContent = "Auth not connected yet";
    button.disabled = false;
  }, 1500);
};
