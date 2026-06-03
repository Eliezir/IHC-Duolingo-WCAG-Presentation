/* ============================================================
   Demos em tela cheia (.fs-demo): o botão .demo-play abre o
   elemento em tela cheia (Fullscreen API, fora do #scaler).
   - demos com CSS :fullscreen tocam a animação (ex.: título)
   - demos com <video> só dão play quando entram em tela cheia
   Esc / clique no fundo fecha; setas/espaço não navegam por trás.
   ============================================================ */
(function () {
  'use strict';
  const demos = Array.from(document.querySelectorAll('.fs-demo'));
  if (!demos.length) return;

  const reqFS  = (el) => (el.requestFullscreen || el.webkitRequestFullscreen || function () {}).call(el);
  const exitFS = ()   => (document.exitFullscreen || document.webkitExitFullscreen || function () {}).call(document);
  const fsEl   = ()   => document.fullscreenElement || document.webkitFullscreenElement || null;

  demos.forEach((demo) => {
    const btn = demo.querySelector('.demo-play');
    if (btn) btn.addEventListener('click', (e) => { e.stopPropagation(); reqFS(demo); });
    demo.addEventListener('click', (e) => { if (fsEl() === demo && e.target === demo) exitFS(); });
  });

  function sync() {
    const cur = fsEl();
    document.querySelectorAll('.fs-demo video').forEach((v) => {
      if (v.closest('.fs-demo') === cur) { try { v.currentTime = 0; v.play(); } catch (e) {} }
      else v.pause();
    });
  }
  document.addEventListener('fullscreenchange', sync);
  document.addEventListener('webkitfullscreenchange', sync);

  // em tela cheia de um demo, setas/espaço não trocam os slides por trás
  window.addEventListener('keydown', (e) => {
    const cur = fsEl();
    if (!cur || !cur.classList || !cur.classList.contains('fs-demo')) return;
    if (['ArrowLeft', 'ArrowRight', ' '].includes(e.key)) { e.preventDefault(); e.stopImmediatePropagation(); }
  }, true);
})();
