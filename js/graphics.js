<<<<<<< HEAD
import { renderVisualCompare, initVisualCompare } from "./graphics-exhibit.js";
const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char]);

const VISUAL_VARIANTS = {
  pixels: "pixel",
  sprites: "sprite",
  "16bit": "sixteen",
  polygons: "polygon",
  modern: "modern"
};

const VISUAL_LABELS = {
  pixel: "Painel abstrato com pixels, blocos e contraste elevado.",
  sprite: "Painel abstrato com sprites, tiles e camadas laterais.",
  sixteen: "Painel abstrato com parallax, paleta expandida e energia arcade.",
  polygon: "Painel abstrato com formas 3D, wireframes e profundidade.",
  modern: "Painel abstrato com luz, paisagem urbana e sensação cinematográfica."
};

const CHANGE_MAP = {
  pixels: ["Formas mínimas e leitura instantânea.", "Poucos pixels definem personagem e ameaça.", "Contraste e repetição criam movimento."],
  sprites: ["Sprites e tiles deixam os mundos mais reconhecíveis.", "O scroll lateral dá ritmo à exploração.", "A cor começa a construir identidade visual."],
  "16bit": ["Mais cores e personagens maiores na tela.", "Parallax e composição deixam a cena mais viva.", "A arte passa a transmitir atitude e atmosfera."],
  polygons: ["A câmera móvel reorganiza a leitura do espaço.", "O 3D traz profundidade, volume e novos enquadramentos.", "Texturas e modelos definem uma nova linguagem."],
  modern: ["Luz, clima e materiais constroem imersão.", "Ambientes amplos reforçam sensação de mundo.", "A direção de arte mistura realismo, espetáculo e identidade."]
};

function variantFor(era) {
  return VISUAL_VARIANTS[era.id] || "modern";
}

function renderHeroEvolutionMural() {
  return `<div class="evo-mural" aria-hidden="true">
    <div class="evo-mural-orbit evo-mural-orbit-a"></div>
    <div class="evo-mural-orbit evo-mural-orbit-b"></div>
    <div class="evo-mural-grid"></div>
    <div class="evo-mural-track"></div>
    <article class="evo-mural-panel is-pixel"><span>PIXELS</span><div class="evo-mural-core"></div></article>
    <article class="evo-mural-panel is-sprite"><span>SPRITES</span><div class="evo-mural-core"></div></article>
    <article class="evo-mural-panel is-polygon"><span>3D</span><div class="evo-mural-core"></div></article>
    <article class="evo-mural-panel is-modern"><span>LUZ</span><div class="evo-mural-core"></div></article>
    <div class="evo-mural-particles">
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  </div>`;
}

function visualFor(era) {
  const type = variantFor(era);
  return `<div class="evo-art evo-art--${escapeHTML(type)}" role="img" aria-label="${escapeHTML(VISUAL_LABELS[type] || 'Painel abstrato original.')}" >
    <span class="evo-orb"></span>
    <span class="evo-shape evo-shape-a"></span>
    <span class="evo-shape evo-shape-b"></span>
    <span class="evo-shape evo-shape-c"></span>
    <span class="evo-shape evo-shape-d"></span>
    <span class="evo-art-caption">ARTE ABSTRATA ORIGINAL · ${escapeHTML(era.year)}</span>
  </div>`;
}

const gameLine = e => `<strong>${escapeHTML(e.featured.title)}</strong> · ${escapeHTML(e.featured.studio)} · ${escapeHTML(e.featured.platform)}`;
const renderShiftList = era => CHANGE_MAP[era.id].map(item => `<li>${escapeHTML(item)}</li>`).join("");

function renderEra(era, index) {
  const concepts = era.concepts.map(x => `<span class="evo-tag">${escapeHTML(x)}</span>`).join("");
  return `<article class="evo-era" data-evo-card="${escapeHTML(era.id)}">
    <div class="evo-era-index">0${index + 1}</div>
    <div class="evo-era-content">
      <div class="evo-era-meta"><span>${escapeHTML(era.year)}</span><span>${escapeHTML(era.label)}</span></div>
      <h3>${escapeHTML(era.title)}</h3>
      <p class="evo-game">${gameLine(era)}</p>
      <p>${escapeHTML(era.summary)}</p>
      <ul class="evo-shift-list">${renderShiftList(era)}</ul>
      <div class="evo-tags">${concepts}</div>
    </div>
    ${visualFor(era)}
  </article>`;
}

