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
    return `<g><path fill="${i % 2 ? '#172637' : '#1c2d40'}" d="M${x} 710V${top}h${w}v${h}z"/><path fill="#3e4856" d="M${x} ${top}h${w}v3h-${w}z"/>${x > 730 ? `<path fill="#172637" d="M${x + 24} ${top}v-14h22v14z"/><g class="city-window-group" style="--window-delay:-${i * 2.3}s">${windows(x + 12, top + 20, Math.floor((w - 20) / 16), Math.floor((h - 30) / 22), i % 3 ? '#d3ac7d' : '#90abb3', i)}</g>` : ''}</g>`;
  }).join('');
  return `<svg class="night-city" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMax slice" fill="none" aria-hidden="true" shape-rendering="crispEdges">
    <defs><linearGradient id="night-sky" x1="0" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse"><stop stop-color="#101a2c"/><stop offset=".55" stop-color="#202c43"/><stop offset="1" stop-color="#3c3d50"/></linearGradient><clipPath id="city-water-clip"><path d="M0 708h1600v83H0z"/></clipPath></defs>
    <path fill="url(#night-sky)" d="M0 0h1600v800H0z"/>
    <g class="city-stars" fill="#d3cdbb">${Array.from({ length: 52 }, (_, i) => `<path opacity="${i % 3 ? '.4' : '.7'}" d="M${(i * 197 + 47) % 1590} ${30 + (i * 53) % 380}h2v2h-2z"/>`).join('')}</g>
    <g class="city-cloud city-cloud-far" fill="#647085" opacity=".22"><path d="M800 168h58v-9h70v9h44v8H800zM1190 242h45v-10h98v10h80v8h-223zM230 99h45v-8h78v8h40v7H230z"/></g>
    <g class="city-cloud city-cloud-near" fill="#7b7b8d" opacity=".22"><path d="M1258 150h55v-8h72v8h70v8h-197zM650 285h40v-9h75v9h55v8H650z"/></g>
    ${distant}
    <path fill="#243346" d="M0 627h1600v173H0z"/>
    ${buildings}

    <path fill="#122431" d="M0 708h1600v92H0z"/>
    <g class="city-water" clip-path="url(#city-water-clip)">
      <g class="city-reflections"><g fill="#bd996d" opacity=".2"><path d="M284 717h12v2h-12zm-4 12h20v2h-20zm7 13h9v2h-9z"/></g>${Array.from({length: 8}, (_, i) => {
        const x=786+i*105, shade=i%3 ? '#bd996d' : '#8eafb4';
        return '<g opacity=".26">'+Array.from({length: 5}, (_, j) => '<path fill="'+shade+'" d="M'+(x+(j%2?3:-4))+' '+(716+j*12)+'h'+(12+(i+j)%4*4)+'v2h-'+(12+(i+j)%4*4)+'z"/>').join('')+'</g>';
      }).join('')}</g>
      <g class="city-ripples" stroke="#52717a" stroke-width="1" opacity=".3">${Array.from({length: 20}, (_, i) => `<path d="M${30 + i * 79} ${725 + (i * 17) % 61}h${16 + (i * 13) % 34}"/>`).join('')}</g>
      <g class="city-ferry"><path fill="#ba8065" d="M-126 753h112l-10 9h-88z"/><path fill="#e0ba91" d="M-126 753h112v2h-112z"/><path fill="#64828a" d="M-114 744h84v9h-84z"/><path fill="#b6b9a2" d="M-100 737h50v7h-50z"/><path fill="#d9be87" d="M-106 746h10v4h-10zm17 0h10v4h-10zm17 0h10v4h-10zm17 0h10v4h-10z"/><path fill="#d7ad76" d="M-16 751h3v2h-3z"/><path stroke="#718a89" stroke-opacity=".4" d="M-158 758h28m-45 5h36"/></g>
    </g>
    <g class="city-quay">
      <path fill="#293d48" d="M0 687h1600v14H0z"/><path fill="#5c6a6b" d="M0 687h1600v2H0z"/><path fill="#0d1d29" d="M0 701h1600v7H0z"/>
      <path stroke="#425761" stroke-width="2" d="M0 677h1600M0 684h1600"/>
      ${Array.from({length: 41},(_,i)=>'<path fill="#425761" d="M'+(i*40)+' 677h2v11h-2z"/>').join('')}
      ${[290,610,930,1250,1540].map(x=>'<g class="city-lamp"><path fill="#d8bf8b" opacity=".055" d="M'+(x-9)+' 650h18l26 37h-70z"/><path fill="#6c807f" d="M'+x+' 650h3v37h-3zm-3 33h9v4h-9zm-6-38h15v3h-15z"/><path fill="#e2c591" d="M'+(x-6)+' 648h15v3h-15z"/></g>').join('')}
      <path fill="#62716a" d="M1120 675h33v3h-33zm2 6h29v3h-29z"/><path fill="#394f53" d="M1123 678h2v9h-2zm24 0h2v9h-2z"/>
    </g>
    <path fill="#162735" d="M0 791h1600v9H0z"/>
  </svg><svg class="city-moon" xmlns="http://www.w3.org/2000/svg" viewBox="1280 80 130 140" fill="none" aria-hidden="true" shape-rendering="crispEdges">    <path fill="#e8c99b" d="M1320 94h42v8h18v10h12v18h8v42h-8v18h-12v10h-18v8h-42v-8h-18v-10h-12v-18h-8v-42h8v-18h12v-10h18z"/>
    <path fill="#c2a989" d="M1300 150h16v12h-16zm46-38h14v8h-14zm8 54h22v8h-22z"/>
</svg>`;
}
