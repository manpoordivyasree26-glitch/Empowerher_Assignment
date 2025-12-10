// footer.js
export function Footer() {
  return `
    <footer style="
      margin-top:24px;
      text-align:center;
      font-size:13px;
      color:#6b7280;
    ">
      © ${new Date().getFullYear()} Modular Todo App
    </footer>
  `;
}
