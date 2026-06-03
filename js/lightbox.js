/* ============================================================
   Lightbox com carrossel — clicar numa imagem abre em tela cheia.
   Imagens do mesmo grupo (ex.: o mural de relatos) podem ser
   percorridas com ‹ ›, setas do teclado ou os botões.
   Fica fora do #scaler, cobrindo o viewport real (sem escala).
   ============================================================ */
(function () {
  'use strict';
  const lb      = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev  = document.getElementById('lightbox-prev');
  const lbNext  = document.getElementById('lightbox-next');
  const lbCount = document.getElementById('lightbox-count');
  if (!lb || !lbImg) return;

  let group = [];   // [{src, alt}]
  let idx = 0;

  function render() {
    const it = group[idx];
    if (!it) return;
    lbImg.src = it.src;
    lbImg.alt = it.alt || '';
    const multi = group.length > 1;
    lbPrev.style.display = multi ? '' : 'none';
    lbNext.style.display = multi ? '' : 'none';
    lbCount.style.display = multi ? '' : 'none';
    if (multi) lbCount.textContent = (idx + 1) + ' / ' + group.length;
  }
  function go(delta) { idx = (idx + delta + group.length) % group.length; render(); }
  function close() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    lbImg.removeAttribute('src');
    group = [];
  }

  // monta o grupo a partir da imagem clicada (mesmo .complaints = carrossel)
  function openFrom(img) {
    const gallery = img.closest('.complaints');
    let imgs;
    if (gallery) imgs = Array.from(gallery.querySelectorAll('.complaint img'));
    else imgs = [img];
    group = imgs.map(x => ({ src: x.currentSrc || x.src, alt: x.alt }));
    idx = Math.max(0, imgs.indexOf(img));
    render();
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
  }

  document.querySelectorAll('.browser-shot img, .shot img, .complaint img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => { e.stopPropagation(); openFrom(img); });
  });

  // deck (pilha): clicar em qualquer ponto abre pelo card da frente
  document.querySelectorAll('.complaints.stack').forEach(st => {
    st.addEventListener('click', () => {
      const imgs = st.querySelectorAll('.complaint img');
      if (imgs.length) openFrom(imgs[imgs.length - 1]);
    });
  });

  lb.addEventListener('click', close);                       // clicar no fundo fecha
  lbImg.addEventListener('click', (e) => e.stopPropagation()); // na imagem, não fecha
  lbClose.addEventListener('click', (e) => { e.stopPropagation(); close(); });
  lbPrev.addEventListener('click', (e) => { e.stopPropagation(); go(-1); });
  lbNext.addEventListener('click', (e) => { e.stopPropagation(); go(1); });

  // teclado (captura, pra não navegar os slides por trás)
  window.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); close(); }
    else if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); e.stopImmediatePropagation(); go(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); e.stopImmediatePropagation(); go(-1); }
  }, true);
})();
