const ERA_COLORS = {
  pioneiros: ["84,230,255", "#54e6ff"],
  arcade: ["255,82,103", "#ff5267"],
  "8bit": ["255,212,71", "#ffd447"],
  "16bit": ["47,123,255", "#2f7bff"],
  "3d": ["181,123,255", "#b57bff"],
  moderna: ["79,211,161", "#4fd3a1"]
};
const colorOf = (era) => ERA_COLORS[era] || ERA_COLORS.pioneiros;

function artFor(event) {
  const id = String(event.id);
  const table = [
    ["tennis", "tl-tennis-for-two"], ["spacewar", "tl-spacewar"], ["pong", "tl-pong"],
    ["atari", "tl-atari-vcs"], ["family", "tl-family-computer"], ["famicom", "tl-family-computer"],
    ["game-boy", "tl-game-boy"], ["gameboy", "tl-game-boy"], ["playstation", "tl-playstation"], ["64", "tl-nintendo-64"]
  ];
  const hit = table.find(([key]) => id.includes(key));
  return `./assets/${hit ? hit[1] : "room-timeline"}.svg`;
}

export function renderTimelineRoom(eras, events) {
  const usedEras = eras.filter((era) => events.some((event) => event.era === era.id));
  const years = events.map((event) => Number(event.year));
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  const span = Math.max(1, maxYear - minYear);

  const filters = [
    `<button class="filter-chip is-active" type="button" data-era-filter="all" aria-pressed="true">Todas as eras</button>`,
    ...eras.map((era) => `<button class="filter-chip" type="button" style="--rgb:${colorOf(era.id)[0]}" data-era-filter="${escapeHTML(era.id)}" aria-pressed="false"><i aria-hidden="true"></i>${escapeHTML(era.label)}</button>`)
  ].join("");

  const ruler = events.map((event, index) => {
    const left = ((Number(event.year) - minYear) / span) * 100;
    return `<span class="tl-ruler-node ${index % 2 ? "is-low" : ""}" style="left:${left.toFixed(2)}%;--rgb:${colorOf(event.era)[0]};--delay:${(index * 0.18).toFixed(2)}s"><b>${escapeHTML(String(event.year))}</b><i></i></span>`;
  }).join("");

  const legend = usedEras.map((era) => `<span style="--rgb:${colorOf(era.id)[0]}"><i></i>${escapeHTML(era.label)}</span>`).join("");

  const items = events.map((event, index) => `
    <article class="tl-item" role="listitem" tabindex="0" aria-expanded="false" data-tl-index="${index}" data-event-era="${escapeHTML(event.era)}" style="--rgb:${colorOf(event.era)[0]}" aria-label="${escapeHTML(event.yearLabel || String(event.year))}: ${escapeHTML(event.title)}">
      <img class="tl-art" src="${escapeHTML(artFor(event))}" alt="" loading="lazy">
      <div class="tl-shade"></div>
      <div class="tl-collapsed"><span class="tl-dot" aria-hidden="true"></span><span class="tl-year-v">${escapeHTML(String(event.year))}</span></div>
      <div class="tl-open">
        <div class="tl-open-top"><span class="tl-tag">${escapeHTML(event.category)}</span><span class="tl-status">${escapeHTML(event.dateStatus)}</span></div>
        <span class="tl-year">${escapeHTML(event.yearLabel || String(event.year))}</span>
        <h3>${escapeHTML(event.title)}</h3>
        <p>${escapeHTML(event.summary)}</p>
        <span class="tl-more">Clique para abrir contexto e fontes <span aria-hidden="true">→</span></span>
      </div>
    </article>`).join("");

  return `
    <section class="timeline-page tl-page section-shell">
      <a class="back-link" href="#/">← Voltar ao saguão</a>
      <header class="tl-hero">
        <div class="tl-hero-copy">
          <p class="eyebrow">SALA 01 · ARQUIVO HISTÓRICO</p>
          <h1>Linha do <span class="accent-text">tempo.</span></h1>
          <p class="hero-description">Marcos selecionados da história dos videogames, organizados por era. Passe o mouse sobre cada marco para revelá-lo e clique para abrir o contexto e as fontes.</p>
          <div class="tl-stats">
            <div><strong>${events.length}</strong><span>MARCOS</span></div>
            <div><strong>${minYear}</strong><span>PRIMEIRO REGISTRO</span></div>
            <div><strong>${usedEras.length}</strong><span>ERAS</span></div>
          </div>
        </div>
        <div class="tl-hero-art" aria-hidden="true">
          <img class="tl-hero-clock" src="./assets/room-timeline.svg" alt="">
          <div class="tl-ruler"><span class="tl-ruler-line"></span>${ruler}</div>
          <div class="tl-legend">${legend}</div>
        </div>
      </header>
      <p class="tl-note"><strong>Como ler esta linha do tempo.</strong> As datas indicam o ano associado ao evento descrito pela fonte. Lançamentos comerciais podem variar por região; não trate o ano de um protótipo, estreia pública ou lançamento regional como se fossem o mesmo acontecimento.</p>
      <div class="timeline-controls"><span>FILTRAR POR ERA</span><div class="filter-list" role="group" aria-label="Filtrar eventos por era">${filters}</div></div>
      <div class="tl-rail" role="list">${items}</div>
      <p class="tl-rail-hint" aria-hidden="true"><span></span>Passe o mouse (ou toque) em um marco para expandi-lo</p>
      <div class="tl-detail" data-tl-detail hidden aria-live="polite"></div>
      <p class="timeline-end-note">Esta seleção é introdutória, não uma cronologia exaustiva. Novos marcos serão adicionados após verificação documental.</p>
    </section>`;
}

