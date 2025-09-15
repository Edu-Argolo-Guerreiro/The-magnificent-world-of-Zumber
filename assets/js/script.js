const toggleBtn = document.querySelector(".toggle-theme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark")
        ? "☀️ Modo Claro"
        : "🌙 Modo Escuro";
});

const skillsInfo = {
    python: "Aprendi Python no curso XYZ, aplicando em análise de dados, automações e back-end.",
    java: "Java foi a base para aprender lógica forte e orientação a objetos.",
    javascript: "Com JavaScript desenvolvi interatividade para sites e aplicações web.",
    react: "React me permitiu criar interfaces modernas e reativas.",
    node: "Com Node.js construí APIs e automações rápidas.",
    docker: "Docker foi essencial para deploy e portabilidade de projetos.",
    postgres: "Aprendi PostgreSQL para modelagem e queries em sistemas reais.",
    git: "Git me deu organização e versionamento em equipe.",
    linux: "Linux me ajudou a trabalhar com servidores, scripts e segurança."
};

const modal = document.getElementById("skillModal");
const modalTitle = document.getElementById("skillTitle");
const modalText = document.getElementById("skillText");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const skill = card.getAttribute("data-skill");
        modalTitle.textContent = card.textContent;
        modalText.textContent = skillsInfo[skill];
        modal.style.display = "flex";
    });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }