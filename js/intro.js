/* ============================================================
   Intro cinemática (slide 1): tela do Google parada →
   clicar em "Pesquisa Google" digita "duolingo" → loader → capa.
   ============================================================ */
(function () {
  'use strict';
  const hero = document.querySelector('.slide.intro');
  if (!hero) return;

  const sGoogle = hero.querySelector('.scene-google');
  const sLoader = hero.querySelector('.scene-loader');
  const sCover  = hero.querySelector('.scene-cover');
  const typed   = hero.querySelector('.g-typed');
  const search  = hero.querySelector('#g-search');
  const WORD = 'duolingo';

  let timers = [];
  let playing = false;
  const T = (fn, ms) => timers.push(setTimeout(fn, ms));
  const clearAll = () => { timers.forEach(clearTimeout); timers = []; };

  // Estado inicial: só a tela do Google, caixa vazia, botão pronto.
  function arm() {
    clearAll();
    playing = false;
    [sLoader, sCover].forEach(s => s && s.classList.remove('show'));
    sGoogle.classList.remove('show-sugg', 'aiming', 'clicking', 'playing');
    if (typed) typed.textContent = '';
    sGoogle.classList.add('show');
  }

  // Dispara a animação (chamado pelo botão "Pesquisa Google").
  function play() {
    if (playing) return;
    playing = true;
    clearAll();
    sGoogle.classList.add('show', 'playing');

    // Cena 1 — digita "duolingo"
    const t0 = 350;          // começa a digitar logo após o clique
    const per = 150;         // ms por caractere
    for (let i = 0; i < WORD.length; i++) {
      T(() => { typed.textContent = WORD.slice(0, i + 1); }, t0 + i * per);
    }
    const typedEnd = t0 + WORD.length * per;

    // sugestões aparecem → cursor voa até "duolingo" → clica
    T(() => sGoogle.classList.add('show-sugg'), typedEnd + 250);
    T(() => sGoogle.classList.add('aiming'),    typedEnd + 600);
    T(() => sGoogle.classList.add('clicking'),  typedEnd + 1250);

    // Cena 2 — Loader
    const loaderAt = typedEnd + 1700;
    T(() => { sGoogle.classList.remove('show'); sLoader.classList.add('show'); }, loaderAt);

    // Cena 3 — Capa (loader fica mais tempo na tela)
    T(() => { sLoader.classList.remove('show'); sCover.classList.add('show'); }, loaderAt + 4000);
  }

  if (search) {
    search.addEventListener('click', play);
    search.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); play(); }
    });
  }

  // arma o estado inicial ao abrir e sempre que o slide 1 volta a ficar ativo
  if (hero.classList.contains('active')) arm();
  const mo = new MutationObserver(() => {
    if (hero.classList.contains('active')) arm();
    else clearAll();
  });
  mo.observe(hero, { attributes: true, attributeFilter: ['class'] });
})();
