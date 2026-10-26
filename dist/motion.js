// CSS does the animation. JS only handles visibility and the user's preference.
const root = document.documentElement;
const button = document.querySelector('.motion-toggle');
const preference = matchMedia('(prefers-reduced-motion: reduce)');
let enabled = true;
try { enabled = localStorage.getItem('cv-motion') !== 'off'; } catch { /* Storage is optional. */ }

function syncMotion() {
  const active = enabled && !preference.matches;
  root.dataset.motion = active ? 'on' : 'off';
  button.setAttribute('aria-pressed', String(active));
  button.disabled = preference.matches;
  button.querySelector('[data-motion-label]').textContent = preference.matches ? 'Reduced motion' : `Motion ${active ? 'on' : 'off'}`;
  button.querySelector('[data-motion-icon]').textContent = active ? 'Ⅱ' : '▷';
}

function syncVisibility() { root.dataset.pageVisible = String(!document.hidden); }
button.hidden = false;
button.addEventListener('click', () => {
  enabled = !enabled;
  try { localStorage.setItem('cv-motion', enabled ? 'on' : 'off'); } catch { /* Storage is optional. */ }
  syncMotion();
});
preference.addEventListener('change', syncMotion);
document.addEventListener('visibilitychange', syncVisibility);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) entry.target.classList.toggle('is-visible', entry.isIntersecting);
  }, { threshold: 0 });
  document.querySelectorAll('[data-motion-scene]').forEach(scene => observer.observe(scene));
}
syncMotion();
syncVisibility();
