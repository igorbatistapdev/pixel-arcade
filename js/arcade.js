const BEST_KEY = "pixel-arcade-records-v1";
const GAMES = {
  spaceInvaders: { title: "Space Invaders", kind: "classic", badge: "ARCADE CLÁSSICO · 1978", description: "Defenda a Terra contra ondas de invasores em uma recriação jogável do clássico de 1978. Mire, dispare e tente superar seu recorde." },
  outrun: { title: "OutRun JS · Corrida pseudo-3D", kind: "external", badge: "CORRIDA RETRÔ · INSPIRADO EM OUTRUN", description: "Uma experiência de corrida em perspectiva pseudo-3D, com curvas, tráfego, velocidade, nitro e visual inspirado nos arcades de corrida dos anos 1980." },
  sonic: { title: "Sonic: teste de velocidade", kind: "external", badge: "PLATAFORMA · OPEN SONIC JS", description: "Jogue uma aventura de plataforma baseada no projeto Open Sonic JS, com fases, personagens, anéis, obstáculos e movimentação lateral. Inclui controles adaptados para toque.", legal: true },
  pacman: { title: "Pac-Man — Labirinto e estratégia", kind: "external", badge: "ARCADE CLÁSSICO · 1980", description: "Atravesse o labirinto, colete pontos e power pellets, escape dos fantasmas e tente superar seu recorde. Inclui teclado, controles de toque e opções de acessibilidade." }
};
const LEVELS = ["Fase 1 · Aquecimento", "Fase 2 · Zona de desafio", "Fase 3 · Reta final"];

