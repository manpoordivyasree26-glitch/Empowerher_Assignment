// js/displayTodos.js
export function displayTodos(data) {
  const list = document.getElementById("todolist");
  const emptyMsg = document.getElementById("emptyMsg");

  list.innerHTML = "";

  if (!data || data.length === 0) {
    emptyMsg.style.display = "block";
    return;
  } else {
    emptyMsg.style.display = "none";
  }

  data.forEach((todo) => {
    const li = document.createElement("li");

    if (todo.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <div>
        <div class="title">${todo.title}</div>
        <div class="status">Completed: <b>${todo.completed}</b></div>
      </div>
    `;

    list.appendChild(li);
  });
}
