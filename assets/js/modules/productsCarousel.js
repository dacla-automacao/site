export function initProductsCarousel() {
  const grid = document.querySelector('.products-grid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.product-card'));
  if (cards.length === 0) return;

  const prefersReduced = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Envolve o grid em .products-carousel para posicionar as setas. */
  const wrapper = document.createElement('div');
  wrapper.className = 'products-carousel';
  grid.parentNode.insertBefore(wrapper, grid);
  wrapper.appendChild(grid);

  const makeArrow = (dir) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `products-arrow products-arrow-${dir}`;
    btn.setAttribute('aria-label', dir === 'prev' ? 'Produto anterior' : 'Próximo produto');
    btn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="none" stroke="currentColor" stroke-width="2.2"
            stroke-linecap="round" stroke-linejoin="round"
            d="${dir === 'prev' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}"/>
    </svg>`;
    return btn;
  };
  const prevBtn = makeArrow('prev');
  const nextBtn = makeArrow('next');
  wrapper.appendChild(prevBtn);
  wrapper.appendChild(nextBtn);

  /* Dots — um por card. */
  const dotsEl = document.createElement('div');
  dotsEl.className = 'products-dots';
  dotsEl.setAttribute('aria-label', 'Selecionar produto');
  const dotButtons = cards.map((card, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'products-dot';
    btn.setAttribute('aria-label', `Ir para o produto ${i + 1} de ${cards.length}`);
    btn.setAttribute('aria-current', i === 0 ? 'true' : 'false');
    btn.addEventListener('click', () => {
      card.scrollIntoView({
        behavior: prefersReduced() ? 'auto' : 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    });
    dotsEl.appendChild(btn);
    return btn;
  });
  wrapper.parentNode.insertBefore(dotsEl, wrapper.nextSibling);

  grid.setAttribute('aria-roledescription', 'carrossel');

  /* Navegação por "página" (largura do card + gap horizontal). */
  const scrollByPage = (dir) => {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
    const delta = (cardWidth + gap) * (dir === 'next' ? 1 : -1);
    grid.scrollBy({
      left: delta,
      behavior: prefersReduced() ? 'auto' : 'smooth',
    });
  };
  prevBtn.addEventListener('click', () => scrollByPage('prev'));
  nextBtn.addEventListener('click', () => scrollByPage('next'));

  /* Dot ativo via IntersectionObserver. */
  const setActive = (idx) => {
    dotButtons.forEach((btn, i) => {
      btn.setAttribute('aria-current', i === idx ? 'true' : 'false');
    });
  };
  const observer = new IntersectionObserver(
    (entries) => {
      let bestIdx = -1;
      let bestRatio = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
          const idx = cards.indexOf(entry.target);
          if (idx >= 0) {
            bestRatio = entry.intersectionRatio;
            bestIdx = idx;
          }
        }
      });
      if (bestIdx >= 0) setActive(bestIdx);
    },
    { root: grid, threshold: [0.55, 0.8, 0.95] }
  );
  cards.forEach((c) => observer.observe(c));

  /* Esconde controles quando tudo já cabe sem scroll
     (evita UI de navegação inútil). */
  const updateControls = () => {
    const scrollable = grid.scrollWidth - grid.clientWidth > 1;
    prevBtn.hidden = !scrollable;
    nextBtn.hidden = !scrollable;
    dotsEl.hidden = !scrollable;
    if (!scrollable) return;
    const max = grid.scrollWidth - grid.clientWidth;
    prevBtn.disabled = grid.scrollLeft <= 1;
    nextBtn.disabled = grid.scrollLeft >= max - 1;
  };
  let ticking = false;
  grid.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateControls();
      ticking = false;
    });
  }, { passive: true });
  window.addEventListener('resize', updateControls);
  updateControls();
}
