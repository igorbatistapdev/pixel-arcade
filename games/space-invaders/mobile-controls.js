/* Controles de toque do Space Invaders — preserva a lógica de teclado original. */
(() => {
  const buttons = [...document.querySelectorAll('[data-invader-key]')];
  const active = new Map();
  const send = (key, type) => window.dispatchEvent(new KeyboardEvent(type, { key, bubbles:true, cancelable:true }));
  const release = button => {
    const pointer = active.get(button);
    if (pointer === undefined) return;
    active.delete(button);
    button.classList.remove('is-pressed');
    send(button.dataset.invaderKey, 'keyup');
  };
  buttons.forEach(button => {
    button.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      event.preventDefault();
      if (active.has(button)) return;
      active.set(button, event.pointerId);
      button.classList.add('is-pressed');
      try { button.setPointerCapture(event.pointerId); } catch (_) {}
      send(button.dataset.invaderKey, 'keydown');
    });
    for (const name of ['pointerup','pointercancel','lostpointercapture']) {
      button.addEventListener(name, () => release(button));
    }
    button.addEventListener('contextmenu', event => event.preventDefault());
  });
  window.addEventListener('blur', () => buttons.forEach(release));
  document.addEventListener('visibilitychange', () => { if(document.hidden) buttons.forEach(release); });
})();
