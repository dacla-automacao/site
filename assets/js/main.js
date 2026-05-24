import { initNav } from './modules/nav.js';
import { initYear } from './modules/year.js';
import { initBackToTop } from './modules/backToTop.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initYear();
  initBackToTop();
});