function renderSonicMilestone(item, sources) {
  const links = item.sourceIds.map(id => sources.find(s => s.id === id)).filter(Boolean).map(s => `<a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(s.name)} ↗</a>`).join("");
  const img = item.image ? `<figure class="sonic-shot"><img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.imageAlt)}" loading="lazy"></figure>` : "";
  return `<article class="sonic-milestone">${img}<span class="sonic-year">${escapeHTML(item.year)}</span><div><h4>${escapeHTML(item.title)}</h4><p class="sonic-platform">${escapeHTML(item.platform)}</p><p>${escapeHTML(item.description)}</p><details><summary>Fontes e notas</summary><div class="evo-source-links">${links}</div></details></div></article>`;
}

function renderSources(sources, ids) {
  return ids.map(id => sources.find(s => s.id === id)).filter(Boolean).map(s => `<li><a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(s.name)} ↗</a><span>${escapeHTML(s.type)} · ${escapeHTML(s.supports)}</span></li>`).join("");
}

export function renderGraphicsRoom(data) {
  const eras = data.eras;
  const allIds = [...new Set(eras.flatMap(e => e.sourceIds).concat(data.sonicMilestones.flatMap(x => x.sourceIds)))];
  return `<section class="graphics-room section-shell"><a class="back-link" href="#/">← Voltar ao saguão</a>
    <header class="evo-hero">
      <div class="evo-hero-copy">
        <p class="eyebrow">${escapeHTML(data.intro.eyebrow)}</p>
        <h1>Evolução <span class="accent-text">gráfica.</span></h1>
        <p>${escapeHTML(data.intro.description)}</p>
        <button class="button button-primary gv-hero-link" type="button" data-gv-scroll>Explorar a experiência →</button>
        <div class="evo-hero-badges"><span>PIXEL ART</span><span>SPRITES</span><span>16 BITS</span><span>3D</span><span>MUNDO ABERTO</span></div>
      </div>
      ${renderHeroEvolutionMural()}
    </header>
    ${renderVisualCompare()}
    <section class="evo-slider-lab" aria-labelledby="slider-title">
      <div class="section-heading">
        <div><p class="eyebrow">VIAGEM VISUAL INTERATIVA</p><h2 id="slider-title">Atravesse as <span class="accent-text">épocas.</span></h2></div>
        <p class="section-lead">Uma leitura mais minimalista: cada passo destaca o que mudou na forma de representar espaço, personagem, cor e atmosfera.</p>
      </div>
      <div class="evo-slider-stage" id="evo-slider-stage">
        ${visualFor(eras[0])}
        <div class="evo-slider-overlay">
          <span id="slider-year">${escapeHTML(eras[0].year)}</span>
          <h3 id="slider-title-live">${escapeHTML(eras[0].title)}</h3>
          <p class="evo-game" id="slider-game">${gameLine(eras[0])}</p>
          <p id="slider-summary">${escapeHTML(eras[0].summary)}</p>
          <ul class="evo-shift-list" id="slider-shifts">${renderShiftList(eras[0])}</ul>
          <div class="evo-tags" id="slider-tags">${eras[0].concepts.map(c => `<span class="evo-tag">${escapeHTML(c)}</span>`).join("")}</div>
        </div>
      </div>
      <label class="era-range-label" for="era-range"><span>PRIMEIROS PIXELS</span><span>GRÁFICOS MODERNOS</span></label>
      <input id="era-range" class="era-range" type="range" min="0" max="${eras.length - 1}" step="1" value="0" aria-describedby="range-help">
      <p id="range-help" class="range-help">Use as setas do teclado para navegar entre os períodos.</p>
      <div class="era-ticks">${eras.map((e, i) => `<button type="button" data-era-jump="${i}" class="era-tick${i === 0 ? ' is-active' : ''}"><span>${escapeHTML(e.year)}</span><strong>${escapeHTML(e.label)}</strong></button>`).join("")}</div>
    </section>
    <section class="evo-timeline-section">
      <div class="section-heading">
        <div><p class="eyebrow">MAPA HISTÓRICO</p><h2>O que mudou em cada <span class="accent-text">era?</span></h2></div>
        <p class="section-lead">Os cartões abaixo sintetizam cinco viradas visuais do game design, agora com um layout mais leve e coerente com o painel abstrato da abertura.</p>
      </div>
      <div class="evo-filter" role="group" aria-label="Filtrar era visual">
        ${eras.map((e) => `<button type="button" class="evo-filter-btn" data-evo-filter="${escapeHTML(e.id)}" aria-pressed="false">${escapeHTML(e.label)}</button>`).join("")}
        <button type="button" class="evo-filter-btn is-active" data-evo-filter="all" aria-pressed="true">Todas</button>
      </div>
      <div class="evo-timeline-list">${eras.map(renderEra).join("")}</div>
      <p class="evo-filter-status" aria-live="polite">Mostrando todas as 5 eras.</p>
    </section>
    <section class="sonic-section"><div class="sonic-section-heading"><div><p class="eyebrow">ESTUDO DE CASO</p><h2>Sonic: do pixel à <span class="accent-text">velocidade 3D.</span></h2><p>Uma mesma franquia permite observar como sprites, câmera, perspectiva e escala mudaram ao longo de três décadas.</p></div><a class="button button-quiet" href="https://sonic.sega.jp/SonicChannel/" target="_blank" rel="noopener noreferrer">Sonic Channel oficial ↗</a></div><div class="sonic-timeline">${data.sonicMilestones.map(x => renderSonicMilestone(x, data.sources)).join("")}</div>
      <div class="official-media-links"><p class="eyebrow">MATERIAIS DE REFERÊNCIA</p><h3>Mais imagens de Sonic</h3><p>Imagens: © SEGA, exibidas com finalidade educacional neste projeto acadêmico. Os links abaixo levam aos portais oficiais do titular.</p><div class="media-actions"><a class="button button-primary" href="https://sonic.sega.jp/SonicChannel/" target="_blank" rel="noopener noreferrer">Abrir Sonic Channel ↗</a><a class="button button-quiet" href="https://www.sega.com/" target="_blank" rel="noopener noreferrer">Portal SEGA ↗</a></div></div></section>
    <details class="evo-sources"><summary>Referências históricas, créditos e licenças</summary><ol>${renderSources(data.sources, allIds)}</ol><p class="source-caveat">Créditos e condições são específicos para cada arquivo. A existência de uma imagem em uma galeria pública não significa licença aberta. As imagens de Sonic pertencem à SEGA e são usadas aqui com finalidade educacional.</p></details>
  </section>`;
}

