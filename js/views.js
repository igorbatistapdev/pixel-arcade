const ROOM_IMAGES = {
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
        <p class="eyebrow"><span class="status-dot"></span> MUSEU DIGITAL INTERATIVO</p>
        <h1>Uma história<br>feita de <span class="accent-text">pixels.</span></h1>
        <p class="hero-description">Da simplicidade dos primeiros jogos aos mundos tridimensionais. Explore as ideias, máquinas e revoluções que transformaram os videogames.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#/sala/linha-do-tempo"><span aria-hidden="true">▶</span> Explorar o museu</a>
          <a class="button button-quiet" href="#salas-home">Conhecer as salas <span aria-hidden="true">↓</span></a>
        </div>
        <div class="hero-meta"><span><i aria-hidden="true"></i> História e tecnologia</span><span><i aria-hidden="true"></i> Experiências interativas</span></div>
      </div>
      <div class="hero-art" role="img" aria-label="Tela de um fliperama exibindo uma cena de pixel art de Metal Slug">
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
        <div class="art-panel">
          <div class="art-panel-top"><span>PIXEL ARCADE</span><span class="art-live"><i></i> ONLINE</span></div>
          <div class="art-screen art-screen--photo"><img class="screen-photo" src="./assets/metal-slug.jpg" alt=""><span class="screen-label">PLAYER 01</span><span class="screen-score">000250</span></div>
          <div class="art-panel-bottom"><span>PRESS START</span><span class="equalizer" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></div>
        </div>
        <div class="floating-chip chip-top"><span class="chip-icon">✳</span><span><small>ERA</small><strong>ARCADE</strong></span></div>
        <div class="floating-chip chip-bottom"><span class="chip-icon yellow">◆</span><span><small>LEVEL</small><strong>01 / START</strong></span></div>
        <div class="hero-grid" aria-hidden="true"></div>
      </div>
      <div class="hero-bottom-label"><span>01 — PRESS START</span><span>UMA VIAGEM PELA HISTÓRIA DOS GAMES</span></div>
    </section>
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
}
