export function initScrollSpy() {
  const links = document.querySelectorAll('.primary-nav a[href^="#"]');
  if (!links.length || !('IntersectionObserver' in window)) return;

  const map = new Map();
  links.forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) map.set(target, link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = map.get(entry.target);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  map.forEach((_, target) => observer.observe(target));
}
