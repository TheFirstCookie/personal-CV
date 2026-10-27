import { escapeHtml as e, sectionLabel, arrow } from '../html.mjs';
import { sunset } from '../components/landscapes.mjs';

export function contact(cv) {
  return `<section class="contact-section motion-scene" data-motion-scene id="contact" aria-labelledby="contact-title">${sunset()}<div class="container">
    ${sectionLabel('05', 'Get in touch')}
    <div class="contact-grid"><div><h2 id="contact-title">Let’s start<br>a conversation<span>.</span></h2><p>Looking for a curious developer ready to contribute?<br>Let’s talk about your team and projects.</p></div><div class="contact-links"><a class="email-link" href="mailto:${e(cv.email)}"><span class="overline">Send a hello</span><span>${e(cv.email)} ${arrow}</span></a><a class="social-link" href="${e(cv.linkedin)}" target="_blank" rel="noopener noreferrer"><span>LinkedIn <small>Daniel Mihaila</small></span>${arrow}<span class="sr-only"> (opens in a new tab)</span></a><a class="social-link" href="${e(cv.github)}" target="_blank" rel="noopener noreferrer"><span>GitHub <small>@TheFirstCookie</small></span>${arrow}<span class="sr-only"> (opens in a new tab)</span></a><p>Chișinău, Moldova</p></div></div>
  </div></section>`;
}
