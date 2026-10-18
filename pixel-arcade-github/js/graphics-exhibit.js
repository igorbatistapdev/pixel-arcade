// Comparador visual dedicado; acervo local com pares da mesma franquia em épocas diferentes.
const PAIRS = [
  {
    id: 'mario',
    name: 'Mario: do NES ao 3D moderno',
    left: './assets/mario-classic.png',
    right: './assets/mario-modern.png',
    leftName: 'Super Mario Bros.',
    leftYear: '1985 · NES',
    rightName: 'Super Mario Bros. Wonder',
    rightYear: '2023 · Nintendo Switch',
    desc: 'A mesma série mostra a passagem do cenário em tiles, HUD simples e leitura imediata para volumes suaves, efeitos de luz e animações muito mais expressivas.',
    notes: ['Tiles e pixels aparentes → materiais e formas orgânicas', 'Animação econômica → movimentos mais fluídos e reações visuais', 'Leitura plana → profundidade e camadas mais ricas'],
    accent: '#52E6FF'
  },
  {
    id: 'tombraider',
    name: 'Tomb Raider: polígono clássico e reboot',
    left: './assets/era-tomb-raider.jpg',
    right: './assets/tombraider-modern.png',
    leftName: 'Tomb Raider: Chronicles',
    leftYear: '2000 · PlayStation',
    rightName: 'Tomb Raider',
    rightYear: '2013 · Reboot',
    desc: 'Lara Croft permite observar como o 3D passou de geometrias mais rígidas e cenários modulares para superfícies detalhadas, personagens mais realistas e atmosfera cinematográfica.',
    notes: ['Modelos facetados → anatomia e roupa mais detalhadas', 'Cenários modulares → composição cinematográfica', 'Texturas simples → materiais, poeira e iluminação dramática'],
    accent: '#FFD447'
  },
  {
    id: 'starwars',
    name: 'Star Wars: do arcade ao espetáculo moderno',
    left: './assets/starwars-classic.png',
    right: './assets/starwars-modern.png',
    leftName: 'Star Wars (Atari)',
    leftYear: '1983 · Arcade',
    rightName: 'Star Wars Jedi: Fallen Order',
    rightYear: '2019 · Multiplataforma',
    desc: 'O salto entre gerações mostra a evolução de formas mínimas e abstratas para cenas cheias de profundidade, personagens, efeitos e cenários altamente detalhados.',
    notes: ['Símbolos e formas vetoriais → ambientes narrativos completos', 'Poucos elementos em tela → direção de arte cinematográfica', 'Feedback simples → efeitos de luz e ação coreografada'],
    accent: '#FF5C88'
  },
  {
    id: 'streetfighter',
    name: 'Street Fighter: sprites para espetáculo urbano',
    left: './assets/streetfighter-classic.png',
    right: './assets/streetfighter-modern.png',
    leftName: 'Street Fighter II',
    leftYear: '1991 · Arcade',
    rightName: 'Street Fighter 6',
    rightYear: '2023 · Multiplataforma',
    desc: 'A comparação evidencia como a identidade visual da luta permanece, mas ganha novas camadas de impacto com animação mais complexa, efeitos e cenários vivos.',
    notes: ['Sprites desenhados à mão → personagens 3D estilizados', 'Golpes legíveis → explosões de efeitos e partículas', 'Cenário estático → espaço urbano cheio de atmosfera'],
    accent: '#A883FF'
  },
  {
    id: 'gta',
    name: 'GTA: da vista aérea ao horizonte contemporâneo',
    left: './assets/gta-classic.png',
    right: './assets/gta-modern.png',
    leftName: 'Grand Theft Auto',
    leftYear: '1997 · PC / PlayStation',
    rightName: 'Grand Theft Auto VI',
    rightYear: '2025 · material promocional',
    desc: 'A série evidencia a mudança de escala: de cidades vistas de cima e simplificadas para metrópoles com iluminação, clima, arquitetura e sensação de lugar.',
    notes: ['Leitura aérea e simplificada → paisagem ampla e cinematográfica', 'Poucos carros e formas básicas → cidade cheia de volume e atmosfera', 'Função gráfica → construção de ambientação e identidade urbana'],
    accent: '#67EABD'
  }
];

