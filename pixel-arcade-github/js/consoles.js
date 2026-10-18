export function renderConsoleGallery(consoles) {
  const cards = consoles.map((consoleItem, index) => `
    <article class="console-card" data-console-card data-era="${escapeHTML(consoleItem.generation)}">
      <div class="console-art console-photo-wrap">
        <img class="console-photo" src="${escapeHTML(consoleItem.image.url)}" alt="${escapeHTML(consoleItem.image.alt)}" loading="lazy" decoding="async" onerror="this.closest('.console-art').classList.add('image-unavailable');this.hidden=true;this.nextElementSibling.hidden=false">
        <div class="console-image-fallback" hidden>Imagem indisponível no momento. <a href="${escapeHTML(consoleItem.image.sourceUrl)}" target="_blank" rel="noopener noreferrer">Abrir fonte</a></div>
        <span class="console-art-year">${escapeHTML(consoleItem.year)}</span>
      </div>
      <div class="console-card-copy">
        <p class="eyebrow">${escapeHTML(consoleItem.generation)} · ${escapeHTML(consoleItem.category)}</p>
        <h2>${escapeHTML(consoleItem.name)}</h2>
        <p>${escapeHTML(consoleItem.manufacturer)}</p>
        <button class="button button-primary console-open" type="button" data-console-open="${escapeHTML(consoleItem.id)}" aria-haspopup="dialog">Abrir ficha <span aria-hidden="true">↗</span></button>
      </div>
    </article>`).join("");

  return `
    <section class="room-page section-shell console-room">
      <a class="back-link" href="#/">← Voltar ao saguão</a>
      <header class="console-hero">
        <div class="console-hero-copy">
          <p class="eyebrow">ROOM 02 · COLEÇÃO HISTÓRICA</p>
          <h1>Galeria de consoles<span class="accent-text">.</span></h1>
          <p>De cartuchos e sprites a sistemas híbridos. Abra uma ficha para consultar contexto histórico, especificações documentadas, datas regionais e referências.</p>
        </div>
        <div class="console-hero-art" aria-hidden="true"><img src="./assets/room-consoles.svg" alt=""><span class="console-hero-chip"><small>COLEÇÃO</small><strong>${consoles.length} FICHAS</strong></span></div>
      </header>
      <div class="console-toolbar">
        <div class="console-field console-field--search">
          <label class="console-search-label" for="console-search">Pesquisar coleção</label>
          <div class="console-search-wrap"><span class="console-search-icon" aria-hidden="true">⌕</span><input id="console-search" class="console-search" type="search" placeholder="Nome, fabricante ou geração…" autocomplete="off"></div>
        </div>
        <div class="console-field"><label class="console-filter-label" for="console-generation">Geração</label><div class="console-select"><select id="console-generation" class="console-filter"><option value="">Todas as gerações</option>${[...new Set(consoles.map(item => item.generation))].sort().map(value => `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`).join("")}</select></div></div>
        <div class="console-field"><label class="console-filter-label" for="console-category">Tipo</label><div class="console-select"><select id="console-category" class="console-filter"><option value="">Todos os tipos</option>${[...new Set(consoles.map(item => item.category))].sort().map(value => `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`).join("")}</select></div></div>
        <div class="console-field"><label class="console-filter-label" for="console-manufacturer">Fabricante</label><div class="console-select"><select id="console-manufacturer" class="console-filter"><option value="">Todos os fabricantes</option>${[...new Set(consoles.map(item => item.manufacturer))].sort().map(value => `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`).join("")}</select></div></div>
        <p class="console-count" aria-live="polite"><strong data-console-count>${consoles.length}</strong> consoles catalogados</p>
      </div>
      <div class="console-grid" data-console-grid>${cards}</div>
      <p class="console-empty" data-console-empty hidden>Nenhum console corresponde à pesquisa. Tente outro nome ou fabricante.</p>
      <dialog class="console-dialog" data-console-dialog aria-labelledby="console-dialog-title">
        <div class="console-dialog-inner"><button class="console-dialog-close" type="button" data-console-close aria-label="Fechar ficha">×</button><div data-console-detail></div></div>
      </dialog>
    </section>`;
}

