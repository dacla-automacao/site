export function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  
  const threshold = 400;
  let ticking = false;
  
  const update = () => {
    btn.classList.toggle('is-visible', window.scrollY > threshold);
    ticking = false;
  };
  
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  
  btn.addEventListener('click', () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });
  
  update();
}
