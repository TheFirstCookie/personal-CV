// One full-width illustration: the sky, skyline, and waterfront share coordinates.
const windows = (x, y, columns, rows, tone, offset = 0) => {
  let result = '';
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if ((row * 3 + col * 2 + offset) % 5 === 0) continue;
      result += `<rect x="${x + col * 16}" y="${y + row * 22}" width="4" height="7" fill="${tone}" opacity="${(row + col + offset) % 4 === 0 ? '.25' : '.7'}"/>`;
    }
  }
  return result;
};

export function nightCity() {
  const distant = Array.from({ length: 29 }, (_, i) => {
    const x = i * 58 - 20, h = x < 700 ? 45 + (i * 29) % 65 : 90 + (i * 43) % 155;
    return `<path fill="${i % 2 ? '#263449' : '#2d394e'}" d="M${x} 635V${635 - h}h44v${h}z"/>`;
  }).join('');
  const buildings = Array.from({ length: 16 }, (_, i) => {
    const x = i * 108 - 18, h = x < 730 ? 68 + (i * 23) % 55 : 150 + (i * 47) % 195;
    const top = 710 - h, w = 70 + i % 3 * 12;
    return `<g><path fill="${i % 2 ? '#172637' : '#1c2d40'}" d="M${x} 710V${top}h${w}v${h}z"/><path fill="#3e4856" d="M${x} ${top}h${w}v3h-${w}z"/>${x > 730 ? `<path fill="#172637" d="M${x + 24} ${top}v-14h22v14z"/>${windows(x + 12, top + 20, Math.floor((w - 20) / 16), Math.floor((h - 30) / 22), i % 3 ? '#d3ac7d' : '#90abb3', i)}` : ''}</g>`;
  }).join('');
  return `<svg class="night-city" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMax slice" fill="none" aria-hidden="true" shape-rendering="crispEdges">
    <defs><linearGradient id="night-sky" x1="0" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse"><stop stop-color="#101a2c"/><stop offset=".55" stop-color="#202c43"/><stop offset="1" stop-color="#3c3d50"/></linearGradient></defs>
    <path fill="url(#night-sky)" d="M0 0h1600v800H0z"/>
    <g class="city-stars" fill="#d3cdbb">${Array.from({ length: 52 }, (_, i) => `<path opacity="${i % 3 ? '.4' : '.7'}" d="M${(i * 197 + 47) % 1590} ${30 + (i * 53) % 380}h2v2h-2z"/>`).join('')}</g>
    <path fill="#e8c99b" d="M1320 94h42v8h18v10h12v18h8v42h-8v18h-12v10h-18v8h-42v-8h-18v-10h-12v-18h-8v-42h8v-18h12v-10h18z"/>
    <path fill="#c2a989" d="M1300 150h16v12h-16zm46-38h14v8h-14zm8 54h22v8h-22z"/>
    <g class="city-cloud city-cloud-far" fill="#647085" opacity=".22"><path d="M800 168h58v-9h70v9h44v8H800zM1190 242h45v-10h98v10h80v8h-223zM230 99h45v-8h78v8h40v7H230z"/></g>
    <g class="city-cloud city-cloud-near" fill="#7b7b8d" opacity=".22"><path d="M1258 150h55v-8h72v8h70v8h-197zM650 285h40v-9h75v9h55v8H650z"/></g>
    ${distant}
    <path fill="#243346" d="M0 627h1600v173H0z"/>
    ${buildings}
    <path fill="#101e2c" d="M0 704h1600v96H0z"/>
    <path fill="#40505a" d="M0 704h1600v3H0z"/>
    <g fill="#80908a" opacity=".28"><path d="M914 731h38v2h-38zm130 28h65v2h-65zm139-28h23v2h-23zm-178 55h42v2h-42zm326-34h83v2h-83zm161 28h49v2h-49z"/></g>
    <path fill="#111f2d" d="M780 638h820v15H780z"/><path fill="#58616a" d="M780 638h820v3H780z"/>
    <path stroke="#263848" stroke-width="5" d="M820 650v54m130-54v54m130-54v54m130-54v54m130-54v54m130-54v54"/>
    <g class="city-train"><path fill="#7f979c" d="M810 619h128v4h10v13H810z"/><path fill="#edce9b" d="M820 623h13v7h-13zm23 0h13v7h-13zm23 0h13v7h-13zm23 0h13v7h-13zm23 0h13v7h-13z"/><path fill="#213140" d="M810 634h138v3H810z"/></g>
    <g fill="#10202c"><path d="M0 775h1040v25H0zm1100-25h500v50h-500z"/></g>
    <g fill="#62736e"><path d="M1140 690h3v60h-3zm350-15h3v75h-3z"/></g>
    <g class="city-lights" fill="#e1bd86"><path d="M1134 685h15v5h-15zm350-15h15v5h-15z"/></g>
    <path fill="#162735" d="M0 791h1600v9H0z"/>
  </svg>`;
}