export function renderArcadeRoom() {
  const cards = Object.entries(GAMES).map(([id, game]) => `
    <article class="arcade-card">
      <div class="arcade-card-art arcade-art-${id}" ${id === "pacman" ? 'role="img" aria-label="Capa de Pac-Man enviada para o projeto"' : id === "outrun" ? 'role="img" aria-label="Anúncio histórico de OutRun fornecido para a exposição"' : 'aria-hidden="true"'}><span class="art-label">${game.badge}</span>${id === "pacman" ? '<img class="pacman-cover" src="./assets/pacman-cover.png" alt="Capa de Pac-Man fornecida para o PIXEL" loading="lazy">' : id === "outrun" ? '<img class="outrun-cover" src="./assets/outrun-cover.png" alt="Anúncio japonês de OutRun para PC Engine" loading="lazy">' : id === "spaceInvaders" ? '<img class="space-invaders-cover" src="./assets/era-space-invaders.jpg" alt="Arte representativa de Space Invaders" loading="lazy">' : id === "sonic" ? '<img class="sonic-speed-cover" src="./assets/sonic-speed-cover.png" alt="Imagem de capa ilustrativa para Sonic: teste de velocidade" loading="lazy">' : `<div class="arcade-art-hero">✦</div>`}</div>
      <div class="arcade-card-body"><h2>${game.title}</h2><p>${game.description}</p>
      ${game.legal ? '<p class="arcade-legal">Adaptação independente do projeto Open Sonic JS. A licença MIT do código não garante, por si só, direitos sobre todos os sprites, sons e músicas incluídos no projeto original.</p>' : ''}
      <div class="arcade-tags"><span>${id === "outrun" ? "Perspectiva pseudo-3D" : id === "sonic" ? "Plataforma e fases" : "3 fases"}</span><span>${id === "outrun" || id === "sonic" ? "Controles adaptados" : "Recordes locais"}</span><span>PC + celular</span></div>
      <button class="button button-primary" type="button" data-arcade-start="${id}">Jogar agora <span aria-hidden="true">→</span></button></div>
    </article>`).join("");
  return `<section class="room-page section-shell arcade-room">
    <a class="back-link" href="#/">← Voltar ao saguão</a>
    <section class="arcade-cabinet-stage" aria-labelledby="cabinet-title">
      <div class="cabinet-copy"><p class="eyebrow">SALA 004 · EXPERIÊNCIA INTERATIVA</p><h1 id="cabinet-title">O ARCADE <span>VIVE AQUI</span></h1><p>Escolha seu jogo e descubra como movimento, desafio e som marcaram a cultura dos fliperamas. Aperte START para experimentar essas sensações.</p><div class="cabinet-features"><span>✦ 4 experiências</span><span>⌁ Sem cadastro</span><span>▣ PC + celular</span></div><button class="button button-primary cabinet-start-mobile" type="button" data-cabinet-start>▶ APERTE START</button></div>
      <div class="arcade-cabinet-wrap arcade-cabinet-exact-wrap" aria-label="Gabinete de fliperama interativo">
        <div class="arcade-cabinet-light"></div>
        <div class="cabinet-exact-stage">
          <img class="cabinet-exact-image" src="./assets/arcade-cabinet-exato.png" alt="Gabinete de arcade preto e amarelo, visto de frente, com tela, joystick, botões físicos e base completa">
          <div class="cabinet-screen-overlay" aria-label="Seleção de jogo no monitor do fliperama">
            <div class="cabinet-overlay-cover-wrap"><img class="cabinet-cover-image" src="./assets/era-space-invaders.jpg" alt="Capa de Space Invaders"><button type="button" class="cabinet-arrow cabinet-arrow-prev" data-cabinet-prev aria-label="Jogo anterior">‹</button><button type="button" class="cabinet-arrow cabinet-arrow-next" data-cabinet-next aria-label="Próximo jogo">›</button></div>
            <strong class="cabinet-cover-title">SPACE INVADERS</strong>
            <button type="button" class="cabinet-overlay-start" data-cabinet-start>▶ START</button>
            <div class="cabinet-overlay-game-list" role="group" aria-label="Selecionar jogo">
              ${Object.entries(GAMES).map(([id,g])=>`<button type="button" class="cabinet-game-option ${id==='spaceInvaders'?'is-selected':''}" data-cabinet-select="${id}" aria-pressed="${id==='spaceInvaders'?'true':'false'}" title="${g.title}"><img src="${id==='spaceInvaders'?'./assets/era-space-invaders.jpg':id==='pacman'?'./assets/pacman-cover.png':id==='outrun'?'./assets/outrun-cover.png':'./assets/sonic-speed-cover.png'}" alt=""><span>${g.title.replace(' JS · Corrida pseudo-3D','').replace(' — Labirinto e estratégia','').replace('Sonic: teste de velocidade','SONIC')}</span></button>`).join('')}
            </div>
          </div>
        </div>
        <button type="button" class="cabinet-start-mobile button button-primary" data-cabinet-start>▶ APERTE START</button>
      </div>
    </section>
    <div class="arcade-catalog-heading"><div><p class="eyebrow">ESCOLHA SUA MÁQUINA</p><h2>Jogos disponíveis<span>.</span></h2></div><p>Experimente diferentes estilos de jogar. Que sentimentos surgem diante de um desafio, de uma vitória ou de uma lembrança compartilhada?</p></div>
    <div class="arcade-grid">${cards}</div>
    <section class="arcade-game" id="arcade-game" hidden aria-label="Área do jogo">
      <div class="arcade-game-top"><h2 id="arcade-game-title">Jogo</h2><div class="arcade-hud"><span id="arcade-level">Fase 1</span><span id="arcade-score">Pontos: 0</span><span id="arcade-record">Recorde: 0</span></div></div>
      <div class="arcade-canvas-wrap" id="arcade-canvas-wrap"><canvas class="arcade-canvas" id="arcade-canvas" width="960" height="540" aria-label="Área interativa do jogo"></canvas><div class="arcade-message" id="arcade-message"><h3 id="arcade-message-title">PREPARE-SE!</h3><p id="arcade-message-text">Use as setas ou WASD para jogar.</p><button class="button button-primary" type="button" id="arcade-message-action">Jogar</button></div></div>
      <div class="space-invaders-frame-wrap" id="space-invaders-frame-wrap" hidden><iframe id="space-invaders-frame" title="Space Invaders — jogo arcade" src="about:blank" loading="lazy" allow="autoplay" referrerpolicy="no-referrer"></iframe></div>
      <div class="outrun-frame-wrap" id="outrun-frame-wrap" hidden><iframe id="outrun-frame" title="OutRun JS — jogo de corrida pseudo-3D" src="about:blank" loading="lazy" allow="autoplay; fullscreen" referrerpolicy="no-referrer"></iframe></div>
      <div class="sonic-frame-wrap" id="sonic-frame-wrap" hidden><iframe id="sonic-frame" title="Sonic: teste de velocidade — Open Sonic JS" src="about:blank" loading="lazy" allow="autoplay; fullscreen; gamepad" referrerpolicy="no-referrer"></iframe></div>
      <div class="pacman-frame-wrap" id="pacman-frame-wrap" hidden><iframe id="pacman-frame" title="Pac-Man — jogo arcade" src="about:blank" loading="lazy" allow="autoplay; fullscreen; gamepad" referrerpolicy="no-referrer"></iframe></div>
      <div class="arcade-controls"><div class="arcade-key-help" id="arcade-help">Mover: ← → · Pular: Espaço/↑ · Pausar: P</div><div class="arcade-game-actions"><button class="button button-quiet" type="button" id="arcade-pause">Pausar</button><button class="button button-quiet" type="button" id="arcade-exit">Voltar aos jogos</button></div><div class="arcade-control-pad" aria-label="Controles de toque"><button type="button" data-pad="left" aria-label="Mover para esquerda">◀</button><button type="button" data-pad="jump" aria-label="Pular">▲</button><button type="button" data-pad="right" aria-label="Mover para direita">▶</button></div></div>
      <p class="arcade-record-note">Jogos integrados para fins educativos. Alguns projetos incorporam recursos de terceiros: consulte as respectivas licenças e créditos.</p>
    </section>
  </section>`;
}

