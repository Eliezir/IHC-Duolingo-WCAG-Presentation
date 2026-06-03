/* ============================================================
   Demo do "Título da página": play -> tela cheia (toca a animação),
   Esc/clique fecha. Fora do #scaler via Fullscreen API no elemento.
   ============================================================ */
(function () {
  'use strict';
  const td   = document.getElementById('title-demo');
  const play = document.getElementById('demo-play');
  if (!td || !play) return;

  function enter() {
    const fn = td.requestFullscreen || td.webkitRequestFullscreen || td.msRequestFullscreen;
    if (fn) fn.call(td);
  }
  function isFull() { return (document.fullscreenElement || document.webkitFullscreenElement) === td; }

  play.addEventListener('click', (e) => { e.stopPropagation(); enter(); });
  // clicar no fundo (fora do navegador) em tela cheia fecha
  td.addEventListener('click', (e) => {
    if (isFull() && e.target === td) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  });

  // enquanto em tela cheia, setas/espaço não navegam os slides por trás
  window.addEventListener('keydown', (e) => {
    if (!isFull()) return;
    if (['ArrowLeft', 'ArrowRight', ' '].includes(e.key)) { e.preventDefault(); e.stopImmediatePropagation(); }
  }, true);
})();
