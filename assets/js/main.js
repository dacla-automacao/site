import { initNav } from './modules/nav.js';
import { initYear } from './modules/year.js';
import { initBackToTop } from './modules/backToTop.js';
import { initServicesCarousel } from './modules/servicesCarousel.js';
import { initProductsCarousel } from './modules/productsCarousel.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initYear();
  initBackToTop();
  initServicesCarousel();
  initProductsCarousel();
});
