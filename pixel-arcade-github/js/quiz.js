const STORAGE_KEY = 'pixel.quiz.records.v1';
const COLOR = {1:'#54e6ff',2:'#ffd447',3:'#d08cff'};
let teardown = null;

export function renderQuizRoom() {
  return `<section class="quiz-page section-shell">
    <a href="#/" class="back-link">← Voltar ao saguão</a>
    <div class="quiz-shell" id="quiz-shell" aria-live="off">
      <div class="quiz-intro" data-quiz-stage="intro">
        <div class="quiz-intro-copy">
          <p class="eyebrow">SALA 05 · DESAFIO HISTÓRICO</p>
          <span class="quiz-kicker">★ INSERT KNOWLEDGE ★</span>
          <h1>QUIZ <span>HISTÓRICO.</span></h1>
          <p>De experiências em laboratório aos consoles que mudaram gerações. Responda, descubra curiosidades e desbloqueie conquistas em uma jornada retrô.</p>
          <div class="quiz-intro-stats"><span><strong>24</strong> perguntas no banco</span><span><strong>3</strong> níveis de dificuldade</span><span><strong>∞</strong> tentativas</span></div>
          <fieldset class="quiz-mode-choices"><legend>ESCOLHA SEU DESAFIO</legend>
            <label class="quiz-mode"><input type="radio" name="pixel-quiz-mode" value="campaign" checked><span class="quiz-mode-inner"><strong>◈ JORNADA HISTÓRICA</strong><small>18 perguntas · dificuldade progressiva · recorde</small></span></label>
            <label class="quiz-mode"><input type="radio" name="pixel-quiz-mode" value="quick"><span class="quiz-mode-inner"><strong>⚡ DESAFIO RÁPIDO</strong><small>10 perguntas sorteadas · eras misturadas</small></span></label>
          </fieldset>
          <label class="quiz-time-toggle"><input type="checkbox" data-quiz-timer checked> Cronômetro por pergunta <small>(opcional para acessibilidade)</small></label>
          <button class="button button-primary quiz-start" type="button" data-quiz-start>▶ INICIAR DESAFIO</button>
          <p class="quiz-record-line" data-quiz-record>Seu recorde aparecerá aqui.</p>
        </div>
        <div class="quiz-intro-art" aria-hidden="true"><img src="./assets/home-room-05.svg" alt="" width="960" height="500"><span class="quiz-star star-a">✦</span><span class="quiz-star star-b">✧</span><span class="quiz-star star-c">+</span><div class="quiz-console-badge">LEVEL 01 <span>READY!</span></div></div>
      </div>
      <div class="quiz-game" data-quiz-stage="game" hidden>
        <header class="quiz-game-header"><div><span class="quiz-game-label">PIXEL ARCADE · QUIZ MODE</span><h1 data-quiz-level>FASE 01 · PIONEIROS</h1></div><div class="quiz-scoreboard"><span>SCORE <strong data-quiz-score>00000</strong></span><span>ACERTOS <strong data-quiz-correct>00</strong></span></div></header>
        <div class="quiz-status-row"><span data-quiz-count>PERGUNTA 01 / 18</span><span class="quiz-topic" data-quiz-topic>HISTÓRIA DOS VIDEOGAMES</span><span class="quiz-timer-number" data-quiz-timer-display aria-label="Tempo restante">00s</span></div>
        <div class="quiz-progress" role="progressbar" aria-label="Progresso do quiz" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-quiz-progress><span data-quiz-progress-fill></span></div>
        <div class="quiz-timer-track" data-quiz-timer-track><span data-quiz-time-fill></span></div>
        <div class="quiz-question-layout">
          <figure class="quiz-visual"><img data-quiz-image src="./assets/home-room-05.svg" alt="Ilustração temática da pergunta" width="960" height="500"><figcaption><span data-quiz-image-year>ERA DOS ARCADES</span><span>PIXEL ARCHIVE</span></figcaption></figure>
          <div class="quiz-content"><span class="quiz-difficulty" data-quiz-difficulty>★ INICIANTE</span><h2 data-quiz-question>Carregando pergunta...</h2><div class="quiz-options" data-quiz-options role="group" aria-label="Escolha uma resposta"></div>
           <p class="quiz-keyboard-hint">Pressione 1–4 para responder · Enter para continuar</p></div>
        </div>
        <div class="quiz-feedback" data-quiz-feedback hidden aria-live="polite"></div>
        <div class="quiz-bottom"><span class="quiz-streak" data-quiz-streak>✦ COMBO 0</span><button class="button button-primary" data-quiz-next type="button" hidden>PRÓXIMA PERGUNTA →</button></div>
      </div>
      <div class="quiz-result" data-quiz-stage="result" hidden aria-live="polite"></div>
    </div>
  </section>`;
}

