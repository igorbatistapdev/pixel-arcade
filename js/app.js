import { initNavigation } from "./navigation.js";
import { renderHome, initHome } from "./views.js";
import { renderTimelineRoom, initTimeline } from "./timeline.js";
import { renderConsoleGallery, initConsoleGallery } from "./consoles.js";
import { renderGraphicsRoom, initGraphicsRoom } from "./graphics.js";
import { renderArcadeRoom, initArcadeRoom } from "./arcade.js";
import { renderQuizRoom, initQuizRoom } from "./quiz.js";
import { renderInsideConsoleRoom, initInsideConsoleRoom } from "./inside-console.js";

const view = document.querySelector("#app-view");
const nav = document.querySelector("#primary-nav");
let rooms = [];
let events = [];
let eras = [];
let consoles = [];
let graphicsData = null;
let quizData = null;
let quizCleanup = null;
let hardwareCleanup = null;

initNavigation();

async function loadData() {
  const [roomsResponse, eventsResponse, erasResponse, consolesResponse, graphicsResponse, quizResponse] = await Promise.all([
    fetch("./data/rooms.json"),
    fetch("./data/timeline-events.json"),
    fetch("./data/eras.json"),
    fetch("./data/consoles.json"),
    fetch("./data/graphics-evolution.json"),
    fetch("./data/quiz.json")
  ]);
  for (const response of [roomsResponse, eventsResponse, erasResponse, consolesResponse, graphicsResponse, quizResponse]) {
    if (!response.ok) throw new Error(`Falha ao carregar dados (${response.status}).`);
  }
  [rooms, events, eras, consoles, graphicsData, quizData] = await Promise.all([
    roomsResponse.json(), eventsResponse.json(), erasResponse.json(),
    consolesResponse.json(), graphicsResponse.json(), quizResponse.json()
  ]);
}

