export function initServicesCarousel() {
  const grid = document.querySelector('.services-grid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.service-card'));
  if (cards.length === 0) return;

  const mql = window.matchMedia('(max-width: 720px)');
  let dotsEl = null;
  let dotButtons = [];
  let observer = null;

  const prefersReduced = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setActive = (idx) => {
    dotButtons.forEach((btn, i) => {
      btn.setAttribute('aria-current', i === idx ? 'true' : 'false');
    });
  };

  const enable = () => {
    if (dotsEl) return;

    dotsEl = document.createElement('div');
    dotsEl.className = 'services-dots';
    dotsEl.setAttribute('aria-label', 'Selecionar serviço em destaque');

    cards.forEach((card, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'services-dot';
      btn.setAttribute('aria-label', `Ir para o serviço ${i + 1} de ${cards.length}`);
      btn.setAttribute('aria-current', i === 0 ? 'true' : 'false');
      btn.addEventListener('click', () => {
        card.scrollIntoView({
          behavior: prefersReduced() ? 'auto' : 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      });
      dotsEl.appendChild(btn);
      dotButtons.push(btn);
    });

    grid.insertAdjacentElement('afterend', dotsEl);
    grid.setAttribute('aria-roledescription', 'carrossel');

    observer = new IntersectionObserver(
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
      { root: grid, threshold: [0.55, 0.75, 0.95] }
    );
    cards.forEach((c) => observer.observe(c));
  };

  const disable = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    if (dotsEl) {
      dotsEl.remove();
      dotsEl = null;
    }
    dotButtons = [];
    grid.removeAttribute('aria-roledescription');
  };

  const apply = () => {
    if (mql.matches) enable();
    else disable();
  };

  apply();
  mql.addEventListener('change', apply);
}
