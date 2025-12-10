// js/todos.js
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
import { displayTodos } from "./displayTodos.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

// ---- Protect route: only logged in users ----
const loggedInUser = localStorage.getItem("loggedInUser");
if (!loggedInUser) {
  alert("Please login first to see todos.");
  window.location.href = "login.html";
}

// ---- Fetch todos on button click ----
const btn = document.getElementById("getBtn");

btn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
    .then((res) => res.json())
    .then((data) => {
      displayTodos(data); // use separate module
    })
    .catch((err) => {
      console.error("Error fetching todos:", err);
      alert("Failed to fetch todos");
    });
});
