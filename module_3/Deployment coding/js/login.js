// js/login.js
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

const form = document.getElementById("login-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    alert("No user found. Please signup first.");
    return;
  }

  const user = JSON.parse(storedUser);

  if (user.email === email && user.password === password) {
    // mark as logged in
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Login successful!");
    window.location.href = "todos.html";
  } else {
    alert("Invalid email or password");
  }
});