export function initQuizRoom(root, questions) {
  teardown?.();
  const shell = root.querySelector('#quiz-shell');
  if (!shell) return;
  const $ = (selector) => shell.querySelector(selector);
  const stages = [...shell.querySelectorAll('[data-quiz-stage]')];
  const showStage = (stage) => stages.forEach(el => el.hidden = el.dataset.quizStage !== stage);
  let pool=[],index=0,score=0,correct=0,streak=0,longestStreak=0,answers=[],clock=null,seconds=0,allSeconds=0,timeEnabled=true,questionLocked=false,activeOptions=[];
  let active = true;
  let records = {best:0,plays:0,achievements:[]};
  try { records = {...records,...JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}; } catch {};
  const recordLine = $('[data-quiz-record]');
  const updateRecord = () => { if(recordLine) recordLine.textContent = `RECORDE: ${String(records.best||0).padStart(5,'0')} PTS · ${records.plays||0} partida(s) concluída(s)`; };
  updateRecord();
  const clearClock = () => { if(clock) {clearInterval(clock);clock=null;} };
  const shuffle = (values) => [...values].sort(() => Math.random()-.5);
  const level = (difficulty) => difficulty===1 ? 'FASE 01 · INICIANTE' : difficulty===2 ? 'FASE 02 · INTERMEDIÁRIO' : 'FASE 03 · MESTRE ARCADE';
  const timeFor = (difficulty) => difficulty===1 ? 27 : difficulty===2 ? 22 : 18;
  const fmt = (s) => String(Math.max(0,Math.round(s))).padStart(2,'0');
  const updateTime = () => {
    const display=$('[data-quiz-timer-display]');
    if(display) {display.textContent=timeEnabled?`${fmt(seconds)}s`:'SEM TEMPO';display.classList.toggle('is-urgent',timeEnabled && seconds<=6);}
    const fill=$('[data-quiz-time-fill]');if(fill)fill.style.width=`${timeEnabled?Math.max(0,seconds/allSeconds)*100:100}%`;
  };
  const begin = () => {
    const mode = shell.querySelector('input[name="pixel-quiz-mode"]:checked')?.value||'campaign';
    const bank = questions||[];
    if(mode==='campaign') {
      pool=[1,2,3].flatMap(difficulty => shuffle(bank.filter(q=>q.difficulty===difficulty)).slice(0,6));
    } else {
      pool=shuffle(bank).slice(0,10).sort((a,b)=>a.difficulty-b.difficulty);
    }
    index=0;score=0;correct=0;streak=0;longestStreak=0;answers=[];
    timeEnabled=$('[data-quiz-timer]')?.checked!==false;
    showStage('game');showQuestion();
  };
  const showQuestion = () => {
    clearClock();questionLocked=false;
    const q=pool[index]; if(!q) { finish();return; }
    const color=COLOR[q.difficulty]||'#54e6ff';
    shell.style.setProperty('--quiz-accent',color);
    $('[data-quiz-level]').textContent=level(q.difficulty);
    $('[data-quiz-score]').textContent=String(score).padStart(5,'0');
    $('[data-quiz-correct]').textContent=fmt(correct);
    $('[data-quiz-count]').textContent=`PERGUNTA ${fmt(index+1)} / ${fmt(pool.length)}`;
    $('[data-quiz-topic]').textContent=q.category.toUpperCase();
    $('[data-quiz-question]').textContent=q.question;
    $('[data-quiz-image-year]').textContent=q.topic;
    $('[data-quiz-image]').src=q.image;
    $('[data-quiz-image]').alt=`Ilustração histórica temática — ${q.category}`;
    $('[data-quiz-difficulty]').textContent=['','★ INICIANTE','★★ INTERMEDIÁRIO','★★★ AVANÇADO'][q.difficulty];
    $('[data-quiz-streak]').textContent=`✦ COMBO ${streak}`;
    const prog=$('[data-quiz-progress]');prog.setAttribute('aria-valuenow',String(Math.round(index/pool.length*100)));
    $('[data-quiz-progress-fill]').style.width=`${index/pool.length*100}%`;
    $('[data-quiz-feedback]').hidden=true;
    $('[data-quiz-feedback]').replaceChildren();
    $('[data-quiz-next]').hidden=true;
    $('[data-quiz-timer-track]').hidden=!timeEnabled;
    const list=$('[data-quiz-options]');list.innerHTML='';
    activeOptions=shuffle(q.options.map((value,origin)=>({value,origin})));
    activeOptions.forEach(({value},i)=>{
      const btn=document.createElement('button');btn.className='quiz-option';btn.type='button';
      const prefix=document.createElement('span');prefix.className='quiz-option-key';prefix.textContent=String(i+1);
      const text=document.createElement('span');text.textContent=value;
      const indicator=document.createElement('span');indicator.className='quiz-option-check';indicator.textContent='◇';
      btn.append(prefix,text,indicator);
      btn.addEventListener('click',()=>choose(i));list.append(btn);
    });
    allSeconds=timeFor(q.difficulty);seconds=allSeconds;updateTime();
    if(timeEnabled) { let then=performance.now();clock=setInterval(()=>{
      if(document.hidden || !active){then=performance.now();return;}
      const now=performance.now();seconds=Math.max(0,seconds-(now-then)/1000);then=now;updateTime();
      if(seconds<=0){clearClock();choose(-1);}
    },100);}
    shell.querySelector('.quiz-question-layout')?.classList.remove('quiz-reveal');
    void shell.querySelector('.quiz-question-layout')?.offsetWidth;
    shell.querySelector('.quiz-question-layout')?.classList.add('quiz-reveal');
  };
  const choose=(buttonIndex)=>{
    if(questionLocked) return;
    questionLocked=true;clearClock();
    const q=pool[index];
    const chosen=activeOptions[buttonIndex];const success=chosen?.origin===q.correct;
    if(success){correct++;streak++;longestStreak=Math.max(streak,longestStreak);score+=100+Math.ceil(seconds*2)+(streak>1?20*(Math.min(streak,5)-1):0);}else{streak=0;}
    const buttons=[...shell.querySelectorAll('.quiz-option')];
    buttons.forEach((button,i)=>{button.disabled=true;const right=activeOptions[i].origin===q.correct;button.classList.toggle('is-correct',right);button.classList.toggle('is-wrong',i===buttonIndex&&!success);button.querySelector('.quiz-option-check').textContent=right?'✓':i===buttonIndex?'×':'◇';});
    answers.push({question:q.question,chosen:chosen?.value||'Tempo esgotado',answer:q.options[q.correct],success,explanation:q.explanation});
    $('[data-quiz-score]').textContent=String(score).padStart(5,'0');$('[data-quiz-correct]').textContent=fmt(correct);
    $('[data-quiz-streak]').textContent=`✦ COMBO ${streak}`;
    const feedback=$('[data-quiz-feedback]'); feedback.hidden=false;feedback.className=`quiz-feedback ${success?'is-good':'is-bad'}`;
    const verdict=document.createElement('strong');verdict.textContent=success?'✓ RESPOSTA CORRETA!':buttonIndex<0?'⌛ TEMPO ESGOTADO':'× QUASE! CONTINUE JOGANDO';
    const info=document.createElement('p');info.textContent=q.explanation;
    const link=document.createElement('a');link.href=q.source.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=`Fonte: ${q.source.label} ↗`;
    feedback.append(verdict,info,link);
    const next=$('[data-quiz-next]');next.hidden=false;next.textContent=index===pool.length-1?'VER RESULTADO →':'PRÓXIMA PERGUNTA →';
    $('[data-quiz-progress]').setAttribute('aria-valuenow',String(Math.round((index+1)/pool.length*100)));
    $('[data-quiz-progress-fill]').style.width=`${(index+1)/pool.length*100}%`;
  };
  const next=()=>{ if(!questionLocked)return;index++; if(index>=pool.length)finish();else showQuestion(); };
  const finish=()=>{
    clearClock();showStage('result');
    const percent=Math.round(correct/pool.length*100),earned=[];
    if(correct>=5)earned.push('✦ PRIMEIROS PASSOS');
    if(longestStreak>=3)earned.push('⚡ COMBO TRIPLO');
    if(correct>=Math.ceil(pool.length*.8))earned.push('◆ HISTORIADOR');
    if(correct===pool.length)earned.push('★ LENDA PIXEL');
    if(!timeEnabled)earned.push('◈ EXPLORADOR SEM PRESSA');
    const isRecord=score>(records.best||0);
    records.best=Math.max(score,records.best||0); records.plays=(records.plays||0)+1;
    records.achievements=[...new Set([...(records.achievements||[]),...earned])];
    try{localStorage.setItem(STORAGE_KEY,JSON.stringify(records));}catch{}
    const headline=percent===100?'HISTÓRIA DOMINADA!':percent>=70?'MISSÃO CONCLUÍDA!':percent>=40?'BOM COMEÇO!':'CONTINUE EXPLORANDO!';
    const incorrect=answers.filter(item=>!item.success);
    $('[data-quiz-stage="result"]').innerHTML=`
      <div class="quiz-result-head"><span class="eyebrow">GAME OVER · RESULTADOS</span><span class="quiz-trophy" aria-hidden="true">${percent>=80?'🏆':'★'}</span><h1>${headline}</h1><p>Você percorreu eras, descobriu curiosidades e construiu conhecimento sobre os videogames.</p></div>
      <div class="quiz-result-grid"><div><span>PONTUAÇÃO FINAL</span><strong>${String(score).padStart(5,'0')}</strong></div><div><span>ACERTOS</span><strong>${correct} / ${pool.length}</strong></div><div><span>APROVEITAMENTO</span><strong>${percent}%</strong></div></div>
      ${isRecord?'<p class="quiz-new-record">✦ NOVO RECORDE PESSOAL!</p>':''}
      <div class="quiz-earned"><h2>CONQUISTAS DESBLOQUEADAS</h2><div>${earned.length?earned.map(x=>`<span>${escapeHTML(x)}</span>`).join(''):'<span>Continue jogando para conquistar medalhas.</span>'}</div></div>
      <details class="quiz-review"><summary>REVISAR RESPOSTAS (${incorrect.length} para estudar)</summary>${incorrect.length?incorrect.map(a=>`<article><h3>${escapeHTML(a.question)}</h3><p>Sua escolha: <strong>${escapeHTML(a.chosen)}</strong></p><p>Resposta correta: <strong>${escapeHTML(a.answer)}</strong></p><p>${escapeHTML(a.explanation)}</p></article>`).join(''):'<p>Parabéns! Você acertou todas as questões desta rodada.</p>'}</details>
      <div class="quiz-result-actions"><button class="button button-primary" type="button" data-quiz-again>▶ JOGAR NOVAMENTE</button><a class="button button-quiet" href="#/sala/linha-do-tempo">EXPLORAR A HISTÓRIA →</a></div>`;
    $('[data-quiz-again]')?.addEventListener('click',()=>{showStage('intro');updateRecord();});
  };
  $('[data-quiz-start]')?.addEventListener('click',begin);
  $('[data-quiz-next]')?.addEventListener('click',next);
  const keyboard=(event)=>{
    if(!active || event.altKey || event.ctrlKey || event.metaKey || event.target.closest?.('input,textarea,select'))return;
    if($('[data-quiz-stage="game"]').hidden)return;
    if(!questionLocked && ['1','2','3','4'].includes(event.key)){choose(Number(event.key)-1);event.preventDefault();}
    if(questionLocked && event.key==='Enter'){next();event.preventDefault();}
  };
  document.addEventListener('keydown',keyboard);
  teardown=()=>{active=false;clearClock();document.removeEventListener('keydown',keyboard);};
  return teardown;
}
function escapeHTML(value) {
  return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