function currentRoute() {
  const hash = window.location.hash || "#/";
  // Âncora da própria página inicial: não é uma rota do museu.
  if (hash === "#salas-home") return { page: "home", scrollTarget: "salas-home" };
  if (hash === "#sobre") return { page: "home", scrollTarget: "sobre" };
  if (hash === "#memorias-home") return { page: "home", scrollTarget: "memorias-home" };
  if (hash === "#evolucao-home") return { page: "home", scrollTarget: "evolucao-home" };
  if (hash === "#" || hash === "#/") return { page: "home" };
  const match = hash.match(/^#\/sala\/([a-z0-9-]+)$/i);
  return match ? { page: "room", slug: match[1] } : { page: "not-found" };
}

function renderRoute() {
  const route = currentRoute();
  if (quizCleanup) { quizCleanup(); quizCleanup = null; }
  if (hardwareCleanup) { hardwareCleanup(); hardwareCleanup = null; }
  if (typeof view.__homeCleanup === "function") { view.__homeCleanup(); view.__homeCleanup = null; }
  if (route.page === "home") {
    view.innerHTML = renderHome(rooms);
    initHome(view);
  } else if (route.page === "room" && route.slug === "linha-do-tempo") {
    view.innerHTML = renderTimelineRoom(eras, events);
    initTimeline(view, events);
  } else if (route.page === "room" && route.slug === "consoles") {
    view.innerHTML = renderConsoleGallery(consoles);
    initConsoleGallery(view, consoles);
  } else if (route.page === "room" && route.slug === "evolucao-grafica") {
    view.innerHTML = renderGraphicsRoom(graphicsData);
    initGraphicsRoom(view, graphicsData);
  } else if (route.page === "room" && route.slug === "quiz") {
    view.innerHTML = renderQuizRoom();
    quizCleanup = initQuizRoom(view, quizData.questions);
  } else if (route.page === "room" && route.slug === "mundos-dos-jogos") {
    view.innerHTML = renderArcadeRoom();
    initArcadeRoom(view);
  } else if (route.page === "room" && (route.slug === "por-dentro-do-console" || route.slug === "pixel-quest")) {
    view.innerHTML = renderInsideConsoleRoom();
    hardwareCleanup = initInsideConsoleRoom(view);
  } else if (route.page === "room") {
    const room = rooms.find((item) => item.slug === route.slug);
    view.innerHTML = room ? renderRoomPage(room) : renderNotFound();
  } else {
    view.innerHTML = renderNotFound();
  }
  // Nota pedagógica sem interação adicional: preserva o comportamento de cada sala.
  if (route.page === "room") {
    const roomInfo = rooms.find(room => room.slug === route.slug);
    const question = roomInfo?.content?.reflection;
    if (question && route.slug !== "pixel-quest") {
      const note = document.createElement("aside");
      note.className = "room-reflection section-shell";
      note.setAttribute("aria-label", "Reflexão sobre sensibilidade e estética");
      const label = document.createElement("p"); label.className = "eyebrow"; label.textContent = "UM OLHAR PARA ALÉM DA TELA";
      const heading = document.createElement("h2"); heading.textContent = "Arte, tecnologia e sentimentos.";
      const prompt = document.createElement("p"); prompt.textContent = question;
      note.append(label, heading, prompt);
      view.append(note);
    }
  }
  document.title = route.page === "home" ? "PIXEL — Museu Interativo dos Videogames" :
    `${roomTitle(route.slug)} — PIXEL`;
  view.focus?.({ preventScroll: true });
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (route.scrollTarget) {
    document.getElementById(route.scrollTarget)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  } else {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }
}

function roomTitle(slug) {
  return rooms.find((room) => room.slug === slug)?.title || "Sala não encontrada";
}

function renderRoomPage(room) {
  if (room.slug === "consoles") {
    return `<section class="room-page section-shell"><p>Galeria indisponível.</p></section>`;
  }
  const content = room.content || {};
  const items = (content.bullets || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("");
  return `
    <section class="room-page section-shell">
      <a class="back-link" href="#/">← Voltar ao saguão</a>
      <p class="eyebrow">${escapeHTML(room.number)} · SALA TEMÁTICA</p>
      <div class="room-page-heading">
        <div><span class="room-page-icon" aria-hidden="true">${room.icon}</span>
          <h1>${escapeHTML(room.title)}<span class="accent-text">.</span></h1>
        </div>
        <p>${escapeHTML(room.description)}</p>
      </div>
      <div class="room-content-panel">
        <p class="eyebrow">EM DESENVOLVIMENTO</p>
        <h2>${escapeHTML(content.heading || "Esta sala faz parte da próxima etapa do museu.")}</h2>
        <p>${escapeHTML(content.text || "A estrutura de navegação já está ativa. O conteúdo detalhado será acrescentado em etapas, com referências verificáveis e créditos.")}</p>
        ${items ? `<ul class="feature-list">${items}</ul>` : ""}
        <div class="notice-box"><strong>Compromisso editorial</strong><p>Informações históricas serão acompanhadas de fontes. Quando uma data depender da região de lançamento ou ainda precisar de confirmação, isso será indicado explicitamente.</p></div>
        <a class="button button-primary" href="#/sala/linha-do-tempo">Explorar a linha do tempo <span aria-hidden="true">→</span></a>
      </div>
    </section>`;
}

function renderNotFound() {
  return `<section class="room-page section-shell"><p class="eyebrow">ERRO 404</p><h1>Sala não encontrada<span class="accent-text">.</span></h1><p>Esse caminho ainda não existe no museu.</p><a class="button button-primary" href="#/">Voltar ao início</a></section>`;
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

view.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-era-filter]");
  if (filter) {
    view.querySelectorAll("[data-era-filter]").forEach((button) => {
      const active = button === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const selected = filter.dataset.eraFilter;
    view.querySelectorAll("[data-event-era]").forEach((card) => {
      card.hidden = selected !== "all" && card.dataset.eventEra !== selected;
    });
  }
  const detailsButton = event.target.closest("[data-event-details]");
  if (detailsButton) {
    const card = detailsButton.closest(".timeline-card");
    const details = card?.querySelector(".timeline-detail");
    if (details) {
      const open = detailsButton.getAttribute("aria-expanded") === "true";
      detailsButton.setAttribute("aria-expanded", String(!open));
      details.hidden = open;
      detailsButton.innerHTML = open ? 'Ver contexto e fontes <span aria-hidden="true">＋</span>' : 'Ocultar contexto <span aria-hidden="true">−</span>';
    }
  }
});

window.addEventListener("hashchange", renderRoute);

loadData().then(renderRoute).catch((error) => {
  console.error(error);
  view.innerHTML = `<section class="room-page section-shell"><p class="eyebrow">FALHA AO CARREGAR</p><h1>O museu não iniciou<span class="accent-text">.</span></h1><p>Execute o projeto em um servidor local ou publicado por HTTP e confirme se os arquivos da pasta <code>data/</code> estão presentes.</p></section>`;
});
