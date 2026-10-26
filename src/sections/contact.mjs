import { escapeHtml as e, sectionLabel, arrow } from '../html.mjs';

export function contact(cv) {
  return `<section class="contact-section" id="contact" aria-labelledby="contact-title"><div class="container">
    ${sectionLabel('04', 'Get in touch')}
    <div class="contact-grid"><div><h2 id="contact-title">Let’s start<br>a conversation<span>.</span></h2><p>Have a part-time opportunity in IT?<br>I’d be happy to hear from you.</p></div><div class="contact-links"><a class="email-link" href="mailto:${e(cv.email)}"><span class="overline">Email me</span><span>${e(cv.email)} ${arrow}</span></a><a class="phone-link" href="tel:${e(cv.phoneHref)}">${e(cv.phone)} ${arrow}</a><p>Chișinău, Moldova <span aria-hidden="true">·</span> On-site or hybrid</p></div></div>
  </div></section>`;
}
