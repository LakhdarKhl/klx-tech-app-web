// Portfolio data + UI interactions
const projects = [
  {
    title: "Activity Monitoring — KPIs Airbus",
    desc: "Dashboard Angular + .NET avec ApexCharts, ETL CSV → SQL Server, filtres temps/équipes.",
    img: "assets/placeholder.svg",
    tags: ["Angular", ".NET", "SQL Server"],
    link: "#"
  },
  {
    title: "ArxivApp — Tri intelligent de fichiers",
    desc: "Lecture dossier, analyse noms, tri automatique en sous‑dossiers thématiques.",
    img: "assets/placeholder.svg",
    tags: ["WPF", "C#", "NLP"],
    link: "#"
  },
  {
    title: "Tissea API",
    desc: "Node.js + Express + MongoDB avec Mongoose, endpoints CRUD propres, validation, JWT.",
    img: "assets/placeholder.svg",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "#"
  },
  {
    title: "Flashcards — LLM local",
    desc: "App perso hébergée en self‑host avec NAS, génération cartes + révision espacée.",
    img: "assets/placeholder.svg",
    tags: ["Python", "LLM", "SRS"],
    link: "#"
  }
];

function el(tag, attrs={}, children=[]) {
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v]) => {
    if(k === "class") e.className = v;
    else if(k === "html") e.innerHTML = v;
    else e.setAttribute(k, v);
  });
  children.forEach(c => e.appendChild(c));
  return e;
}

function renderProjects(list){
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = "";
  list.forEach(p => {
    const card = el("article", {class:"card"});
    const img = el("img", {src:p.img, alt:`Visuel du projet ${p.title}`});
    const h3  = el("h3", {html:p.title});
    const desc = el("p", {html:p.desc});
    const tags = el("div", {class:"tags"});
    p.tags.forEach(t => tags.appendChild(el("span", {class:"tag", html:t})));
    const link = el("a", {href:p.link || "#", class:"btn btn-ghost", target:"_blank", rel:"noopener", html:"Voir"});
    card.append(img, h3, desc, tags, link);
    grid.appendChild(card);
  });
}

function setupSearch(){
  const input = document.getElementById('search');
  input?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = projects.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.desc.toLowerCase().includes(q) || 
      p.tags.join(" ").toLowerCase().includes(q)
    );
    renderProjects(filtered);
  });
}

function setupTheme(){
  const root = document.documentElement;
  const key = "theme";
  const btn = document.getElementById("themeToggle");
  const saved = localStorage.getItem(key);
  if(saved){ root.classList.toggle("light", saved === "light"); }

  btn?.addEventListener("click", () => {
    const isLight = root.classList.toggle("light");
    localStorage.setItem(key, isLight ? "light" : "dark");
  });
}

function setYear(){
  const y = new Date().getFullYear();
  const span = document.getElementById("year");
  if(span) span.textContent = y;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projects);
  setupSearch();
  setupTheme();
  setYear();
});
