const ROOM_IMAGES = {
<<<<<<< HEAD
  "linha-do-tempo": "./assets/home-room-01.svg",
  "consoles": "./assets/home-room-02.svg",
  "evolucao-grafica": "./assets/home-room-03.svg",
  "mundos-dos-jogos": "./assets/home-room-04.svg",
  "quiz": "./assets/home-room-05.svg",
  "por-dentro-do-console": "./assets/hardware-hero.svg",
  "pixel-quest": "./assets/home-room-06.svg"
};
const HERO_GAMES = [
  {name:"Super Mario Galaxy",image:"capa-mario.webp",alt:"Mario e Yoshi em cenário espacial colorido"},
  {name:"Sonic",image:"capa-sonic.webp",alt:"Sonic em uma cena cinematográfica azul"},
  {name:"Street Fighter V",image:"capa-street-fighter.webp",alt:"Personagens de Street Fighter V reunidos em arte promocional"},
  {name:"Metal Slug",image:"capa-metal-slug.webp",alt:"Arte de Metal Slug em pixel art com soldado e veículo"},
  {name:"Mortal Kombat",image:"capa-mortal-kombat.webp",alt:"Elenco clássico de Mortal Kombat"},
  {name:"Star Wars",image:"capa-star-wars.webp",alt:"Naves e tropas de Star Wars em batalha espacial"},
  {name:"Crash Bandicoot",image:"capa-crash.webp",alt:"Crash Bandicoot em ilustração colorida"},
  {name:"Mega Man X",image:"capa-mega-man.webp",alt:"Personagem Mega Man X em ilustração azul"}
];
const PERIODS = [
  { date:"01 · ENCANTAMENTO", title:"Descoberta", info:"Mundos coloridos e possibilidades inesperadas despertam a vontade de explorar.", image:"capa-mario.webp", secondary:"capa-crash.webp", hue:"#42DEFF", icon:"✦", feeling:"Imaginar" },
  { date:"02 · SUPERAÇÃO", title:"Desafio", info:"Cada tentativa carrega tensão, coragem e a alegria de conquistar o impossível.", image:"capa-street-fighter.webp", secondary:"capa-mortal-kombat.webp", hue:"#FF6899", icon:"⚔", feeling:"Superar" },
  { date:"03 · ENERGIA", title:"Velocidade", info:"Ritmo, intensidade e movimento fazem a tela parecer ganhar vida.", image:"capa-sonic.webp", secondary:"capa-mega-man.webp", hue:"#A68BFF", icon:"⚑", feeling:"Vibrar" },
  { date:"04 · AFETO", title:"Memória", info:"Momentos compartilhados, personagens inesquecíveis e histórias que ficam com a gente.", image:"capa-metal-slug.webp", secondary:"capa-star-wars.webp", hue:"#FFD447", icon:"♥", feeling:"Recordar" }
];
export function renderHome(rooms) {
  const cards = rooms.map((room, i) => {
    const accent = ["#48e6ff","#84b9ff","#ffda48","#ff64c3","#b979ff","#67eabd"][i % 6];
    const roomClass = room.slug === 'por-dentro-do-console' ? ' room-card--console-core' : '';
    const roomPill = room.slug === 'por-dentro-do-console' ? '<span class="room-mode-pill">HARDWARE LAB · 3D</span>' : '';
    return `
    <a class="room-card reveal${roomClass}" style="--delay:${(i*.07).toFixed(2)}s;--card-accent:${accent}" href="#/sala/${escapeHTML(room.slug)}">
      <div class="room-media">
        <img src="${ROOM_IMAGES[room.slug] || './assets/home-room-05.svg'}" alt="" width="960" height="500">
        <span class="room-number">SALA ${String(i + 1).padStart(2, '0')}</span>
        ${roomPill}
        <span class="room-icon" aria-hidden="true">→</span>
        <span class="room-spark" aria-hidden="true">✦</span>
      </div>
      <div class="room-body"><h3>${escapeHTML(room.title)}</h3><p>${escapeHTML(room.description)}</p>
        <span class="room-enter">${escapeHTML(room.slug === 'quiz' ? 'Começar o quiz' : room.slug === 'mundos-dos-jogos' ? 'Jogar agora' : room.action)} <span aria-hidden="true">→</span></span>
      </div>
    </a>`;
  }).join("");

  const eras = PERIODS.map((era, i) => `
      <button class="journey-era ${i === 0 ? 'is-current' : ''}" type="button" data-home-era="${i}" aria-pressed="${i === 0}" style="--era-accent:${era.hue}">
        <span class="journey-era-image"><img src="./assets/${era.image}" alt="Cena de jogo associada à sensação de ${era.title.toLowerCase()}" width="720" height="460"><span class="journey-mini-shot"><img src="./assets/${era.secondary}" alt="" loading="lazy"></span><span class="journey-era-overlay" aria-hidden="true"></span></span>
        <span class="journey-era-date">${era.date}</span><strong><span class="journey-card-icon">${era.icon}</span> ${era.title}</strong><span class="journey-era-desc">${era.info}</span><span class="journey-era-feeling">${era.feeling} <span aria-hidden="true">↗</span></span>
      </button>`).join("");

  return `
    <section class="hero section-shell hero-v5" id="inicio">
      <div class="hero-copy reveal is-revealed">
=======
  "linha-do-tempo": "./assets/room-timeline.svg",
  "consoles": "./assets/room-consoles.svg",
  "evolucao-grafica": "./assets/room-evolucao.jpg",
  "mundos-dos-jogos": "./assets/topgear-cover.jpg",
  "quiz": "./assets/room-quiz.svg",
  "pixel-quest": "./assets/room-pixel-quest.jpg"
};

export function renderHome(rooms) {
  const cards = rooms.map((room) => `
    <a class="room-card" href="#/sala/${escapeHTML(room.slug)}">
      <div class="room-media">
        <img src="${escapeHTML(ROOM_IMAGES[room.slug] || "./assets/room-quiz.svg")}" alt="" loading="lazy">
        <span class="room-number">${escapeHTML(room.number)}</span>
        <span class="room-icon" aria-hidden="true">${room.icon}</span>
      </div>
      <div class="room-body">
        <h3>${escapeHTML(room.title)}</h3>
        <p>${escapeHTML(room.description)}</p>
        <span class="room-enter">${escapeHTML(room.action)} <span aria-hidden="true">→</span></span>
      </div>
    </a>`).join("");

  return `
    <section class="hero section-shell" id="inicio">
      <div class="hero-copy">
>>>>>>> b28090f26a2ea0a8cbcb2d33ea038a6f161b5d9a
        <p class="eyebrow"><span class="status-dot"></span> MUSEU DIGITAL INTERATIVO</p>
        <h1>Uma história<br>feita de <span class="accent-text">pixels.</span></h1>
        <p class="hero-description">Da simplicidade dos primeiros jogos aos mundos tridimensionais. Explore as ideias, máquinas e revoluções que transformaram os videogames.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#/sala/linha-do-tempo"><span aria-hidden="true">▶</span> Explorar o museu</a>
          <a class="button button-quiet" href="#salas-home">Conhecer as salas <span aria-hidden="true">↓</span></a>
        </div>
<<<<<<< HEAD
        <div class="hero-meta"><span><i aria-hidden="true"></i> História e tecnologia</span><span><i aria-hidden="true"></i> Experiências interativas</span><span><i aria-hidden="true"></i> Para todas as gerações</span></div>
      </div>
      <div class="hero-art hero-gallery-art" aria-label="Galeria de oito imagens de videogames em uma tela de arcade iluminada">
        <span class="hero-electric-ray ray-one" aria-hidden="true"></span><span class="hero-electric-ray ray-two" aria-hidden="true"></span><span class="hero-electric-ray ray-three" aria-hidden="true"></span><span class="hero-electric-ray ray-four" aria-hidden="true"></span>
        <span class="hero-electric-spark spark-one" aria-hidden="true"></span><span class="hero-electric-spark spark-two" aria-hidden="true"></span><span class="hero-electric-spark spark-three" aria-hidden="true"></span><span class="hero-electric-spark spark-four" aria-hidden="true"></span>
        <span class="hero-particle particle-a" aria-hidden="true"></span><span class="hero-particle particle-b" aria-hidden="true"></span><span class="hero-particle particle-c" aria-hidden="true"></span><span class="hero-particle particle-d" aria-hidden="true"></span>
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
        <div class="art-panel" data-hero-panel>
          <div class="art-panel-top"><span>PIXEL ARCADE</span><span class="art-live"><i></i> ONLINE</span></div>
          <div class="art-screen art-screen--photo hero-screen-rotator" data-hero-rotator>
            ${HERO_GAMES.map((game,i)=>`<img class="hero-slide${i===0?' is-active':''}" src="./assets/${game.image}" alt="${game.alt}" width="660" height="400" data-hero-slide="${i}" ${i===0?'fetchpriority="high"':'loading="eager"'}>`).join('')}
            <span class="screen-label" data-hero-game-name>SUPER MARIO GALAXY</span><span class="screen-score" data-hero-count>01 / 08</span>
          </div>
          <div class="art-panel-bottom"><span>PRESS START <span class="blink-caret">▌</span></span><span class="equalizer" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></div>
          <div class="hero-slide-controls" role="group" aria-label="Escolher imagem de jogo">${HERO_GAMES.map((game,i)=>`<button class="hero-slide-dot${i===0?' is-active':''}" type="button" data-hero-go="${i}" aria-label="Mostrar ${game.name}" aria-pressed="${i===0}"></button>`).join('')}</div>
=======
        <div class="hero-meta"><span><i aria-hidden="true"></i> História e tecnologia</span><span><i aria-hidden="true"></i> Experiências interativas</span></div>
      </div>
      <div class="hero-art" role="img" aria-label="Tela de um fliperama exibindo uma cena de pixel art de Metal Slug">
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
        <div class="art-panel">
          <div class="art-panel-top"><span>PIXEL ARCADE</span><span class="art-live"><i></i> ONLINE</span></div>
          <div class="art-screen art-screen--photo"><img class="screen-photo" src="./assets/metal-slug.jpg" alt=""><span class="screen-label">PLAYER 01</span><span class="screen-score">000250</span></div>
          <div class="art-panel-bottom"><span>PRESS START</span><span class="equalizer" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></div>
>>>>>>> b28090f26a2ea0a8cbcb2d33ea038a6f161b5d9a
        </div>
        <div class="floating-chip chip-top"><span class="chip-icon">✳</span><span><small>ERA</small><strong>ARCADE</strong></span></div>
        <div class="floating-chip chip-bottom"><span class="chip-icon yellow">◆</span><span><small>LEVEL</small><strong>01 / START</strong></span></div>
        <div class="hero-grid" aria-hidden="true"></div>
      </div>
      <div class="hero-bottom-label"><span>01 — PRESS START</span><span>UMA VIAGEM PELA HISTÓRIA DOS GAMES</span></div>
    </section>
<<<<<<< HEAD
    <section class="intro-strip" aria-label="Temas do museu"><div><span class="strip-icon">▦</span><span>CONSOLES ICÔNICOS</span></div><div><span class="strip-icon">◈</span><span>EVOLUÇÃO GRÁFICA</span></div><div><span class="strip-icon">⌁</span><span>HISTÓRIAS E CURIOSIDADES</span></div><div><span class="strip-icon">✦</span><span>JOGUE E APRENDA</span></div></section>
    <section class="rooms-section section-shell" id="salas-home">
      <div class="section-heading reveal"><div><p class="eyebrow">EXPLORE AS SALAS</p><h2>Escolha uma sala<br>e mergulhe na <span class="accent-text">história.</span></h2></div><p class="section-lead">Seis experiências interativas para explorar diferentes eras, tecnologias e ideias que moldaram os videogames.</p></div>
      <div class="room-grid">${cards}</div>
    </section>
    <section class="journey-section section-shell senses-section" id="evolucao-home">
      <div class="journey-card reveal">
        <div class="journey-copy"><p class="eyebrow">GALERIA VIVA · ARTE, COR E EMOÇÃO</p><h2>Sinta a <span class="accent-text">arte</span><br>dos games.</h2>
          <p>Dos universos fantásticos às batalhas intensas, cada jogo tem uma estética que desperta algo diferente. Explore cores, movimento, lembranças e personagens que atravessam gerações.</p>
          <a class="button button-primary journey-action" href="#/sala/evolucao-grafica">Explorar a galeria <span aria-hidden="true">→</span></a>
          <p class="journey-insight"><span aria-hidden="true">✧</span> Arte é o que fica: aquele mundo, aquela música, aquela emoção.</p>
        </div>
        <div class="journey-gallery" aria-label="Galeria artística interativa com quatro sensações associadas aos videogames">
          <div class="journey-gallery-top"><span>QUATRO FORMAS DE SENTIR</span><span data-era-position>01 / 04</span></div>
          <div class="journey-eras" data-journey-eras>${eras}</div>
          <div class="senses-focus"><span class="senses-glow-ring" aria-hidden="true"></span><img src="./assets/senses-controller.svg" alt="" aria-hidden="true"><span>ARTE • MOVIMENTO • MEMÓRIA</span></div>
          <div class="senses-art-strip" aria-label="Outros universos e personagens dos jogos"><span>OUTROS UNIVERSOS</span><div>${['capa-star-wars.webp','capa-crash.webp','capa-mega-man.webp','capa-mortal-kombat.webp','outrun-cover.png','pacman-cover.png'].map((img,i)=>`<img src="./assets/${img}" alt="Referência visual de jogo ${i+1}" loading="lazy">`).join('')}</div></div>
          <div class="journey-controls">
            <button type="button" class="journey-arrow" data-journey-prev aria-label="Experiência anterior">←</button>
            <div class="journey-progress" aria-label="Selecionar experiência">${PERIODS.map((era,i)=>`<button type="button" class="journey-dot ${i===0?'is-current':''}" data-journey-dot="${i}" aria-label="${era.title}" aria-pressed="${i===0}" style="--era-accent:${era.hue}"></button>`).join('')}</div>
            <button type="button" class="journey-arrow" data-journey-next aria-label="Próxima experiência">→</button>
          </div>
          <p class="senses-credit">Imagens enviadas para o projeto e materiais do acervo · Direitos de personagens e artes pertencem aos respectivos titulares.</p>
        </div>
      </div>
    </section>
    <section class="about-section section-shell reveal about-rich" id="sobre">
      <div class="about-rich-top">
        <div class="about-copy"><p class="eyebrow">SOBRE O PROJETO · MEMÓRIA, ARTE E ENCONTRO</p>
          <h2>Guardar histórias.<br><span class="accent-text">Despertar sentimentos.</span></h2>
          <p>Há lembranças que começam com o som de um console ligando. Uma partida no sofá, alguém vibrando com uma vitória, uma música que continua na memória. O PIXEL nasce para celebrar essas histórias — e para descobrir como <strong>sensibilidade e estética</strong> nos ajudam a senti-las novamente.</p>
          <p>Mais que máquinas e datas, este museu apresenta encontros entre arte, tecnologia e pessoas. Cada cenário, cor, som e personagem pode ser uma porta para a imaginação e para a memória afetiva.</p>
          <div class="about-rich-actions"><a class="button button-primary" href="#/sala/evolucao-grafica">Conhecer as experiências →</a><a class="button button-quiet" href="#salas-home">Explorar as salas ↓</a></div>
        </div>
        <div class="about-rich-art about-memory-art" aria-label="Galeria afetiva de videogames clássicos e atuais">
          <div class="about-memory-halo" aria-hidden="true"></div>
          <div class="about-memory-photo about-memory-photo-main"><img src="./assets/mario-classic.png" alt="Imagem clássica de Super Mario Bros." loading="lazy"><span>ONDE TUDO COMEÇOU</span></div>
          <div class="about-memory-photo about-memory-photo-side"><img src="./assets/capa-mario.webp" alt="Mario e Yoshi em um mundo colorido" loading="lazy"><span>HISTÓRIAS QUE CONTINUAM</span></div>
          <div class="about-memory-note"><span aria-hidden="true">♥</span> As melhores memórias não precisam de continue.</div>
          <span class="about-art-particle ap1" aria-hidden="true">✦</span><span class="about-art-particle ap2" aria-hidden="true">◆</span><span class="about-art-particle ap3" aria-hidden="true">✧</span>
        </div>
      </div>
      <div class="about-rich-pills">
        <article><span class="about-pill-icon">✦</span><h3>Sensibilidade e estética</h3><p>A linguagem visual, o som e a composição dos jogos despertam percepção, sentimentos e reflexão.</p></article>
        <article><span class="about-pill-icon">♥</span><h3>Memória e cultura</h3><p>Vivências de infância, convivência e narrativas compartilhadas fazem parte da memória cultural.</p></article>
        <article><span class="about-pill-icon">◇</span><h3>Tecnologia e criação</h3><p>O desenvolvimento técnico abre novas possibilidades para artistas, designers e jogadores.</p></article>
        <article><span class="about-pill-icon">✥</span><h3>Educação e acesso</h3><p>Exploração livre, explicações acessíveis e experiências digitais aproximam gerações do conhecimento.</p></article>
      </div>
      <div class="about-method">
        <div><p class="eyebrow">ENTRE SENTIR, CRIAR E COMPARTILHAR</p><h3>A arte faz a memória ganhar vida.</h3><p>Esta proposta aproxima o museu das discussões da <strong>Atividade Integradora VI — Sensibilidade e Estética</strong>, valorizando artes visuais, mídias-arte, patrimônio cultural e educação dos sentidos. Sua apresentação acadêmica e uso em ações de extensão dependem da orientação da instituição.</p></div>
        <ol><li><strong>01 · Descobrir</strong><span>Conhecer os jogos e as pessoas por trás de suas histórias.</span></li><li><strong>02 · Imaginar</strong><span>Transformar lembranças, cores e movimentos em expressão artística.</span></li><li><strong>03 · Sentir</strong><span>Explorar emoções, estética e sensações ao jogar.</span></li><li><strong>04 · Compartilhar</strong><span>Conversar sobre experiências, memórias e descobertas.</span></li></ol>
      </div>
      <div class="about-bottom"><span>PIXEL · PATRIMÔNIO CULTURAL · SENSIBILIDADE · ESTÉTICA · TECNOLOGIA</span><strong>MAIS QUE JOGOS. MEMÓRIAS QUE NOS CONECTAM.</strong></div>
    </section>`;
}

export function initHome(root) {
  const setActiveEra = (index) => {
    const buttons = [...root.querySelectorAll('[data-home-era]')];
    if (!buttons.length) return;
    const selected = ((index % buttons.length) + buttons.length) % buttons.length;
    buttons.forEach((button, i) => {
      const on = i === selected;
      button.classList.toggle('is-current', on);
      button.setAttribute('aria-pressed', String(on));
    });
    root.querySelectorAll('[data-journey-dot]').forEach((dot, i) => {
      dot.classList.toggle('is-current', i === selected);
      dot.setAttribute('aria-pressed', String(i === selected));
    });
    const pos = root.querySelector('[data-era-position]');
    if (pos) pos.textContent = `${String(selected+1).padStart(2,'0')} / 04`;
  };
  const getActive = () => Math.max(0,[...root.querySelectorAll('[data-home-era]')].findIndex(el => el.classList.contains('is-current')));
  root.querySelectorAll('[data-home-era], [data-journey-dot]').forEach((btn) => btn.addEventListener('click', () => setActiveEra(Number(btn.dataset.homeEra ?? btn.dataset.journeyDot))));
  root.querySelector('[data-journey-prev]')?.addEventListener('click', () => setActiveEra(getActive()-1));
  root.querySelector('[data-journey-next]')?.addEventListener('click', () => setActiveEra(getActive()+1));
  // Galeria da capa: oito imagens reais enviadas pelo usuário, rotação automática com pausa e controle manual.
  const slides = [...root.querySelectorAll('[data-hero-slide]')];
  const selectors = [...root.querySelectorAll('[data-hero-go]')];
  const heroPanel = root.querySelector('[data-hero-panel]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let heroIndex = 0;
  let heroTimer = null;
  let isPaused = false;
  const showSlide = (nextIndex) => {
    if (!slides.length) return;
    heroIndex = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide,i) => {
      slide.classList.toggle('is-active', i === heroIndex);
      slide.setAttribute('aria-hidden', String(i !== heroIndex));
    });
    selectors.forEach((button,i)=>{
      button.classList.toggle('is-active', i === heroIndex);
      button.setAttribute('aria-pressed', String(i === heroIndex));
    });
    const name = root.querySelector('[data-hero-game-name]');
    const count = root.querySelector('[data-hero-count]');
    if (name) name.textContent = HERO_GAMES[heroIndex].name.toUpperCase();
    if (count) count.textContent = `${String(heroIndex+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
  };
  selectors.forEach((button) => button.addEventListener('click', () => showSlide(Number(button.dataset.heroGo))));
  const stopTimer = () => { if (heroTimer !== null) { window.clearInterval(heroTimer); heroTimer = null; } };
  const startTimer = () => {
    if (reducedMotion || isPaused || document.hidden || slides.length < 2 || heroTimer !== null) return;
    heroTimer = window.setInterval(() => showSlide(heroIndex + 1), 5100);
  };
  heroPanel?.addEventListener('mouseenter', () => { isPaused = true; stopTimer(); });
  heroPanel?.addEventListener('mouseleave', () => { isPaused = false; startTimer(); });
  heroPanel?.addEventListener('focusin', () => { isPaused = true; stopTimer(); });
  heroPanel?.addEventListener('focusout', (ev) => { if (!heroPanel.contains(ev.relatedTarget)) { isPaused = false; startTimer(); } });
  const visibilityHandler = () => { stopTimer(); startTimer(); };
  document.addEventListener('visibilitychange', visibilityHandler);
  const cleanupHero = () => { stopTimer(); document.removeEventListener('visibilitychange', visibilityHandler); };
  showSlide(0);
  startTimer();
  const elements = [...root.querySelectorAll('.reveal')];
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((element) => element.classList.add('is-revealed'));
    root.__homeCleanup = cleanupHero;
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
    });
  },{threshold: .08,rootMargin: '0px 0px 40px 0px'});
  elements.forEach((element) => observer.observe(element));
  // Renderizar uma nova tela não deve manter observadores ativos na página anterior.
  root.__homeCleanup = () => { observer.disconnect(); cleanupHero(); };
}
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
=======
    <section class="intro-strip" aria-label="Temas do museu">
      <div><span class="strip-icon">▦</span><span>CONSOLES ICÔNICOS</span></div><div><span class="strip-icon">◈</span><span>EVOLUÇÃO GRÁFICA</span></div><div><span class="strip-icon">⌁</span><span>HISTÓRIAS E CURIOSIDADES</span></div><div><span class="strip-icon">✦</span><span>JOGUE E APRENDA</span></div>
    </section>
    <section class="rooms-section section-shell" id="salas-home">
      <div class="section-heading"><div><p class="eyebrow">ESCOLHA SUA PRÓXIMA FASE</p><h2>Explore as <span class="accent-text">salas.</span></h2></div><p class="section-lead">Entre em cada sala para descobrir uma época, uma tecnologia ou uma ideia que mudou o jeito de jogar.</p></div>
      <div class="room-grid">${cards}</div>
    </section>
    <section class="journey-section section-shell">
      <div class="journey-card"><div class="journey-copy"><p class="eyebrow">NÃO É SÓ NOSTALGIA</p><h2>Entenda como<br>os jogos <span class="accent-text">evoluíram.</span></h2><p>Descubra como limitações técnicas inspiraram soluções criativas — e como cada geração abriu novas possibilidades para quem desenvolve e para quem joga.</p><a class="text-link" href="#/sala/linha-do-tempo">Começar a jornada <span aria-hidden="true">→</span></a></div>
      <div class="journey-stats"><div><strong>10</strong><span>CONSOLES EM DESTAQUE</span></div><div><strong>5+</strong><span>ERAS DOS VIDEOGAMES</span></div><div><strong>∞</strong><span>HISTÓRIAS PARA DESCOBRIR</span></div></div><div class="journey-decoration" aria-hidden="true">PIXEL<br><span>QUEST</span></div></div>
    </section>
    <section class="about-section section-shell" id="sobre"><div class="about-symbol" aria-hidden="true"><span>PX</span><i></i><i></i><i></i><i></i></div><div class="about-copy"><p class="eyebrow">SOBRE O PROJETO</p><h2>Preservar a história.<br><span class="accent-text">Inspirar o futuro.</span></h2><p>PIXEL é um projeto educacional independente que reúne história, tecnologia e experiências interativas para apresentar a evolução dos videogames de forma acessível e envolvente.</p></div><div class="about-note"><span class="note-line"></span><p>Projeto em desenvolvimento.<br>Conteúdo histórico acompanhado de referências e créditos.</p></div></section>`;
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
>>>>>>> b28090f26a2ea0a8cbcb2d33ea038a6f161b5d9a
}