export function initConsoleGallery(root, consoles) {
  const search = root.querySelector("#console-search");
  const cards = [...root.querySelectorAll("[data-console-card]")];
  const count = root.querySelector("[data-console-count]");
  const empty = root.querySelector("[data-console-empty]");
  const dialog = root.querySelector("[data-console-dialog]");
  const detail = root.querySelector("[data-console-detail]");

  const generationFilter = root.querySelector("#console-generation");
  const categoryFilter = root.querySelector("#console-category");
  const manufacturerFilter = root.querySelector("#console-manufacturer");
  const applyFilters = () => {
    const query = search.value.trim().toLocaleLowerCase("pt-BR");
    const generation = generationFilter.value;
    const category = categoryFilter.value;
    const manufacturer = manufacturerFilter.value;
    let visible = 0;
    cards.forEach((card) => {
      const item = consoles.find(entry => entry.id === card.querySelector("[data-console-open]")?.dataset.consoleOpen);
      const matchesQuery = card.textContent.toLocaleLowerCase("pt-BR").includes(query);
      const matchesGeneration = !generation || item?.generation === generation;
      const matchesCategory = !category || item?.category === category;
      const matchesManufacturer = !manufacturer || item?.manufacturer === manufacturer;
      const match = matchesQuery && matchesGeneration && matchesCategory && matchesManufacturer;
      card.hidden = !match;
      if (match) visible++;
    });
    count.textContent = String(visible);
    empty.hidden = visible !== 0;
  };
  [search, generationFilter, categoryFilter, manufacturerFilter].forEach(control => control?.addEventListener(control.tagName === "INPUT" ? "input" : "change", applyFilters));

  root.querySelectorAll("[data-console-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = consoles.find((entry) => entry.id === button.dataset.consoleOpen);
      if (!item) return;
      detail.innerHTML = renderConsoleDetail(item);
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    });
  });
  root.querySelector("[data-console-close]")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function renderConsoleDetail(item) {
  const dates = (item.regionDates || []).map((entry) => `<li><strong>${escapeHTML(entry.region)}:</strong> ${escapeHTML(entry.date)}<p>${escapeHTML(entry.note)}</p></li>`).join("");
  const specs = Object.entries(item.hardware || {}).map(([key, value]) => `<div class="spec-row"><dt>${escapeHTML(specLabel(key))}</dt><dd>${escapeHTML(value)}</dd></div>`).join("");
  const games = (item.games || []).map((game) => `<li>${escapeHTML(game)}</li>`).join("");
  const sources = (item.sources || []).map((source) => `<li><a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.label)}</a><span>${escapeHTML(source.type)}</span></li>`).join("");
  return `<p class="eyebrow">FICHA HISTÓRICA · ${escapeHTML(item.year)}</p>
    <h2 id="console-dialog-title">${escapeHTML(item.name)}</h2>
    <p class="console-detail-meta">${escapeHTML(item.manufacturer)} · ${escapeHTML(item.generation)} · ${escapeHTML(item.category)}</p>
    <figure class="console-detail-photo"><img src="${escapeHTML(item.image.url)}" alt="${escapeHTML(item.image.alt)}" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><div class="console-image-fallback" hidden>Não foi possível carregar a fotografia externa. <a href="${escapeHTML(item.image.sourceUrl || item.image.url)}" target="_blank" rel="noopener noreferrer">Consultar arquivo/fonte</a></div><figcaption>${escapeHTML(item.image.credit)} · <a href="${escapeHTML(item.image.sourceUrl || item.image.url)}" target="_blank" rel="noopener noreferrer">Fonte, autoria e licença</a><span>${escapeHTML(item.image.license || 'Consulte a página original para confirmar autoria e licença.')}</span></figcaption></figure>
    <section class="detail-section"><h3>Contexto histórico</h3><p>${escapeHTML(item.context)}</p></section>
    <section class="detail-section"><h3>Datas de lançamento por região</h3><ul class="region-date-list">${dates}</ul></section>
    <section class="detail-section"><h3>Características técnicas</h3><dl class="spec-list">${specs}</dl></section>
    <section class="detail-section"><h3>Jogos representativos</h3><ul class="game-list">${games}</ul></section>
    <aside class="console-fact"><strong>Você sabia?</strong><p>${escapeHTML(item.fact)}</p></aside>
    <section class="detail-section"><h3>Fontes e referências</h3><p class="source-intro">Links externos para consulta. As fontes do fabricante são priorizadas; fontes especializadas são identificadas como tal.</p><ul class="source-list">${sources}</ul></section>
    <p class="console-rights-note">A imagem é uma fotografia do hardware. A autoria e as condições de reutilização estão indicadas na página original do arquivo, acessível pelo crédito acima.</p>`;
}

function specLabel(key) {
  return ({ cpu: "Processador", memory: "Memória", media: "Mídia", video: "Vídeo e gráficos" })[key] || key;
}
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
