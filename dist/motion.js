import { createScenery } from './scenery.js';

// One shared preference controls every ambient scene and the canvas renderer.
const root = document.documentElement;
const button = document.querySelector('.motion-toggle');
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const hero = document.querySelector('.hero');
const world = createScenery(document.querySelector('.world-canvas'));
const sceneSwitch = document.querySelector('.scene-switch');
const scenes = [ ['city', 'After hours'], ['aurora', 'Northern lights'], ['daybreak', 'Daybreak'] ];
let sceneIndex = 0;
let enabled = true;
try { enabled = localStorage.getItem('cv-motion') !== 'off'; } catch { /* Storage is optional. */ }

function syncMotion() {
  const active = enabled && !preference.matches;
  root.dataset.motion = active ? 'on' : 'off';
  button.setAttribute('aria-pressed', String(active));
  button.disabled = preference.matches;
  button.querySelector('[data-motion-label]').textContent = preference.matches ? 'Reduced motion' : `Motion ${active ? 'on' : 'off'}`;
  button.querySelector('[data-motion-icon]').textContent = active ? 'Ⅱ' : '▷';
  syncWorld();
}

function syncWorld() { world?.setActive(enabled && !preference.matches && !document.hidden && hero.classList.contains('is-visible')); }
function syncVisibility() { root.dataset.pageVisible = String(!document.hidden); syncWorld(); }
button.hidden = false;
button.addEventListener('click', () => {
  enabled = !enabled;
  try { localStorage.setItem('cv-motion', enabled ? 'on' : 'off'); } catch { /* Storage is optional. */ }
  syncMotion();
});
preference.addEventListener('change', syncMotion);
document.addEventListener('visibilitychange', syncVisibility);

if (world) {
  sceneSwitch.hidden = false;
  sceneSwitch.addEventListener('click', () => {
    sceneIndex = (sceneIndex + 1) % scenes.length;
    const [mode, name] = scenes[sceneIndex];
    hero.dataset.sky = mode;
    world.setMode(mode);
    document.querySelector('[data-world-name]').textContent = name;
    document.querySelector('[data-world-announcement]').textContent = `Scenery changed to ${name}.`;
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) entry.target.classList.toggle('is-visible', entry.isIntersecting);
    syncWorld();
  }, { threshold: 0 });
  document.querySelectorAll('[data-motion-scene]').forEach(scene => observer.observe(scene));
}

// Cards follow the pointer only during interaction. Keyboard focus uses CSS.
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
for (const art of document.querySelectorAll('.project-art')) {
  let frame = 0, pointerX = 0, pointerY = 0;
  art.addEventListener('pointermove', event => {
    if (!finePointer.matches || !enabled || preference.matches) return;
    pointerX = event.clientX; pointerY = event.clientY;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const box = art.getBoundingClientRect();
      art.style.setProperty('--tilt-x', `${(0.5 - (pointerY - box.top) / box.height) * 12}deg`);
      art.style.setProperty('--tilt-y', `${((pointerX - box.left) / box.width - 0.5) * 15}deg`);
    });
  });
  art.addEventListener('pointerleave', () => {
    cancelAnimationFrame(frame); frame = 0;
    art.style.removeProperty('--tilt-x'); art.style.removeProperty('--tilt-y');
  });
}

// Highlight the section currently being explored without a scroll event loop.
const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-10% 0px -45% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => navObserver.observe(section));
}
syncMotion();
syncVisibility();
