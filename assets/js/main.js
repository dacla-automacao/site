import { initNav } from './modules/nav.js';
import { initYear } from './modules/year.js';
import { initScrollSpy } from './modules/scrollspy.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initYear();
  initScrollSpy();
});
