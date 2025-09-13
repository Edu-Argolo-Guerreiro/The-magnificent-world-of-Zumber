const toggleBtn = document.querySelector(".toggle-theme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark")
        ? "☀️ Modo Claro"
        : "🌙 Modo Escuro";
});