const esc = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function renderVisualCompare(){
  const p = PAIRS[0];
  return `<section class="gv-gallery" id="galeria-comparativa" aria-label="Comparação visual da mesma franquia em épocas diferentes">
    <div class="gv-gallery-head">
      <div>
        <p class="eyebrow">SALA 03 · COMPARAÇÃO VISUAL</p>
        <h2>Compare o <span class="accent-text">mesmo jogo</span> em duas épocas.</h2>
      </div>
      <p>Agora a comparação está mais coesa: cada par mostra a evolução da própria franquia. Deslize a divisória, observe o enquadramento, o volume, a luz, a paleta e o tipo de detalhe que cada geração tornou possível.</p>
    </div>
    <div class="gv-gallery-grid">
      <div class="gv-slider-wrap">
        <div class="gv-frame-head"><span>PIXEL / COMPARADOR INTERATIVO</span><span data-gv-counter>01 / 05</span></div>
        <div class="gv-compare-stage" data-gv-stage style="--gv-split:50%" role="group" aria-label="Comparação entre versões do mesmo universo de jogo">
          <img data-gv-left src="${p.left}" alt="${esc(p.leftName)} (${p.leftYear})" draggable="false">
          <img class="gv-after" data-gv-right src="${p.right}" alt="${esc(p.rightName)} (${p.rightYear})" draggable="false">
          <span class="gv-stamp gv-stamp--left" data-gv-left-caption>${esc(p.leftName)} · ${p.leftYear.split(' · ')[0]}</span>
          <span class="gv-stamp gv-stamp--right" data-gv-right-caption>${esc(p.rightName)} · ${p.rightYear.split(' · ')[0]}</span>
          <span class="gv-split-line" aria-hidden="true"><span>↔</span></span>
        </div>
        <div class="gv-control-panel">
          <div class="gv-slider-top"><span>VERSÃO ANTERIOR</span><strong data-gv-name>${esc(p.name)}</strong><span>VERSÃO POSTERIOR</span></div>
          <label class="sr-only" for="gv-split-input">Deslize para comparar as imagens</label>
          <input type="range" min="5" max="95" value="50" id="gv-split-input" class="gv-range" aria-label="Divisão entre as duas imagens">
          <p>Deslize, toque ou use ← e → para comparar.</p>
        </div>
        <div class="gv-thumb-list" role="group" aria-label="Selecionar franquia para comparar">${PAIRS.map((item,i)=>`<button type="button" data-gv-pair="${i}" class="gv-thumb${i===0?' is-active':''}" aria-pressed="${i===0}" style="--thumb-accent:${item.accent}"><img src="${item.left}" alt="" loading="lazy"><span>${esc(item.name)}</span></button>`).join('')}</div>
      </div>
      <aside class="gv-explainer" aria-live="polite">
        <p class="eyebrow">LEITURA GUIADA</p>
        <h3 data-gv-side-title>${esc(p.name)}</h3>
        <p data-gv-desc>${esc(p.desc)}</p>
        <div class="gv-note-list" data-gv-notes>${p.notes.map(t=>`<span>✧ ${esc(t)}</span>`).join('')}</div>
        <p class="gv-attribution">As imagens são exibidas aqui com finalidade educacional, para demonstrar evolução gráfica, direção de arte e linguagem visual em diferentes épocas.</p>
      </aside>
    </div>
  </section>`;
}

export function initVisualCompare(root){
  const stage = root.querySelector('[data-gv-stage]');
  if(!stage) return;

  root.querySelector('[data-gv-scroll]')?.addEventListener('click',()=>stage.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'}));

  const slider=root.querySelector('#gv-split-input');
  const pairs=[...root.querySelectorAll('[data-gv-pair]')];
  const left=root.querySelector('[data-gv-left]');
  const right=root.querySelector('[data-gv-right]');

  const update= value=>{
    const v=Math.max(5,Math.min(95,Number(value)));
    stage.style.setProperty('--gv-split',v+'%');
    slider.value=String(v);
  };

  slider.addEventListener('input',()=>update(slider.value));

  let dragging=false;
  const fromX=e=>{
    const box=stage.getBoundingClientRect();
    update((e.clientX-box.left)*100/box.width);
  };

  stage.addEventListener('pointerdown',e=>{if(e.button!==0 && e.pointerType!=='touch')return;dragging=true;stage.setPointerCapture?.(e.pointerId);fromX(e)});
  stage.addEventListener('pointermove',e=>{if(dragging)fromX(e)});
  for(const name of ['pointerup','pointercancel','lostpointercapture']) stage.addEventListener(name,()=>{dragging=false});

  const choose=index=>{
    const p=PAIRS[index];
    if(!p) return;
    left.src=p.left;
    left.alt=p.leftName+' ('+p.leftYear+')';
    right.src=p.right;
    right.alt=p.rightName+' ('+p.rightYear+')';
    root.querySelector('[data-gv-name]').textContent=p.name;
    root.querySelector('[data-gv-left-caption]').textContent=p.leftName+' · '+p.leftYear.split(' · ')[0];
    root.querySelector('[data-gv-right-caption]').textContent=p.rightName+' · '+p.rightYear.split(' · ')[0];
    root.querySelector('[data-gv-side-title]').textContent=p.name;
    root.querySelector('[data-gv-desc]').textContent=p.desc;
    root.querySelector('[data-gv-notes]').innerHTML=p.notes.map(t=>`<span>✧ ${esc(t)}</span>`).join('');
    root.querySelector('[data-gv-counter]').textContent=String(index+1).padStart(2,'0')+' / 05';
    pairs.forEach((btn,i)=>{btn.classList.toggle('is-active',i===index);btn.setAttribute('aria-pressed',String(i===index))});
    update(50);
  };

  pairs.forEach((b,i)=>b.addEventListener('click',()=>choose(i)));
}
