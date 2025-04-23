// Tab switching
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabContents.forEach(tc => tc.classList.remove("active"));
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Style button click event
const styleButton = document.getElementById("styleButton");
styleButton.addEventListener("click", () => {
  styleButton.textContent = "You're Fabulous! 💅";
  styleButton.style.background = "#9c27b0";
});

// Keypress detection
document.addEventListener("keypress", (e) => {
  if (e.key === "f") {
    alert("F is for Fashion!");
  }
});

// Secret double-click
styleButton.addEventListener("dblclick", () => {
  alert("✨ Secret style unlocked!");
});

// Form validation
const form = document.getElementById("subscribeForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  feedback.textContent = "";

  if (!email.includes("@")) {
    e.preventDefault();
    feedback.textContent = "Please enter a valid email address.";
  } else if (password.length < 8) {
    e.preventDefault();
    feedback.textContent = "Password must be at least 8 characters.";
  }
});

// Real-time feedback
document.getElementById("password").addEventListener("input", function () {
  feedback.textContent = this.value.length < 8 ? "Password too short!" : "";
});