export function initArcadeRoom(root) {
  const gamePanel = root.querySelector("#arcade-game");
  const canvas = root.querySelector("#arcade-canvas");
  const ctx = canvas.getContext("2d");
  const overlay = root.querySelector("#arcade-message");
  const overlayTitle = root.querySelector("#arcade-message-title");
  const overlayText = root.querySelector("#arcade-message-text");
  const overlayAction = root.querySelector("#arcade-message-action");
  const title = root.querySelector("#arcade-game-title");
  const levelLabel = root.querySelector("#arcade-level");
  const scoreLabel = root.querySelector("#arcade-score");
  const recordLabel = root.querySelector("#arcade-record");
  const help = root.querySelector("#arcade-help");
  let gameId = "pacman", level = 0, score = 0, running = false, paused = false, finished = false;
  let player, platforms, items, hazards, camera, frame, distance, lastTime = 0, animationId = 0, pressed = new Set(), touch = new Set(), checkpoint = 0;
  let records = readRecords();

  function readRecords() { try { return JSON.parse(localStorage.getItem(BEST_KEY) || "{}"); } catch { return {}; } }
  function saveRecord(value) { records[gameId] = Math.max(Number(records[gameId] || 0), Math.floor(value)); try { localStorage.setItem(BEST_KEY, JSON.stringify(records)); } catch {} }
  function updateHud() { levelLabel.textContent = LEVELS[level]; scoreLabel.textContent = gameId === "race" ? `Tempo: ${(frame / 60).toFixed(1)}s · ${score} pts` : `Pontos: ${score}`; recordLabel.textContent = `Recorde: ${records[gameId] || 0}`; }
  function showOverlay(head, message, action, fn) { overlay.hidden = false; overlayTitle.textContent = head; overlayText.textContent = message; overlayAction.textContent = action; overlayAction.onclick = fn; }
  function startGame(id) {
    if (id === "pacman") {
      running = false; cancelAnimationFrame(animationId);
      gameId = id; gamePanel.hidden = false; title.textContent = GAMES[id].title;
      root.querySelector("#arcade-canvas-wrap").hidden = true;
      root.querySelector("#space-invaders-frame-wrap").hidden = true;
      root.querySelector("#space-invaders-frame").src = "about:blank";
      root.querySelector("#outrun-frame-wrap").hidden = true;
      root.querySelector("#outrun-frame").src = "about:blank";
      root.querySelector("#sonic-frame-wrap").hidden = true;
      root.querySelector("#sonic-frame").src = "about:blank";
      root.querySelector("#pacman-frame-wrap").hidden = false;
      root.querySelector("#pacman-frame").src = "./games/pacman/index.html";
      overlay.hidden = true; help.textContent = "PC: setas ou WASD · Enter: iniciar · P: pausar. Celular: use os botões direcionais ou o joystick virtual dentro do jogo.";
      levelLabel.textContent = "Labirinto clássico";
      scoreLabel.textContent = "Pontos · fantasmas · power pellets";
      recordLabel.textContent = "Recordes locais no jogo";
      root.querySelector("#arcade-pause").hidden = true;
      root.querySelector(".arcade-control-pad").hidden = true;
      gamePanel.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      return;
    }
    root.querySelector("#pacman-frame-wrap").hidden = true;
    root.querySelector("#pacman-frame").src = "about:blank";
    if (id === "sonic") {
      running = false; cancelAnimationFrame(animationId);
      gameId = id; gamePanel.hidden = false; title.textContent = GAMES[id].title;
      root.querySelector("#arcade-canvas-wrap").hidden = true;
      root.querySelector("#space-invaders-frame-wrap").hidden = true;
      root.querySelector("#space-invaders-frame").src = "about:blank";
      root.querySelector("#outrun-frame-wrap").hidden = true;
      root.querySelector("#outrun-frame").src = "about:blank";
      root.querySelector("#sonic-frame-wrap").hidden = false;
      root.querySelector("#sonic-frame").src = "./games/sonic/sonic.html";
      overlay.hidden = true; help.textContent = "PC: setas movem · Espaço: pular · Enter: confirmar. Celular: START confirma menus e PULAR realiza saltos.";
      levelLabel.textContent = "Open Sonic JS";
      scoreLabel.textContent = "Plataforma · fases";
      recordLabel.textContent = "Jogo integrado";
      root.querySelector("#arcade-pause").hidden = true;
      root.querySelector(".arcade-control-pad").hidden = true;
      gamePanel.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      return;
    }
    root.querySelector("#sonic-frame-wrap").hidden = true;
    root.querySelector("#sonic-frame").src = "about:blank";
    if (id === "outrun") {
      root.querySelector("#sonic-frame-wrap").hidden = true;
      root.querySelector("#sonic-frame").src = "about:blank";
      running = false; cancelAnimationFrame(animationId);
      gameId = id; gamePanel.hidden = false; title.textContent = GAMES[id].title;
      root.querySelector("#arcade-canvas-wrap").hidden = true;
      root.querySelector("#space-invaders-frame-wrap").hidden = true;
      root.querySelector("#space-invaders-frame").src = "about:blank";
      root.querySelector("#outrun-frame-wrap").hidden = false;
      root.querySelector("#outrun-frame").src = "./games/outrun/index.html";
      overlay.hidden = true; help.textContent = "PC: setas/WASD aceleram e viram · Shift: nitro · Espaço: freio de mão. Celular: pressione e segure ACELERAR e use ◀/▶ para virar.";
      levelLabel.textContent = "Corrida pseudo-3D"; scoreLabel.textContent = "Velocidade · voltas"; recordLabel.textContent = "Projeto independente";
      root.querySelector("#arcade-pause").hidden = true;
      root.querySelector(".arcade-control-pad").hidden = true;
      gamePanel.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      return;
    }
    root.querySelector("#outrun-frame-wrap").hidden = true;
    root.querySelector("#outrun-frame").src = "about:blank";
    if (id === "spaceInvaders") {
      root.querySelector("#sonic-frame-wrap").hidden = true;
      root.querySelector("#sonic-frame").src = "about:blank";
      running = false; cancelAnimationFrame(animationId);
      gameId = id; gamePanel.hidden = false; title.textContent = GAMES[id].title;
      root.querySelector("#arcade-canvas-wrap").hidden = true;
      root.querySelector("#space-invaders-frame-wrap").hidden = false;
      root.querySelector("#space-invaders-frame").src = "./games/space-invaders/index.html";
      overlay.hidden = true; help.textContent = "PC: Enter inicia · ←/→ movem · Espaço dispara. Celular: use INICIAR, ◀, TIRO e ▶ dentro do jogo.";
      levelLabel.textContent = "Clássico de 1978"; scoreLabel.textContent = "Tiro e sobrevivência"; recordLabel.textContent = "Recorde salvo no jogo";
      root.querySelector("#arcade-pause").hidden = true;
      root.querySelector(".arcade-control-pad").hidden = true;
      gamePanel.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      return;
    }
    root.querySelector("#space-invaders-frame-wrap").hidden = true;
    root.querySelector("#space-invaders-frame").src = "about:blank";
    root.querySelector("#outrun-frame-wrap").hidden = true;
    root.querySelector("#outrun-frame").src = "about:blank";
    root.querySelector("#arcade-canvas-wrap").hidden = false;
    root.querySelector("#arcade-pause").hidden = false;
    root.querySelector(".arcade-control-pad").hidden = false;
    gameId = id; level = 0; score = 0; checkpoint = 0; startLevel();
    gamePanel.hidden = false; title.textContent = GAMES[id].title; help.textContent = id === "race" ? "Mover: ← → ou A/D · Desviar de obstáculos · P: pausar" : "Mover: ← → ou A/D · Pular: Espaço/↑/W · P: pausar";
    gamePanel.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }
  function startLevel() {
    frame = 0; distance = 0; camera = 0; pressed.clear(); touch.clear(); finished = false; paused = false; running = true;
    if (GAMES[gameId].kind === "race") setupRace(); else setupPlatform();
    overlay.hidden = true; root.querySelector("#arcade-pause").textContent = "Pausar"; updateHud();
    cancelAnimationFrame(animationId); lastTime = 0; animationId = requestAnimationFrame(loop);
  }
  function setupPlatform() {
    player = { x: 65, y: 370, w: 30, h: 38, vx: 0, vy: 0, grounded: false, inv: 0 };
    const width = 2600 + level * 400;
    platforms = [{x:0,y:450,w:width,h:90}];
    for (let x = 230; x < width - 160; x += 230 - level * 12) {
      const py = 365 - ((Math.floor(x / 230) + level) % 3) * 44;
      platforms.push({x, y:py, w:85 + (x % 3) * 10,h:18});
    }
    items = [];
    for (let x=155; x<width-120; x+=100) items.push({x,y:300-((Math.floor(x/100)+level)%3)*38,r:9,taken:false});
    hazards = [];
    for (let x=390; x<width-220; x+=350-level*20) hazards.push({x,y:416,w:30,h:34});
    if (level > 0) for(let x=800;x<width-400;x+=670) platforms.push({x,y:315,w:65,h:14,moving:true,baseY:315,phase:x/130});
    player.x = 65; player.y = 370; player.vx = player.vy = 0; player.inv = 0;
  }
  function setupRace() {
    player = { x:480, y:445, w:38, h:58, vx:0 };
    items = []; hazards = []; platforms = []; camera = 0;
    for(let y=-100;y>-2200-level*700;y-=170-level*10) hazards.push({x:220+((Math.abs(y/170)*73+level*59)%500),y,w:42,h:55,kind:Math.abs(y)%2?"cone":"car",passed:false});
    for(let y=-160;y>-2200-level*700;y-=260) items.push({x:200+((Math.abs(y/260)*117+level*81)%550),y,r:10,taken:false});
  }
  function loop(time) {
    if (!running) return;
    const dt = Math.min(2, lastTime ? (time-lastTime)/16.67 : 1); lastTime = time;
    if (!paused && !overlay.hidden) {} else if (!paused && !finished) { frame += dt; if (gameId === "race") updateRace(dt); else updatePlatform(dt); }
    draw(); updateHud(); animationId = requestAnimationFrame(loop);
  }
  function isDown(...keys) { return keys.some(k => pressed.has(k) || touch.has(k)); }
  function updatePlatform(dt) {
    const speed = gameId === "sonic" ? 4.6 + level*.35 : 3.7 + level*.25;
    player.vx = (isDown("ArrowRight","d","D","right") ? speed : 0) - (isDown("ArrowLeft","a","A","left") ? speed : 0);
    if (isDown("ArrowUp"," ","w","W","jump") && player.grounded) { player.vy = gameId === "sonic" ? -12.4 : -11.4; player.grounded = false; }
    player.vy += .58*dt; player.x += player.vx*dt; player.y += player.vy*dt; player.x = Math.max(0,player.x);
    player.grounded = false;
    for(const p of platforms) { if(p.moving) p.y=p.baseY+Math.sin(frame/25+p.phase)*35; if(player.vy>=0 && player.x+player.w>p.x && player.x<p.x+p.w && player.y+player.h>=p.y && player.y+player.h<=p.y+22) {player.y=p.y-player.h;player.vy=0;player.grounded=true;} }
    if(player.y>600) { player.x=Math.max(65,checkpoint); player.y=300; player.vy=0; score=Math.max(0,score-20); }
    camera = Math.max(0,player.x-280);
    if(player.inv>0) player.inv-=dt;
    for(const item of items) if(!item.taken && Math.abs((player.x+player.w/2)-item.x)<22 && Math.abs((player.y+player.h/2)-item.y)<27) {item.taken=true;score+=10;}
    for(const h of hazards) if(player.inv<=0 && overlap(player,h)) {score=Math.max(0,score-15);player.x=Math.max(0,player.x-60);player.vy=-5;player.inv=65;}
    if(player.x>checkpoint+550) checkpoint=player.x-60;
    const finishX = Math.max(...platforms.map(p=>p.x+p.w));
    if(player.x+player.w>finishX-45) completeLevel();
  }
  function updateRace(dt) {
    const speed = 3.1 + level*.45;
    player.x += ((isDown("ArrowRight","d","D","right")?1:0)-(isDown("ArrowLeft","a","A","left")?1:0))*5.3*dt;
    player.x=Math.max(150,Math.min(810,player.x)); distance+=speed*dt; player.y=440;
    for(const h of hazards) { h.y+=speed*dt; if(!h.passed && h.y>player.y+40){h.passed=true;score+=5;} if(overlap(player,h)){score=Math.max(0,score-15);h.y=-150;h.x=180+Math.random()*600;} }
    for(const item of items) {item.y+=speed*dt;if(!item.taken&&Math.abs(player.x-item.x)<35&&Math.abs(player.y-item.y)<50){item.taken=true;score+=20;} }
    if(distance>2100+level*650) completeLevel();
  }
  function completeLevel() {
    if(finished) return; finished=true; running=false; saveRecord(gameId === "race" ? Math.max(0,Math.round(10000/(frame/60+1))+score) : score);
    if(level<2) showOverlay(`FASE ${level+1} CONCLUÍDA!`,`Mandou bem! Pontuação acumulada: ${score}. Prepare-se para a próxima fase.`,`Próxima fase`,()=>{level++;startLevel();});
    else showOverlay("VOCÊ VENCEU!",`Você concluiu as três fases de ${GAMES[gameId].title}. Pontuação final: ${score}.`,"Jogar novamente",()=>{level=0;score=0;startLevel();});
    updateHud();
  }
  function overlap(a,b) { return a.x < b.x+b.w && a.x+a.w > b.x && a.y < b.y+b.h && a.y+a.h > b.y; }
  function draw() {
    ctx.clearRect(0,0,960,540);
    if(gameId==="race") drawRace(); else drawPlatform();
    if(paused && overlay.hidden) showOverlay("PAUSADO","Respire, piloto. Quando estiver pronto, continue de onde parou.","Continuar",()=>{paused=false;overlay.hidden=true;root.querySelector("#arcade-pause").textContent="Pausar";});
  }
  function drawPlatform() {
    const grad=ctx.createLinearGradient(0,0,0,540);grad.addColorStop(0,level===1?"#392b6d":"#0b2850");grad.addColorStop(1,"#0a132b");ctx.fillStyle=grad;ctx.fillRect(0,0,960,540);
    ctx.fillStyle="rgba(84,230,255,.12)";for(let i=0;i<18;i++){const x=((i*97-camera*.15)%1050+1050)%1050;ctx.fillRect(x,70+(i%4)*48,3,3);}
    ctx.fillStyle=level===2?"#5b3a67":"#1e5a68";ctx.fillRect(0,450,960,90);ctx.fillStyle="#54e6ff";ctx.fillRect(0,450,960,5);
    for(const p of platforms){const x=p.x-camera;if(x<-100||x>1000)continue;ctx.fillStyle=p.moving?"#b88aff":"#286f82";ctx.fillRect(x,p.y,p.w,p.h);ctx.fillStyle="#a8f6ff";ctx.fillRect(x,p.y,p.w,4);}
    for(const it of items){if(it.taken)continue;const x=it.x-camera;if(x<-30||x>990)continue;ctx.strokeStyle="#ffd447";ctx.lineWidth=4;ctx.beginPath();ctx.ellipse(x,it.y,7,11,Math.sin(frame/8)*.25,0,Math.PI*2);ctx.stroke();}
    for(const h of hazards){const x=h.x-camera;if(x<-50||x>1000)continue;ctx.fillStyle="#ff647c";ctx.beginPath();ctx.moveTo(x,h.y+h.h);ctx.lineTo(x+h.w/2,h.y);ctx.lineTo(x+h.w,h.y+h.h);ctx.closePath();ctx.fill();ctx.fillStyle="#ffd3dc";ctx.fillRect(x+10,h.y+20,4,4);}
    if(!(player.inv>0 && Math.floor(frame/4)%2===0)){ctx.fillStyle=gameId==="sonic"?"#38a9ff":"#ffd447";ctx.fillRect(player.x-camera,player.y,player.w,player.h);ctx.fillStyle="#f4f8ff";ctx.fillRect(player.x-camera+17,player.y+9,7,7);ctx.fillStyle="#16223d";ctx.fillRect(player.x-camera+20,player.y+11,3,4);ctx.fillStyle=gameId==="sonic"?"#e94761":"#ff647c";ctx.fillRect(player.x-camera+2,player.y+player.h-7,player.w-4,7);}
    ctx.fillStyle="#fff";ctx.font="16px monospace";ctx.fillText(gameId==="sonic"?"VELOCIDADE + ANÉIS":"CRISTAIS + CHECKPOINTS",22,32);ctx.fillText(`FASE ${level+1}/3`,820,32);
    if(paused){ctx.fillStyle="rgba(0,0,0,.3)";ctx.fillRect(0,0,960,540);}
  }
  function drawRace() {
    // Perspectiva pseudo-3D do protótipo de corrida.
    const horizon = 205;
    const sky = ctx.createLinearGradient(0,0,0,horizon); sky.addColorStop(0,"#9389e8"); sky.addColorStop(1,"#d4c7e8"); ctx.fillStyle=sky;ctx.fillRect(0,0,960,horizon);
    ctx.fillStyle="#65778d";for(let i=0;i<42;i++){const x=i*24;const h=15+(i*17%32);ctx.fillRect(x,horizon-h,17,h);ctx.fillStyle="#d6bf76";for(let w=0;w<3;w++)ctx.fillRect(x+3+w*4,horizon-h+4,2,3);ctx.fillStyle="#65778d";}
    ctx.fillStyle="#148d20";ctx.fillRect(0,horizon,960,335);
    for(let y=horizon;y<540;y+=Math.max(4,Math.floor((y-horizon)/7))){ctx.fillStyle=(Math.floor((y-horizon+frame*2)/15)%2)?"#07871a":"#149e20";ctx.fillRect(0,y,960,Math.max(2,(y-horizon)/28));}
    const roadTop=350, roadBottom=540, center=480+Math.sin(frame/90+level)*38;
    ctx.fillStyle="#eeeeef";ctx.beginPath();ctx.moveTo(center-28,roadTop);ctx.lineTo(center+28,roadTop);ctx.lineTo(960,roadBottom);ctx.lineTo(0,roadBottom);ctx.closePath();ctx.fill();
    ctx.fillStyle="#aeb3c0";ctx.beginPath();ctx.moveTo(center-24,roadTop);ctx.lineTo(center+24,roadTop);ctx.lineTo(915,roadBottom);ctx.lineTo(45,roadBottom);ctx.closePath();ctx.fill();
    ctx.strokeStyle="#ffffff";ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(center,roadTop+5);ctx.lineTo(center,roadBottom);ctx.stroke();
    for(let i=0;i<7;i++){const t=((i*0.17+(frame%45)/45)%1);const y=roadTop+t*(roadBottom-roadTop);const width=2+t*10;ctx.fillStyle="#fff";ctx.fillRect(center-width/2,y,width,3+t*8);}
    // Adversários e itens escalam conforme se aproximam do jogador.
    for(const h of hazards){const depth=Math.max(0,Math.min(1,(h.y+2500)/(2500+level*700)));const scale=.18+depth*.9;const x=center+(h.x-480)*(.12+depth*.88);const y=220+depth*275;const w=(h.kind==="car"?35:20)*scale;const hh=(h.kind==="car"?52:27)*scale;ctx.fillStyle=h.kind==="car"?"#f5bf22":"#e7e7e7";ctx.fillRect(x-w/2,y-hh,w,hh);if(h.kind==="car"){ctx.fillStyle="#28222c";ctx.fillRect(x-w*.34,y-hh*.7,w*.68,hh*.25);ctx.fillStyle="#c52f25";ctx.fillRect(x-w*.42,y+hh*.65,w*.22,hh*.12);ctx.fillRect(x+w*.2,y+hh*.65,w*.22,hh*.12);}}
    for(const it of items){if(it.taken)continue;const depth=Math.max(0,Math.min(1,(it.y+2500)/(2500+level*700)));const x=center+(it.x-480)*(.12+depth*.88);const y=220+depth*270;ctx.fillStyle="#f6e94a";ctx.fillRect(x-3-depth*3,y-3-depth*3,6+depth*6,6+depth*6);}
    // Carro do jogador, visto por trás.
    const px=player.x, py=424;ctx.fillStyle="#22202a";ctx.fillRect(px-20,py+39,13,20);ctx.fillRect(px+45,py+39,13,20);ctx.fillStyle="#a9271f";ctx.fillRect(px-28,py+15,94,42);ctx.fillStyle="#e34331";ctx.fillRect(px-20,py+5,78,40);ctx.fillStyle="#27202b";ctx.fillRect(px-13,py+10,64,13);ctx.fillStyle="#f3c7bd";ctx.fillRect(px-14,py+31,15,8);ctx.fillRect(px+37,py+31,15,8);ctx.fillStyle="#fff";ctx.fillRect(px+7,py+35,32,8);
    ctx.fillStyle="#171323";ctx.fillRect(18,18,255,116);ctx.fillStyle="#69e85d";ctx.fillRect(30,30,Math.min(190,(3.1+level*.45)*16),13);ctx.fillStyle="#f6e94a";ctx.font="bold 28px monospace";ctx.fillText(`${Math.floor(90+distance/6)} KM/H`,30,76);ctx.font="bold 16px monospace";ctx.fillStyle="#fff";ctx.fillText("AUTO · FUEL ████",30,103);ctx.fillText(`LAP ${level+1}/3`,780,38);ctx.fillText(`${Math.max(0,Math.ceil((2100+level*650-distance)/10))} m`,810,65);ctx.fillText("TOP GEAR · RETRO RACE",22,520);
    if(paused){ctx.fillStyle="rgba(0,0,0,.3)";ctx.fillRect(0,0,960,540);}
  }
  function keyDown(e) { const keys=["ArrowLeft","ArrowRight","ArrowUp"," ","a","A","d","D","w","W","p","P"];if(keys.includes(e.key)){e.preventDefault();pressed.add(e.key);} if((e.key==="p"||e.key==="P")&&gamePanel&&!gamePanel.hidden&&!finished){togglePause();} }
  function keyUp(e){pressed.delete(e.key);}
  function togglePause(){if(finished)return;paused=!paused;root.querySelector("#arcade-pause").textContent=paused?"Continuar":"Pausar";if(!paused)overlay.hidden=true;else showOverlay("PAUSADO","O jogo está pausado.","Continuar",()=>{paused=false;overlay.hidden=true;root.querySelector("#arcade-pause").textContent="Pausar";});}
  let cabinetSelection = "spaceInvaders";
  const cabinetOrder = Object.keys(GAMES);
  const cabinetColors = {spaceInvaders:"#ffdc42", pacman:"#ffe600", outrun:"#ff9651", sonic:"#35a8ff"};
  const cabinetCovers = {
    spaceInvaders: {src:"./assets/era-space-invaders.jpg", alt:"Arte de Space Invaders"},
    pacman: {src:"./assets/pacman-cover.png", alt:"Capa de Pac-Man"},
    outrun: {src:"./assets/outrun-cover.png", alt:"Capa de OutRun"},
    sonic: {src:"./assets/sonic-speed-cover.png", alt:"Capa de Sonic: teste de velocidade"}
  };
  function selectCabinetGame(id) {
    if (!GAMES[id]) return;
    cabinetSelection = id;
    const cabinetOverlay = root.querySelector(".cabinet-screen-overlay");
    if (cabinetOverlay) cabinetOverlay.style.setProperty("--game-color", cabinetColors[id] || "#ffe34c");
    root.querySelectorAll("[data-cabinet-select]").forEach(button => {
      const active = button.dataset.cabinetSelect === id;
      button.classList.toggle("is-selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const index = cabinetOrder.indexOf(id);
    const cover = cabinetCovers[id];
    const coverImage = root.querySelector(".cabinet-cover-image");
    const coverTitle = root.querySelector(".cabinet-cover-title");
    const count = root.querySelector(".cabinet-selection-count");
    if (coverImage && cover) { coverImage.src = cover.src; coverImage.alt = cover.alt; }
    if (coverTitle) coverTitle.textContent = GAMES[id].title.replace(" JS · Corrida pseudo-3D", "").replace(" — Labirinto e estratégia", "").toUpperCase();
    if (count) count.textContent = `${String(index + 1).padStart(2,"0")} / ${String(cabinetOrder.length).padStart(2,"0")}`;
    const screen = root.querySelector(".cabinet-screen");
    if (screen) { screen.classList.remove("cabinet-screen-pulse"); void screen.offsetWidth; screen.classList.add("cabinet-screen-pulse"); }
  }
  root.addEventListener("click", e=>{
    const selector=e.target.closest("[data-cabinet-select]"); if(selector) selectCabinetGame(selector.dataset.cabinetSelect);
    const prev=e.target.closest("[data-cabinet-prev]"); if(prev){const i=cabinetOrder.indexOf(cabinetSelection);selectCabinetGame(cabinetOrder[(i-1+cabinetOrder.length)%cabinetOrder.length]);}
    const next=e.target.closest("[data-cabinet-next]"); if(next){const i=cabinetOrder.indexOf(cabinetSelection);selectCabinetGame(cabinetOrder[(i+1)%cabinetOrder.length]);}
    const cabinetStart=e.target.closest("[data-cabinet-start]"); if(cabinetStart) startGame(cabinetSelection);
    const start=e.target.closest("[data-arcade-start]"); if(start) { selectCabinetGame(start.dataset.arcadeStart); startGame(start.dataset.arcadeStart); }
    const pad=e.target.closest("[data-pad]");if(pad){touch.add(pad.dataset.pad);setTimeout(()=>touch.delete(pad.dataset.pad),150);}
  });
  selectCabinetGame(cabinetSelection);
  root.querySelectorAll("[data-pad]").forEach(btn=>{const down=e=>{e.preventDefault();touch.add(btn.dataset.pad);};const up=()=>touch.delete(btn.dataset.pad);btn.addEventListener("pointerdown",down);btn.addEventListener("pointerup",up);btn.addEventListener("pointercancel",up);btn.addEventListener("pointerleave",up);});
  root.querySelector("#arcade-pause").addEventListener("click",togglePause);
  root.querySelector("#arcade-exit").addEventListener("click",()=>{running=false;paused=false;cancelAnimationFrame(animationId);root.querySelector("#space-invaders-frame").src="about:blank";root.querySelector("#space-invaders-frame-wrap").hidden=true;root.querySelector("#outrun-frame").src="about:blank";root.querySelector("#outrun-frame-wrap").hidden=true;root.querySelector("#sonic-frame").src="about:blank";root.querySelector("#sonic-frame-wrap").hidden=true;root.querySelector("#arcade-canvas-wrap").hidden=false;root.querySelector("#arcade-pause").hidden=false;root.querySelector(".arcade-control-pad").hidden=false;gamePanel.hidden=true;root.querySelector(".arcade-grid").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});});
  window.addEventListener("keydown",keyDown);window.addEventListener("keyup",keyUp);
  window.addEventListener("blur",()=>{pressed.clear();touch.clear();});
  // Release keyboard listeners when navigating away from Sala 004.
  window.addEventListener("hashchange",()=>{running=false;cancelAnimationFrame(animationId);window.removeEventListener("keydown",keyDown);window.removeEventListener("keyup",keyUp);},{once:true});
}