export function initTimeline(root, events) {
  const rail = root.querySelector(".tl-rail");
  const panel = root.querySelector("[data-tl-detail]");
  if (!rail || !panel) return;
  const items = [...rail.querySelectorAll(".tl-item")];
  let openIndex = -1;

  const activate = (item) => {
    items.forEach((other) => {
      const on = other === item;
      other.classList.toggle("is-active", on);
      other.setAttribute("aria-expanded", String(on));
    });
  };

  const close = () => { panel.hidden = true; panel.innerHTML = ""; openIndex = -1; items.forEach((i) => i.classList.remove("is-open")); };

  const open = (item) => {
    const index = Number(item.dataset.tlIndex);
    const event = events[index];
    if (!event) return;
    openIndex = index;
    items.forEach((i) => i.classList.toggle("is-open", i === item));
    panel.style.setProperty("--rgb", item.style.getPropertyValue("--rgb"));
    panel.innerHTML = `
      <figure class="tl-detail-art"><img src="${escapeHTML(artFor(event))}" alt=""><figcaption>${escapeHTML(event.yearLabel || String(event.year))}</figcaption></figure>
      <div class="tl-detail-body">
        <button class="tl-close" type="button" data-tl-close aria-label="Fechar detalhes">×</button>
        <div class="tl-open-top"><span class="tl-tag">${escapeHTML(event.category)}</span><span class="tl-status">${escapeHTML(event.dateStatus)}</span></div>
        <h2>${escapeHTML(event.title)}</h2>
        <p>${escapeHTML(event.context)}</p>
        <p class="date-note"><strong>Nota sobre a data:</strong> ${escapeHTML(event.dateNote)}</p>
        <div class="source-list"><strong>Fontes consultadas</strong>
          ${event.sources.map((source) => `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.name)} <span aria-hidden="true">↗</span></a>`).join("")}
        </div>
      </div>`;
    panel.hidden = false;
    panel.classList.remove("is-in");
    void panel.offsetWidth;
    panel.classList.add("is-in");
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => activate(item));
    item.addEventListener("focus", () => activate(item));
    item.addEventListener("click", () => { activate(item); open(item); });
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(item); open(item); }
    });
  });
  panel.addEventListener("click", (event) => { if (event.target.closest("[data-tl-close]")) close(); });

  root.querySelectorAll("[data-era-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      setTimeout(() => {
        const visible = items.filter((item) => !item.hidden);
        if (!visible.length) return;
        activate(visible[0]);
        if (openIndex >= 0 && items[openIndex].hidden) close();
      }, 0);
    });
  });

  activate(items[0]);
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}
