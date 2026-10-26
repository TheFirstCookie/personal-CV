export const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

export const arrow = '<span aria-hidden="true">↗</span>';
export const sectionLabel = (number, title) => `<p class="eyebrow"><span>${number}</span> / ${title}</p>`;
