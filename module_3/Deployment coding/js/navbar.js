// js/navbar.js
export function Navbar() {
  return `
    <nav style="
      background:#111827;
      color:white;
      padding:10px 16px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:16px;
      border-radius:6px;
    ">
      <div style="font-weight:bold;">Modular Todo App</div>
      <div style="display:flex; gap:10px; font-size:14px;">
        <a href="index.html" style="color:white; text-decoration:none;">Home</a>
        <a href="signup.html" style="color:white; text-decoration:none;">Signup</a>
        <a href="login.html" style="color:white; text-decoration:none;">Login</a>
        <a href="todos.html" style="color:white; text-decoration:none;">Todos</a>
      </div>
    </nav>
  `;
}
