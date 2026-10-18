const ROOM_IMAGES = {
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
const ROOM_ART = {
  "linha-do-tempo": {image:"home-room-01.svg",detail:"era-space-invaders.jpg",short:"ORIGENS & MEMÓRIA"},
  "consoles": {image:"home-room-02.svg",detail:"room-consoles.svg",short:"MÁQUINAS QUE MARCAM"},
  "evolucao-grafica": {image:"home-room-03.svg",detail:"capa-mario.webp",short:"DO PIXEL AO 3D"},
  "mundos-dos-jogos": {image:"home-room-04.svg",detail:"pacman-cover.png",short:"PRESS START"},
  "quiz": {image:"home-room-05.svg",detail:"item-star.png",short:"DESAFIE SEU SABER"},
  "por-dentro-do-console": {image:"hardware-hero.svg",detail:"home-room-06.svg",short:"CIÊNCIA & CRIAÇÃO"}
};
const MEMORY_STORIES = {
  convivencia: {
    title:"As amizades também fazem parte do jogo.",label:"CONVIVÊNCIA · RELAÇÕES HUMANAS",color:"#36e7b0",icon:"♧",image:"contemporaneo-fortnite.webp",
    alt:"Jogadores em um cenário de Fortnite, evocando encontros e partidas compartilhadas",
    text:"Jogos em equipe, conversas e descobertas compartilhadas fazem parte da cultura contemporânea. Em diferentes comunidades, jogar também pode significar criar vínculos e guardar histórias com outras pessoas.",
    quote:"Às vezes, o mais importante de uma partida não é vencer, mas lembrar de quem estava jogando ao seu lado.",href:"#/sala/mundos-dos-jogos",action:"Explorar o PIXEL Arcade"
  },
  nostalgia: {
    title:"Uma lembrança pode ganhar novas cores.",label:"NOSTALGIA · MEMÓRIA AFETIVA",color:"#ff7cba",icon:"♥",image:"contemporaneo-mario.webp",
    alt:"Mario envolvido por uma atmosfera azul luminosa",
    text:"Uma música, um personagem ou uma tela familiar pode aproximar gerações. Mesmo quando os gráficos mudam, as emoções associadas ao jogo podem permanecer em nossa memória.",
    quote:"Ao revisitar um universo conhecido, também reencontramos um pouco de quem fomos.",href:"#/sala/linha-do-tempo",action:"Viajar pela história"
  },
  descoberta: {
    title:"Imaginar também é uma forma de conhecer.",label:"DESCOBERTA · IMAGINAÇÃO",color:"#32d8ff",icon:"✦",image:"contemporaneo-zelda.webp",
    alt:"Personagem de fantasia em um jardim claro e luminoso",
    text:"Paisagens, cores e mundos de fantasia despertam curiosidade e admiração. A arte digital convida cada pessoa a interpretar o que vê e criar seus próprios significados.",
    quote:"Um mundo desconhecido pode nos ensinar novas maneiras de olhar para o conhecido.",href:"#/sala/evolucao-grafica",action:"Descobrir a evolução gráfica"
  },
  superacao: {
    title:"Aprendemos enquanto seguimos em frente.",label:"SUPERAÇÃO · APRENDIZAGEM",color:"#ffd447",icon:"★",image:"contemporaneo-god-of-war.webp",
    alt:"Dois viajantes diante de uma paisagem montanhosa e nevada",
    text:"A persistência pode aparecer em um desafio, em uma jornada ou em uma relação de cuidado. Narrativas e mecânicas nos convidam a pensar sobre mudança, coragem e amadurecimento.",
    quote:"Cada jornada também pode transformar a forma como compreendemos a nós mesmos.",href:"#/sala/quiz",action:"Encarar o quiz histórico"
  }
};
const MEMORY_CHOICES = [
  {id:"descoberta",icon:"✧",title:"Descoberta",subtitle:"Algo me surpreendeu"},
  {id:"nostalgia",icon:"♥",title:"Nostalgia",subtitle:"Uma fase da minha vida"},
  {id:"convivencia",icon:"♧",title:"Convivência",subtitle:"Pessoas ao meu lado"},
  {id:"superacao",icon:"★",title:"Superação",subtitle:"Insistir e aprender"}
];
const PERIODS = [
  { date:"01 · ENCANTAMENTO", title:"Descoberta", info:"Cores intensas e universos surpreendentes mostram como o imaginário pode ganhar movimento.", image:"contemporaneo-pokemon.webp", secondary:"capa-crash.webp", hue:"#42DEFF", icon:"✦", feeling:"Imaginar" },
  { date:"02 · SUPERAÇÃO", title:"Desafio", info:"Confrontos, gestos e contrastes expressam tensão, coragem e a emoção da conquista.", image:"contemporaneo-mortal-kombat.webp", secondary:"capa-street-fighter.webp", hue:"#FF6899", icon:"⚔", feeling:"Superar" },
  { date:"03 · ENERGIA", title:"Velocidade", info:"Ritmo, movimento e cor criam uma sensação de impulso que ultrapassa os limites da tela.", image:"contemporaneo-sonic.webp", secondary:"outrun-cover.png", hue:"#A68BFF", icon:"⚑", feeling:"Vibrar" },
  { date:"04 · AFETO", title:"Memória", info:"Imagens familiares e encontros marcantes transformam partidas em histórias para lembrar.", image:"capa-metal-slug.webp", secondary:"mario-classic.png", hue:"#FFD447", icon:"♥", feeling:"Recordar" }
];
const CONTEMPORARY_FEATURES = [
  {id:"hollow",game:"Hollow Knight",theme:"ATMOSFERA & SILÊNCIO",headline:"O silêncio também conta histórias.",summary:"Luz azulada, sombras e formas delicadas criam uma atmosfera de mistério, solidão e encantamento.",question:"Como uma imagem silenciosa consegue transmitir tanta emoção?",image:"contemporaneo-hollow-knight.webp",alt:"Cenário azul noturno e luminoso de Hollow Knight",color:"#56dcff",symbol:"✧",size:"lead",room:"#/sala/evolucao-grafica"},
  {id:"horizon",game:"Horizon Zero Dawn",theme:"NATUREZA & CONTEMPLAÇÃO",headline:"Mundos para observar.",summary:"A natureza exuberante e as máquinas gigantescas constroem contrastes entre o orgânico e o tecnológico.",question:"O que faz uma paisagem virtual parecer viva?",image:"contemporaneo-horizon.webp",alt:"Paisagem verde e máquinas ao longe em Horizon Zero Dawn",color:"#70e9ac",symbol:"❋",size:"wide",room:"#/sala/por-dentro-do-console"},
  {id:"cyberpunk",game:"Cyberpunk 2077",theme:"CIDADE & IDENTIDADE",headline:"A cidade como linguagem.",summary:"Arquitetura, publicidade e luzes de neon transformam o cenário urbano em identidade estética.",question:"Como as cores alteram nossa percepção de um ambiente?",image:"contemporaneo-cyberpunk.webp",alt:"Cidade futurista à noite iluminada por luzes neon com automóvel",color:"#ce8bff",symbol:"⌁",size:"wide",room:"#/sala/evolucao-grafica"},
  {id:"spider",game:"Marvel’s Spider-Man",theme:"MOVIMENTO & CINEMA",headline:"A força de um instante.",summary:"Composição, perspectiva e enquadramento sugerem velocidade e ação mesmo em uma imagem imóvel.",question:"Como a fotografia de um jogo pode sugerir movimento?",image:"contemporaneo-spider-man.webp",alt:"Herói mascarado vermelho em pose acrobática entre prédios",color:"#ff819e",symbol:"↗",size:"standard",room:"#/sala/evolucao-grafica"},
  {id:"last",game:"The Last of Us",theme:"AFETO & NARRATIVA",headline:"Há emoção nos pequenos gestos.",summary:"Uma pessoa tocando violão na floresta mostra que silêncio, música e intimidade também são narrativa.",question:"O que um gesto pode comunicar sem palavras?",image:"contemporaneo-the-last-of-us.webp",alt:"Pessoa tocando violão sentada na floresta sob um feixe de luz",color:"#ffd18d",symbol:"♥",size:"standard",room:"#/sala/mundos-dos-jogos"},
  {id:"minecraft",game:"Minecraft",theme:"CRIAÇÃO & IMAGINAÇÃO",headline:"Construir é uma forma de expressão.",summary:"Blocos e formas simples se transformam em ambientes inventados, compartilhados e únicos.",question:"Uma experiência precisa ser realista para emocionar?",image:"contemporaneo-minecraft.webp",alt:"Personagens geométricos em um cenário de blocos de Minecraft",color:"#9fe087",symbol:"◇",size:"standard",room:"#/sala/linha-do-tempo"}
];
const CONTEMPORARY_MORE = [
  {id:"ghost",game:"Ghost of Tsushima",theme:"A PAISAGEM COMO POESIA",headline:"O ritmo da contemplação.",summary:"Luz, natureza e composição criam uma pausa visual que convida a observar o cenário.",question:"Que emoções uma paisagem pode despertar?",image:"contemporaneo-ghost-tsushima.webp",alt:"Caminho iluminado em uma floresta de bambu",color:"#e9c67f",symbol:"❋",room:"#/sala/evolucao-grafica"},
  {id:"assassins",game:"Assassin’s Creed",theme:"HISTÓRIA & REPRESENTAÇÃO",headline:"Vestígios de outros tempos.",summary:"Figurinos, símbolos e ambientações recriam visões ficcionais do passado e evocam diferentes épocas.",question:"Como os jogos reinventam nossa imagem da história?",image:"contemporaneo-assassins-creed.webp",alt:"Grupo de protagonistas com trajes de diferentes épocas de Assassin’s Creed",color:"#d9e1f2",symbol:"◈",room:"#/sala/linha-do-tempo"},
  {id:"halo",game:"Halo",theme:"ESCALA & FICÇÃO CIENTÍFICA",headline:"O extraordinário ganha escala.",summary:"Armaduras, arquitetura e cenários grandiosos constroem uma ficção científica monumental.",question:"Como o tamanho dos elementos muda o que sentimos?",image:"contemporaneo-halo.webp",alt:"Soldado de armadura em ambiente de ficção científica de Halo",color:"#80c9e6",symbol:"✳",room:"#/sala/por-dentro-do-console"},
  {id:"reddead",game:"Red Dead Redemption",theme:"JORNADA & MEMÓRIA",headline:"A força de uma silhueta.",summary:"O horizonte vermelho e figuras em contraluz sintetizam um universo de travessia e despedida.",question:"Quanta história pode existir em uma imagem simples?",image:"contemporaneo-red-dead.webp",alt:"Silhuetas de cavaleiros diante de um pôr do sol vermelho",color:"#ff927a",symbol:"☼",room:"#/sala/evolucao-grafica"},
  {id:"resident",game:"Resident Evil",theme:"TENSÃO & CONTRASTE",headline:"A imagem também provoca medo.",summary:"Sombras, fotografia e contraste entre personagens expressam tensão e vulnerabilidade.",question:"Como a iluminação transforma a atmosfera?",image:"contemporaneo-resident-evil.webp",alt:"Personagens de Resident Evil em composição dramática em preto e branco",color:"#e9b2c0",symbol:"◐",room:"#/sala/evolucao-grafica"},
  {id:"hogwarts",game:"Hogwarts Legacy",theme:"FANTASIA & IMAGINÁRIO",headline:"Arquiteturas do impossível.",summary:"Castelos, névoa e luz sugerem mistério e permitem imaginar mundos além do cotidiano.",question:"Como um cenário desperta vontade de explorar?",image:"contemporaneo-hogwarts.webp",alt:"Castelo de fantasia envolto em névoa sob iluminação dourada",color:"#f6c894",symbol:"✦",room:"#/sala/evolucao-grafica"}
];
const CONTEMPORARY_ALL = [...CONTEMPORARY_FEATURES,...CONTEMPORARY_MORE];
export function renderHome(rooms) {
  const cards = rooms.map((room, i) => {
    const accent = ["#48e6ff","#84b9ff","#ffda48","#ff64c3","#b979ff","#67eabd"][i % 6];
    const roomClass = room.slug === 'por-dentro-do-console' ? ' room-card--console-core' : '';
    const roomPill = room.slug === 'por-dentro-do-console' ? '<span class="room-mode-pill">LAB · 3D</span>' : '';
    const art = ROOM_ART[room.slug] || ROOM_ART.quiz;
    return `
    <a class="room-card reveal${roomClass}" style="--delay:${(i*.07).toFixed(2)}s;--card-accent:${accent}" href="#/sala/${escapeHTML(room.slug)}">
      <div class="room-media room-media-cinematic">
        <span class="room-image-backdrop" aria-hidden="true"></span>
        <img class="room-art-main" src="./assets/${art.image}" alt="" width="960" height="500" loading="lazy">
        <span class="room-art-polaroid" aria-hidden="true"><img src="./assets/${art.detail}" alt="" loading="lazy"></span>
        <span class="room-number">${String(i + 1).padStart(2,'0')} / 06</span>
        ${roomPill}
        <span class="room-icon" aria-hidden="true">↗</span>
        <span class="room-spark" aria-hidden="true">✦</span>
      </div>
      <div class="room-body"><span class="room-kicker">${art.short}</span><h3>${escapeHTML(room.title)}</h3><p>${escapeHTML(room.description)}</p>
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
    <div class="home-cinematic">
    <section class="hero section-shell hero-v5" id="inicio">
      <div class="hero-copy reveal is-revealed">
        <p class="eyebrow"><span class="status-dot"></span> TECNOLOGIA · ARTE · CULTURA · MEMÓRIA</p>
        <h1>Uma história<br>feita de <span class="accent-text">pixels.</span></h1>
        <p class="hero-description">Mais que tecnologia: os videogames são arte, cultura e memória. Explore como imagens, sons e experiências compartilhadas despertam emoções e conectam gerações.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#/sala/linha-do-tempo"><span aria-hidden="true">▶</span> Explorar o museu</a>
          <a class="button button-quiet" href="#salas-home">Conhecer as salas <span aria-hidden="true">↓</span></a>
        </div>
        <div class="hero-meta"><span><i aria-hidden="true"></i> 6 salas para explorar</span><span><i aria-hidden="true"></i> Jogos interativos</span><span><i aria-hidden="true"></i> Arte para sentir</span></div>
      </div>
      <div class="hero-art hero-gallery-art" aria-label="Galeria de oito imagens de videogames em uma tela de arcade iluminada">
        <span class="hero-electric-ray ray-one" aria-hidden="true"></span><span class="hero-electric-ray ray-two" aria-hidden="true"></span><span class="hero-electric-ray ray-three" aria-hidden="true"></span><span class="hero-electric-ray ray-four" aria-hidden="true"></span>
        <span class="hero-electric-spark spark-one" aria-hidden="true"></span><span class="hero-electric-spark spark-two" aria-hidden="true"></span><span class="hero-electric-spark spark-three" aria-hidden="true"></span><span class="hero-electric-spark spark-four" aria-hidden="true"></span>
        <span class="hero-particle particle-a" aria-hidden="true"></span><span class="hero-particle particle-b" aria-hidden="true"></span><span class="hero-particle particle-c" aria-hidden="true"></span><span class="hero-particle particle-d" aria-hidden="true"></span>
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
        <span class="hero-light-orbit" aria-hidden="true"></span>
        <div class="hero-showcase">
        <div class="art-panel" data-hero-panel>
          <div class="art-panel-top"><span>PIXEL · GALERIA VIVA</span><span class="art-live"><i></i> ONLINE</span></div>
          <div class="art-screen art-screen--photo hero-screen-rotator" data-hero-rotator>
            ${HERO_GAMES.map((game,i)=>`<img class="hero-slide${i===0?' is-active':''}" src="./assets/${game.image}" alt="${game.alt}" width="660" height="400" data-hero-slide="${i}" ${i===0?'fetchpriority="high"':'loading="eager"'}>`).join('')}
            <span class="hero-caption-shade" aria-hidden="true"></span><span class="screen-label" data-hero-game-name>SUPER MARIO GALAXY</span><span class="screen-score" data-hero-count>01 / 08</span>
          </div>
          <div class="art-panel-bottom"><span>PRESS START <span class="blink-caret">▌</span></span><span class="equalizer" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></div>
          <div class="hero-slide-controls" role="group" aria-label="Escolher imagem de jogo">${HERO_GAMES.map((game,i)=>`<button class="hero-slide-dot${i===0?' is-active':''}" type="button" data-hero-go="${i}" aria-label="Mostrar ${game.name}" aria-pressed="${i===0}"></button>`).join('')}</div>
        </div>
        <div class="hero-preview-rail" role="group" aria-label="Prévia de outras artes do acervo">
          ${HERO_GAMES.map((game,i)=>`<button class="hero-preview${i===0?' is-current':''}" type="button" data-hero-preview="${i}" aria-label="Exibir arte de ${game.name}" aria-pressed="${i===0}" style="--preview:${i}"><img src="./assets/${game.image}" alt="" loading="lazy"><span>${game.name}</span></button>`).join('')}
        </div></div>
        <div class="floating-chip chip-top"><span class="chip-icon">✳</span><span><small>ERA</small><strong>ARCADE</strong></span></div>
        <div class="floating-chip chip-bottom"><span class="chip-icon yellow">◆</span><span><small>LEVEL</small><strong>01 / START</strong></span></div>
        <div class="hero-grid" aria-hidden="true"></div>
      </div>
      <div class="hero-bottom-label"><span>01 — PRESS START</span><span>UMA VIAGEM PELA HISTÓRIA DOS GAMES</span></div>
    </section>
    <section class="intro-strip" aria-label="Temas do museu"><div><span class="strip-icon">▦</span><span>CONSOLES ICÔNICOS</span></div><div><span class="strip-icon">◈</span><span>EVOLUÇÃO GRÁFICA</span></div><div><span class="strip-icon">⌁</span><span>HISTÓRIAS E CURIOSIDADES</span></div><div><span class="strip-icon">✦</span><span>JOGUE E APRENDA</span></div></section>
    <section class="rooms-section section-shell" id="salas-home">
      <div class="section-heading reveal"><div><p class="eyebrow">EXPLORAR · SENTIR · APRENDER</p><h2>As seis salas <span class="accent-text">do museu.</span></h2></div><p class="section-lead">Uma jornada pelas máquinas, imagens e histórias que transformaram o jeito de jogar — e de sentir.</p></div>
      <div class="room-grid">${cards}</div>
    </section>
    <section class="journey-section section-shell senses-section" id="evolucao-home">
      <div class="cinematic-heading reveal"><div><p class="eyebrow">EXPRESSÃO · MOVIMENTO · EMOÇÃO</p><h2>Sinta a <span class="accent-text">arte</span> dos games.</h2><p>Quatro sensações, múltiplas linguagens. Cada escolha revela uma forma de ver, ouvir e lembrar.</p></div><a href="#/sala/evolucao-grafica">Ver exposição completa <span aria-hidden="true">↗</span></a></div>
      <div class="cinematic-filmstrip reveal" aria-label="Galeria visual com referências de oito experiências de videogames">
        ${['contemporaneo-sonic.webp','contemporaneo-pokemon.webp','contemporaneo-darth-vader.webp','contemporaneo-mortal-kombat.webp','capa-metal-slug.webp','capa-crash.webp','capa-mega-man.webp','outrun-cover.png'].map((image,i)=>`<div class="cinematic-filmframe" style="--film-accent:${['#ffda48','#00dfff','#fa6799','#ffac58','#b97cff','#44e6a8','#6abaff','#ff7a6b'][i]}"><img src="./assets/${image}" alt="" loading="lazy" width="300" height="180"><span aria-hidden="true">${String(i+1).padStart(2,'0')}</span></div>`).join('')}
      </div>
      <div class="journey-card reveal">
        <div class="journey-copy"><p class="eyebrow">GALERIA VIVA · ARTE, COR E EMOÇÃO</p><h2>Sinta a <span class="accent-text">arte</span><br>dos games.</h2>
          <p>Cada jogo desperta uma sensação. Cores, sons, movimento, desafios e lembranças revelam como os videogames podem expressar arte, estimular a imaginação e aproximar pessoas.</p>
          <a class="button button-primary journey-action" href="#/sala/evolucao-grafica">Explorar a galeria <span aria-hidden="true">→</span></a>
          <p class="journey-insight"><span aria-hidden="true">✧</span> O que mais marcou você: a música, a conquista ou alguém com quem jogou?</p>
        </div>
        <div class="journey-gallery" aria-label="Galeria artística interativa com quatro sensações associadas aos videogames">
          <div class="journey-gallery-top"><span>QUATRO FORMAS DE SENTIR</span><span data-era-position>01 / 04</span></div>
          <div class="journey-eras" data-journey-eras>${eras}</div>
          <div class="senses-focus"><span class="senses-glow-ring" aria-hidden="true"></span><img src="./assets/senses-controller.svg" alt="" aria-hidden="true"><span>ARTE • MOVIMENTO • MEMÓRIA</span></div>
          <div class="senses-art-strip" aria-label="Outras expressões visuais dos jogos"><span>OUTROS UNIVERSOS</span><div>${['contemporaneo-darth-vader.webp','capa-crash.webp','capa-mega-man.webp','capa-mortal-kombat.webp','outrun-cover.png','pacman-cover.png'].map((img,i)=>`<img src="./assets/${img}" alt="Imagem de jogo integrante da galeria artística ${i+1}" loading="lazy">`).join('')}</div></div>
          <div class="journey-controls">
            <button type="button" class="journey-arrow" data-journey-prev aria-label="Experiência anterior">←</button>
            <div class="journey-progress" aria-label="Selecionar experiência">${PERIODS.map((era,i)=>`<button type="button" class="journey-dot ${i===0?'is-current':''}" data-journey-dot="${i}" aria-label="${era.title}" aria-pressed="${i===0}" style="--era-accent:${era.hue}"></button>`).join('')}</div>
            <button type="button" class="journey-arrow" data-journey-next aria-label="Próxima experiência">→</button>
          </div>
          <p class="senses-credit">Imagens enviadas para o projeto e materiais do acervo · Direitos de personagens e artes pertencem aos respectivos titulares.</p>
        </div>
      </div>
    </section>
    <section class="contemporary-section section-shell" id="contemporaneos-home" aria-labelledby="contemporary-title">
      <div class="contemporary-ambient" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="contemporary-heading reveal">
        <div><p class="eyebrow">PIXEL · EXPOSIÇÃO VISUAL CONTEMPORÂNEA</p>
        <h2 id="contemporary-title">Jogos contemporâneos,<br><span>novas sensibilidades.</span></h2>
        <p>Os videogames criam atmosferas, narrativas e experiências que ampliam nossa percepção do mundo. Mais que gráficos avançados, são <strong>linguagens de arte, imaginação e emoção.</strong></p></div>
        <div class="contemporary-heading-side"><span class="contemporary-compass" aria-hidden="true">✳</span><strong>06 OLHARES EM DESTAQUE</strong><small>Observe. Sinta. Interprete.</small></div>
      </div>
      <div class="contemporary-mosaic" aria-label="Seis imagens de jogos contemporâneos com reflexões sobre estética">
        ${CONTEMPORARY_FEATURES.map((art,i)=>`<button type="button" class="contemporary-card contemporary-card--${art.size} reveal" data-contemporary-open="${art.id}" style="--contemporary-accent:${art.color};--delay:${(i*.045).toFixed(2)}s" aria-label="Explorar ${escapeHTML(art.game)}: ${escapeHTML(art.theme.toLowerCase())}">
          <img src="./assets/${art.image}" alt="${escapeHTML(art.alt)}" loading="lazy" decoding="async" ${i===0?'fetchpriority="low"':''}>
          <span class="contemporary-card-filter" aria-hidden="true"></span><span class="contemporary-card-number">${String(i+1).padStart(2,'0')} <span>/ 06</span></span>
          <span class="contemporary-card-copy"><span class="contemporary-card-theme">${escapeHTML(art.symbol)} &nbsp; ${escapeHTML(art.theme)}</span><strong>${escapeHTML(art.headline)}</strong><small>${escapeHTML(art.game)}</small></span><span class="contemporary-card-explore" aria-hidden="true">↗</span>
        </button>`).join('')}
      </div>
      <div class="contemporary-after-mosaic"><span><i aria-hidden="true">✧</i> Toque em uma imagem para descobrir sua leitura artística.</span><span>01 — 06 · IMAGENS, SONS E EXPERIÊNCIAS</span></div>
      <div class="contemporary-more-head"><div><p class="eyebrow">OUTRAS LINGUAGENS · OUTROS UNIVERSOS</p><h3>Uma coleção de <span>olhares.</span></h3></div><p>Seis outras imagens, seis maneiras de interpretar o mundo dos games.</p></div>
      <div class="contemporary-more" aria-label="Outras seis expressões visuais dos jogos">
        ${CONTEMPORARY_MORE.map((art)=>`<button type="button" class="contemporary-mini" style="--contemporary-accent:${art.color}" data-contemporary-open="${art.id}" aria-label="Explorar ${escapeHTML(art.game)}"><img src="./assets/${art.image}" alt="${escapeHTML(art.alt)}" loading="lazy" decoding="async"><span class="contemporary-mini-gradient" aria-hidden="true"></span><span class="contemporary-mini-caption"><small>${escapeHTML(art.theme)}</small><strong>${escapeHTML(art.game)}</strong></span><span class="contemporary-mini-arrow" aria-hidden="true">↗</span></button>`).join('')}
      </div>
      <div class="contemporary-outro"><span class="contemporary-outro-spark" aria-hidden="true">✦</span><div><p class="eyebrow">A EXPERIÊNCIA ESTÉTICA CONTINUA</p><p>Nem toda imagem precisa ser realista para emocionar.<br><strong>Nem toda história precisa de palavras para ser sentida.</strong></p></div><a href="#memorias-home">O que um jogo desperta em você? <span aria-hidden="true">↗</span></a></div>
      <p class="contemporary-credits">Imagens fornecidas para a curadoria do projeto · Personagens e artes pertencem aos respectivos titulares. A exposição é educativa e independente.</p>
    </section>
    <div class="contemporary-lightbox" data-contemporary-dialog hidden>
      <div class="contemporary-lightbox-overlay" data-contemporary-close aria-hidden="true"></div>
      <div class="contemporary-lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="contemporary-dialog-title" aria-describedby="contemporary-dialog-summary">
        <button type="button" class="contemporary-lightbox-close" data-contemporary-close aria-label="Fechar imagem ampliada">✕</button>
        <div class="contemporary-lightbox-picture"><img data-contemporary-image src="./assets/contemporaneo-hollow-knight.webp" alt=""><span data-contemporary-caption>IMAGEM · EXPRESSÃO</span></div>
        <div class="contemporary-lightbox-copy"><p class="eyebrow" data-contemporary-theme>ATMOSFERA & SILÊNCIO</p><h2 id="contemporary-dialog-title" data-contemporary-title>O silêncio também conta histórias.</h2><p id="contemporary-dialog-summary" data-contemporary-summary></p><div class="contemporary-lightbox-question"><span>UM OLHAR PARA ALÉM DA TELA</span><p data-contemporary-question></p></div><div class="contemporary-lightbox-actions"><a data-contemporary-room href="#/sala/evolucao-grafica">Continuar pelo museu ↗</a><button type="button" data-contemporary-close>Voltar à exposição ←</button></div></div>
      </div>
    </div>
    <section class="memory-section section-shell" id="memorias-home" aria-labelledby="memory-heading">
      <div class="memory-head"><div><p class="eyebrow"><span aria-hidden="true">♥</span> NOVA EXPERIÊNCIA · EDUCAÇÃO DOS SENTIDOS</p><h2 id="memory-heading">Memórias que <span>nos conectam.</span></h2><p>Os videogames também são feitos de pessoas, histórias e emoções. Qual dessas experiências mais se parece com a sua?</p></div><span class="memory-head-icon" aria-hidden="true">♥</span></div>
      <div class="memory-experience" data-memory-experience>
        <div class="memory-scene"><img src="./assets/home-memory-scene.svg" alt="Ilustração de um quarto acolhedor com videogame, televisão e duas pessoas jogando juntas" width="920" height="620" loading="lazy"><span class="memory-scene-tag">UMA LEMBRANÇA PODE ACENDER UM MUNDO INTEIRO ✦</span></div>
        <div class="memory-question"><span class="memory-step">01 · ESCOLHA UMA SENSAÇÃO</span><h3>O que torna um jogo <span>inesquecível</span> para você?</h3><p>Não há resposta certa. Escolha o sentimento que mais representa sua relação com os videogames.</p>
          <div class="memory-choices" role="group" aria-label="Escolha uma experiência afetiva">${MEMORY_CHOICES.map(item=>`<button type="button" class="memory-choice${item.id==='convivencia'?' is-selected':''}" data-memory-choice="${item.id}" aria-pressed="${item.id==='convivencia'}" style="--memory-choice:${MEMORY_STORIES[item.id].color}"><span aria-hidden="true">${item.icon}</span><strong>${item.title}</strong><small>${item.subtitle}</small></button>`).join('')}</div>
          <p class="memory-privacy">✧ Uma experiência de reflexão. Nenhuma resposta é coletada ou enviada.</p>
        </div>
        <div class="memory-result" data-memory-result style="--memory-accent:#36e7b0" aria-live="polite" aria-atomic="true">
          <div class="memory-result-visual"><img src="./assets/contemporaneo-fortnite.webp" alt="Participantes em cenário de Fortnite" loading="lazy" data-memory-image><span class="memory-result-symbol" data-memory-symbol aria-hidden="true">♧</span></div>
          <div class="memory-result-content"><span class="memory-result-kicker" data-memory-label>CONVIVÊNCIA · RELAÇÕES HUMANAS</span><h3 data-memory-title>Os jogos também aproximam pessoas.</h3><p data-memory-text>Partidas compartilhadas, risadas, disputas e cooperação transformam o ato de jogar em uma experiência social. Os videogames também fazem parte da construção de memórias coletivas.</p><blockquote data-memory-quote>“Às vezes, o mais importante de uma partida não é vencer, mas lembrar de quem estava jogando ao seu lado.”</blockquote><a class="memory-result-link" data-memory-link href="#/sala/mundos-dos-jogos">Explorar o PIXEL Arcade <span aria-hidden="true">→</span></a></div>
        </div>
      </div>
      <div class="memory-postscript"><span aria-hidden="true">✦</span> Cada pessoa vive uma história diferente diante da mesma tela. E isso também é estética.</div>
    </section>
    <section class="about-section section-shell reveal about-rich" id="sobre">
      <div class="about-rich-top">
        <div class="about-copy"><p class="eyebrow">SOBRE O PROJETO · MEMÓRIA, ARTE E ENCONTRO</p>
          <h2>Tecnologia que cria.<br>Arte que <span class="accent-text">emociona.</span><br>Memórias que conectam.</h2>
          <p>Há lembranças que começam com o som de um console ligando. Uma partida no sofá, alguém vibrando com uma vitória, uma música que continua na memória. O PIXEL nasce para celebrar essas histórias — e para descobrir como <strong>sensibilidade e estética</strong> nos ajudam a senti-las novamente.</p>
          <p>O PIXEL investiga os videogames como manifestações culturais e artísticas. Mais que máquinas e datas, apresenta encontros entre tecnologia e pessoas: cenários, cores, sons, personagens e partidas compartilhadas que despertam a criatividade, a memória afetiva e a convivência.</p>
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
        <div><p class="eyebrow">ENTRE SENTIR, CRIAR E COMPARTILHAR</p><h3>A arte faz a memória ganhar vida.</h3><p>Desenvolvido no contexto da <strong>Atividade Integradora VI — Sensibilidade e Estética</strong>, do curso de Sistemas de Informação da Unilasalle-RJ, o PIXEL relaciona arte, ciência, cultura e educação dos sentidos. Ao observar e experimentar os jogos, cada visitante é convidado a refletir sobre emoções, criação e relações humanas. A apresentação acadêmica e eventual atividade de extensão dependem de orientação e validação institucional.</p></div>
        <ol><li><strong>01 · Descobrir</strong><span>Conhecer os jogos e as pessoas por trás de suas histórias.</span></li><li><strong>02 · Imaginar</strong><span>Transformar lembranças, cores e movimentos em expressão artística.</span></li><li><strong>03 · Sentir</strong><span>Explorar emoções, estética e sensações ao jogar.</span></li><li><strong>04 · Compartilhar</strong><span>Conversar sobre experiências, memórias e descobertas.</span></li></ol>
      </div>
      <div class="about-bottom"><span>PIXEL · PATRIMÔNIO CULTURAL · SENSIBILIDADE · ESTÉTICA · TECNOLOGIA</span><strong>MAIS QUE JOGOS. MEMÓRIAS QUE NOS CONECTAM.</strong></div>
    </section>
    <section class="home-finale section-shell reveal" aria-label="Encerramento da visita à home"><div class="finale-horizon" aria-hidden="true"></div><p class="eyebrow">NOSSAS HISTÓRIAS CONTINUAM</p><h2>“Cada jogo é um encontro entre<br><span>imaginação, tecnologia e pessoas.</span>”</h2><div class="finale-pixels" aria-hidden="true"><span>♥</span><span>✦</span><span>◆</span><span>★</span></div><a href="#memorias-home">Descubra o que te conecta <span aria-hidden="true">↑</span></a></section>
    </div>`;
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
  const previews = [...root.querySelectorAll('[data-hero-preview]')];
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
    previews.forEach((button,i)=>{
      button.classList.toggle('is-current',i===heroIndex);
      button.setAttribute('aria-pressed',String(i===heroIndex));
    });
    const name = root.querySelector('[data-hero-game-name]');
    const count = root.querySelector('[data-hero-count]');
    if (name) name.textContent = HERO_GAMES[heroIndex].name.toUpperCase();
    if (count) count.textContent = `${String(heroIndex+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
  };
  selectors.forEach((button) => button.addEventListener('click', () => showSlide(Number(button.dataset.heroGo))));
  previews.forEach((button) => button.addEventListener('click', () => showSlide(Number(button.dataset.heroPreview))));
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
  // A experiência de memória é local: nenhuma opção é transmitida ou armazenada.
  const memoryChoices = [...root.querySelectorAll('[data-memory-choice]')];
  const memoryPanel = root.querySelector('[data-memory-result]');
  const selectMemory = (id) => {
    const story = MEMORY_STORIES[id];
    if (!story || !memoryPanel) return;
    memoryChoices.forEach(button => {
      const selected = button.dataset.memoryChoice === id;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    memoryPanel.style.setProperty('--memory-accent',story.color);
    const setText = (selector,value) => { const node = memoryPanel.querySelector(selector); if (node) node.textContent = value; };
    setText('[data-memory-label]', story.label);
    setText('[data-memory-title]',story.title);
    setText('[data-memory-text]',story.text);
    setText('[data-memory-quote]',`“${story.quote}”`);
    setText('[data-memory-symbol]',story.icon);
    const image = memoryPanel.querySelector('[data-memory-image]');
    if (image) { image.src = `./assets/${story.image}`; image.alt = story.alt; }
    const link = memoryPanel.querySelector('[data-memory-link]');
    if (link) { link.href = story.href; link.innerHTML = `${story.action} <span aria-hidden="true">→</span>`; }
    memoryPanel.classList.remove('is-changing');
    void memoryPanel.offsetWidth;
    memoryPanel.classList.add('is-changing');
  };
  memoryChoices.forEach(button => button.addEventListener('click',()=>selectMemory(button.dataset.memoryChoice)));
  selectMemory('convivencia');
  // Exposição contemporânea: leitura ampliada por clique/toque, sem modificar as salas.
  const contemporaryDialog = root.querySelector('[data-contemporary-dialog]');
  let contemporaryPreviousFocus = null;
  if (contemporaryDialog) document.body.appendChild(contemporaryDialog);
  const closeContemporary = () => {
    if (!contemporaryDialog || contemporaryDialog.hidden) return;
    contemporaryDialog.hidden = true;
    document.documentElement.classList.remove('contemporary-dialog-open');
    if (contemporaryPreviousFocus?.isConnected) contemporaryPreviousFocus.focus({preventScroll:true});
    contemporaryPreviousFocus = null;
  };
  const openContemporary = (id,trigger) => {
    const art = CONTEMPORARY_ALL.find(item=>item.id===id);
    if (!contemporaryDialog || !art) return;
    contemporaryPreviousFocus = trigger;
    contemporaryDialog.style.setProperty('--contemporary-accent',art.color);
    const image = contemporaryDialog.querySelector('[data-contemporary-image]');
    if (image) { image.src=`./assets/${art.image}`; image.alt=art.alt; }
    const setText=(selector,value)=>{const el=contemporaryDialog.querySelector(selector);if(el)el.textContent=value;};
    setText('[data-contemporary-caption]',art.game.toUpperCase());
    setText('[data-contemporary-theme]',art.theme);
    setText('[data-contemporary-title]',art.headline);
    setText('[data-contemporary-summary]',art.summary);
    setText('[data-contemporary-question]',art.question);
    const room = contemporaryDialog.querySelector('[data-contemporary-room]');
    if (room) room.href = art.room;
    contemporaryDialog.hidden = false;
    document.documentElement.classList.add('contemporary-dialog-open');
    contemporaryDialog.querySelector('.contemporary-lightbox-close')?.focus({preventScroll:true});
  };
  root.querySelectorAll('[data-contemporary-open]').forEach(button=>button.addEventListener('click',()=>openContemporary(button.dataset.contemporaryOpen,button)));
  contemporaryDialog?.querySelectorAll('[data-contemporary-close]').forEach(button=>button.addEventListener('click',closeContemporary));
  contemporaryDialog?.addEventListener('keydown',ev=>{
    if(ev.key==='Escape'){ev.preventDefault();closeContemporary();return;}
    if(ev.key==='Tab'){
      const focusable=[...contemporaryDialog.querySelectorAll('button,a[href]')].filter(el=>el.getClientRects().length);
      if(!focusable.length)return;
      const first=focusable[0],last=focusable.at(-1);
      if(ev.shiftKey&&document.activeElement===first){ev.preventDefault();last.focus();}
      else if(!ev.shiftKey&&document.activeElement===last){ev.preventDefault();first.focus();}
    }
  });
  const cleanupAllHome = () => { closeContemporary(); contemporaryDialog?.remove(); cleanupHero(); };
  const elements = [...root.querySelectorAll('.reveal')];
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((element) => element.classList.add('is-revealed'));
    root.__homeCleanup = cleanupAllHome;
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
    });
  },{threshold: .08,rootMargin: '0px 0px 40px 0px'});
  elements.forEach((element) => observer.observe(element));
  // Renderizar uma nova tela não deve manter observadores ativos na página anterior.
  root.__homeCleanup = () => { observer.disconnect(); cleanupAllHome(); };
}
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
