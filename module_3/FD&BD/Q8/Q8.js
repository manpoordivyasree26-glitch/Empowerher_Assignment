const TODO_KEY = "todos";

// ---------- Get Todos from Local Storage ----------
function getTodosFromStorage() {
  let data = localStorage.getItem(TODO_KEY);
  return data ? JSON.parse(data) : [];
}

// ---------- Save Todos ----------
function saveTodosToStorage(todos) {
  localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

// ---------- Fetch Todos (GET request) ----------
function fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let first20 = data.slice(0, 20);   // ✅ Only first 20
      saveTodosToStorage(first20);
      renderTodos();
    })
    .catch(function (err) {
      console.log("Error Fetching Data:", err);
      alert("Failed to fetch todos");
    });
}

// ---------- Render Todos ----------
function renderTodos() {
  let todos = getTodosFromStorage();
  let list = document.getElementById("todolist");
  let emptyMsg = document.getElementById("emptyMsg");

  list.innerHTML = "";

  if (todos.length === 0) {
    emptyMsg.style.display = "block";
    return;
  } else {
    emptyMsg.style.display = "none";
  }

  todos.forEach(function (todo, index) {
    let li = document.createElement("li");

    if (todo.completed === true) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <div>
        <div class="title">${todo.title}</div>
        <div class="status">Completed: <b>${todo.completed}</b></div>
      </div>
      <div>
        <button class="btn" onclick="toggleComplete(${index})">
          ${todo.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button class="btn btn-delete" onclick="deleteTodo(${index})">
          Delete
        </button>
      </div>
    `;

    list.appendChild(li);
  });
}

// ---------- Delete Todo ----------
function deleteTodo(index) {
  let todos = getTodosFromStorage();
  todos.splice(index, 1);
  saveTodosToStorage(todos);
  renderTodos();
}

// ---------- Toggle Complete ----------
function toggleComplete(index) {
  let todos = getTodosFromStorage();
  todos[index].completed = !todos[index].completed;
  saveTodosToStorage(todos);
  renderTodos();
}

// ---------- Event Listener ----------
document.getElementById("getBtn").addEventListener("click", fetchTodos);

// ---------- On Page Load ----------
renderTodos();