export function initGraphicsRoom(root, data) {
  initVisualCompare(root);

  const buttons = [...root.querySelectorAll('[data-evo-filter]')];
  const cards = [...root.querySelectorAll('[data-evo-card]')];
  const status = root.querySelector('.evo-filter-status');
  const filter = (id) => {
    buttons.forEach(b => {
      const on = b.dataset.evoFilter === id;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    let n = 0;
    cards.forEach(c => {
      c.hidden = id !== 'all' && c.dataset.evoCard !== id;
      if (!c.hidden) n++;
    });
    if (status) status.textContent = id === 'all' ? `Mostrando todas as ${n} eras.` : `Era em destaque: ${data.eras.find(e => e.id === id)?.label || id}.`;
  };
  buttons.forEach(b => b.addEventListener('click', () => filter(b.dataset.evoFilter)));

  const range = root.querySelector('#era-range');
  const stage = root.querySelector('#evo-slider-stage');
  const ticks = [...root.querySelectorAll('[data-era-jump]')];
  const showEra = (i) => {
    const e = data.eras[Number(i)];
    if (!e || !stage) return;
    range.value = String(i);
    stage.querySelector('.evo-art')?.remove();
    stage.insertAdjacentHTML('afterbegin', visualFor(e));
    root.querySelector('#slider-year').textContent = e.year;
    root.querySelector('#slider-title-live').textContent = e.title;
    root.querySelector('#slider-game').innerHTML = gameLine(e);
    root.querySelector('#slider-summary').textContent = e.summary;
    root.querySelector('#slider-shifts').innerHTML = renderShiftList(e);
    root.querySelector('#slider-tags').innerHTML = e.concepts.map(c => `<span class="evo-tag">${escapeHTML(c)}</span>`).join('');
    ticks.forEach((b, j) => {
      b.classList.toggle('is-active', j === Number(i));
      b.setAttribute('aria-current', j === Number(i) ? 'step' : 'false');
    });
  };
  range?.addEventListener('input', () => showEra(range.value));
  ticks.forEach(b => b.addEventListener('click', () => showEra(b.dataset.eraJump)));

  filter('all');
  showEra(0);
=======
const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char]);

function visualFor(era) {
  const type=typeof era==="string"?era:era.visual;
  if(era&&era.image)return `<div class="evo-art evo-art--photo" role="img" aria-label="${escapeHTML(era.imageAlt)}"><img src="${escapeHTML(era.image)}" alt="" loading="lazy" style="object-position:${escapeHTML(era.imagePos||"center")}"><span class="evo-art-caption">${escapeHTML(era.featured.caption)}</span></div>`;
  const labels={pixel:"Diagrama original de pixels e formas geométricas",sprite:"Diagrama original de sprites e blocos de cenário",sonic:"Diagrama abstrato de velocidade, anéis e cores; não é arte oficial",polygon:"Diagrama original de polígonos tridimensionais",modern:"Diagrama abstrato de ambiente urbano e luzes; não é captura de jogo"};
  return `<div class="evo-art evo-art--${escapeHTML(type)}" role="img" aria-label="${labels[type]||"Diagrama original"}"><span class="evo-orb"></span><span class="evo-shape evo-shape-a"></span><span class="evo-shape evo-shape-b"></span><span class="evo-shape evo-shape-c"></span><span class="evo-art-caption">PIXEL LAB / ARTE ESQUEMÁTICA ORIGINAL</span></div>`;
}
const gameLine=e=>`<strong>${escapeHTML(e.featured.title)}</strong> · ${escapeHTML(e.featured.studio)} · ${escapeHTML(e.featured.platform)}`;
function renderEra(era,index){const concepts=era.concepts.map(x=>`<span class="evo-tag">${escapeHTML(x)}</span>`).join("");return `<article class="evo-era" data-evo-card="${escapeHTML(era.id)}"><div class="evo-era-index">0${index+1}</div><div class="evo-era-content"><div class="evo-era-meta"><span>${escapeHTML(era.year)}</span><span>${escapeHTML(era.label)}</span></div><h3>${escapeHTML(era.title)}</h3><p class="evo-game">${gameLine(era)}</p><p>${escapeHTML(era.summary)}</p><div class="evo-tags">${concepts}</div></div>${visualFor(era)}</article>`;}
function renderSonicMilestone(item,sources){const links=item.sourceIds.map(id=>sources.find(s=>s.id===id)).filter(Boolean).map(s=>`<a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(s.name)} ↗</a>`).join("");const img=item.image?`<figure class="sonic-shot"><img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.imageAlt)}" loading="lazy"></figure>`:"";return `<article class="sonic-milestone">${img}<span class="sonic-year">${escapeHTML(item.year)}</span><div><h4>${escapeHTML(item.title)}</h4><p class="sonic-platform">${escapeHTML(item.platform)}</p><p>${escapeHTML(item.description)}</p><details><summary>Fontes e notas</summary><div class="evo-source-links">${links}</div></details></div></article>`;}
function renderSources(sources,ids){return ids.map(id=>sources.find(s=>s.id===id)).filter(Boolean).map(s=>`<li><a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(s.name)} ↗</a><span>${escapeHTML(s.type)} · ${escapeHTML(s.supports)}</span></li>`).join("");}

export function renderGraphicsRoom(data){
 const eras=data.eras;const allIds=[...new Set(eras.flatMap(e=>e.sourceIds).concat(data.sonicMilestones.flatMap(x=>x.sourceIds)))];
 const options=eras.map((e,i)=>`<option value="${i}">${escapeHTML(e.year)} · ${escapeHTML(e.label)}</option>`).join("");
 return `<section class="graphics-room section-shell"><a class="back-link" href="#/">← Voltar ao saguão</a>
 <header class="evo-hero"><div class="evo-hero-copy"><p class="eyebrow">${escapeHTML(data.intro.eyebrow)}</p><h1>${escapeHTML(data.intro.title)}</h1><p>${escapeHTML(data.intro.description)}</p><div class="evo-hero-badges"><span>PIXEL ART</span><span>SPRITES</span><span>16 BITS</span><span>3D</span><span>MUNDO ABERTO</span></div></div><div class="evo-hero-collage" aria-hidden="true">${eras.map(e=>`<figure><img src="${escapeHTML(e.image)}" alt="" style="object-position:${escapeHTML(e.imagePos||"center")}"><figcaption>${escapeHTML(e.featured.year)}</figcaption></figure>`).join("")}</div></header>
 <section class="evo-slider-lab" aria-labelledby="slider-title"><div class="section-heading"><div><p class="eyebrow">VIAGEM VISUAL INTERATIVA</p><h2 id="slider-title">Atravesse as <span class="accent-text">épocas.</span></h2></div><p class="section-lead">Mova o controle para mudar de período. Compare as técnicas, a intenção artística e os jogos representativos.</p></div>
 <div class="evo-slider-stage" id="evo-slider-stage">${visualFor(eras[0])}<div class="evo-slider-overlay"><span id="slider-year">${escapeHTML(eras[0].year)}</span><h3 id="slider-title-live">${escapeHTML(eras[0].title)}</h3><p class="evo-game" id="slider-game">${gameLine(eras[0])}</p><p id="slider-summary">${escapeHTML(eras[0].summary)}</p><div class="evo-tags" id="slider-tags">${eras[0].concepts.map(c=>`<span class="evo-tag">${escapeHTML(c)}</span>`).join("")}</div></div></div>
 <label class="era-range-label" for="era-range"><span>PRIMEIROS PIXELS</span><span>GRÁFICOS MODERNOS</span></label><input id="era-range" class="era-range" type="range" min="0" max="${eras.length-1}" step="1" value="0" aria-describedby="range-help"><p id="range-help" class="range-help">Use as setas do teclado para navegar entre os períodos.</p><div class="era-ticks">${eras.map((e,i)=>`<button type="button" data-era-jump="${i}" class="era-tick${i===0?' is-active':''}"><span>${escapeHTML(e.year)}</span><strong>${escapeHTML(e.label)}</strong></button>`).join("")}</div><p class="evo-credit">Imagens: arte de divulgação de Space Invaders, Super Mario Bros., Streets of Rage, Tomb Raider: Chronicles e Grand Theft Auto V, pertencentes aos respectivos titulares e exibidas com finalidade educacional.</p></section>
 <section class="evo-timeline-section"><div class="section-heading"><div><p class="eyebrow">MAPA HISTÓRICO</p><h2>O que mudou em cada <span class="accent-text">era?</span></h2></div><p class="section-lead">Abra cada etapa para entender as técnicas que ajudaram a definir a linguagem visual dos jogos.</p></div><div class="evo-filter" role="group" aria-label="Filtrar era visual">${eras.map((e,i)=>`<button type="button" class="evo-filter-btn${i===0?' is-active':''}" data-evo-filter="${escapeHTML(e.id)}" aria-pressed="${i===0}">${escapeHTML(e.label)}</button>`).join("")}<button type="button" class="evo-filter-btn" data-evo-filter="all" aria-pressed="false">Todas</button></div><div class="evo-timeline-list">${eras.map(renderEra).join("")}</div><p class="evo-filter-status" aria-live="polite">Mostrando todas as eras.</p></section>
 <section class="sonic-section"><div class="sonic-section-heading"><div><p class="eyebrow">ESTUDO DE CASO</p><h2>Sonic: do pixel à <span class="accent-text">velocidade 3D.</span></h2><p>Uma mesma franquia permite observar como sprites, câmera, perspectiva e escala mudaram ao longo de três décadas.</p></div><a class="button button-quiet" href="https://sonic.sega.jp/SonicChannel/" target="_blank" rel="noopener noreferrer">Sonic Channel oficial ↗</a></div><div class="sonic-timeline">${data.sonicMilestones.map(x=>renderSonicMilestone(x,data.sources)).join("")}</div>
  <div class="official-media-links"><p class="eyebrow">MATERIAIS DE REFERÊNCIA</p><h3>Mais imagens de Sonic</h3><p>Imagens: © SEGA, exibidas com finalidade educacional neste projeto acadêmico. Os links abaixo levam aos portais oficiais do titular.</p><div class="media-actions"><a class="button button-primary" href="https://sonic.sega.jp/SonicChannel/" target="_blank" rel="noopener noreferrer">Abrir Sonic Channel ↗</a><a class="button button-quiet" href="https://www.sega.com/" target="_blank" rel="noopener noreferrer">Portal SEGA ↗</a></div></div></section>
  <section class="evo-comparison"><div class="section-heading"><div><p class="eyebrow">COMPARAÇÃO INTERATIVA</p><h2>O que realmente <span class="accent-text">mudou?</span></h2></div><p class="section-lead">Compare objetivos visuais e técnicas, não apenas o número de polígonos.</p></div><div class="compare-controls"><label>Período A<select id="compare-a">${options}</select></label><span class="compare-vs">VS</span><label>Período B<select id="compare-b">${options}</select></label></div><div class="compare-result" aria-live="polite" id="compare-result"></div></section>
 <details class="evo-sources"><summary>Referências históricas, créditos e licenças</summary><ol>${renderSources(data.sources,allIds)}</ol><p class="source-caveat">Créditos e condições são específicos para cada arquivo. A existência de uma imagem em uma galeria pública não significa licença aberta. As imagens de Sonic pertencem à SEGA e são usadas aqui com finalidade educacional.</p></details></section>`;
}
export function initGraphicsRoom(root,data){
 const buttons=[...root.querySelectorAll('[data-evo-filter]')],cards=[...root.querySelectorAll('[data-evo-card]')],status=root.querySelector('.evo-filter-status');
 const filter=id=>{buttons.forEach(b=>{const on=b.dataset.evoFilter===id;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on));});let n=0;cards.forEach(c=>{c.hidden=id!=='all'&&c.dataset.evoCard!==id;if(!c.hidden)n++;});if(status)status.textContent=id==='all'?`Mostrando todas as ${n} eras.`:`Era em destaque: ${data.eras.find(e=>e.id===id)?.label||id}.`;};buttons.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.evoFilter)));
 const range=root.querySelector('#era-range'),stage=root.querySelector('#evo-slider-stage'),ticks=[...root.querySelectorAll('[data-era-jump]')];
 const showEra=i=>{const e=data.eras[Number(i)];if(!e)return;range.value=String(i);stage.querySelector('.evo-art')?.remove();stage.insertAdjacentHTML('afterbegin',visualFor(e));root.querySelector('#slider-year').textContent=e.year;root.querySelector('#slider-title-live').textContent=e.title;root.querySelector('#slider-game').innerHTML=gameLine(e);root.querySelector('#slider-summary').textContent=e.summary;root.querySelector('#slider-tags').innerHTML=e.concepts.map(c=>`<span class="evo-tag">${escapeHTML(c)}</span>`).join('');ticks.forEach((b,j)=>{b.classList.toggle('is-active',j===Number(i));b.setAttribute('aria-current',j===Number(i)?'step':'false');});};range.addEventListener('input',()=>showEra(range.value));ticks.forEach(b=>b.addEventListener('click',()=>showEra(b.dataset.eraJump)));
 const a=root.querySelector('#compare-a'),b=root.querySelector('#compare-b'),result=root.querySelector('#compare-result');a.value='1';b.value=String(data.eras.length-1);const compare=()=>{const left=data.eras[Number(a.value)],right=data.eras[Number(b.value)];const card=(e,label)=>`<article class="compare-card">${visualFor(e)}<span class="eyebrow">${label} · ${escapeHTML(e.year)}</span><h3>${escapeHTML(e.title)}</h3><p class="evo-game">${gameLine(e)}</p><p>${escapeHTML(e.summary)}</p><div class="evo-tags">${e.concepts.map(c=>`<span class="evo-tag">${escapeHTML(c)}</span>`).join('')}</div></article>`;result.innerHTML=card(left,'PERÍODO A')+card(right,'PERÍODO B');};a.addEventListener('change',compare);b.addEventListener('change',compare);showEra(0);compare();
>>>>>>> b28090f26a2ea0a8cbcb2d33ea038a6f161b5d9a
}
