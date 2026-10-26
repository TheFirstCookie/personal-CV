// Generated once at build time. Browser motion uses only CSS opacity/transform.
const windows = (x, y, columns, rows, tone, offset = 0) => {
  let result = '';
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if ((row * 3 + col * 2 + offset) % 5 === 0) continue;
      const dim = (row + col + offset) % 4 === 0;
      result += `<rect x="${x + col * 16}" y="${y + row * 21}" width="5" height="8" fill="${tone}" opacity="${dim ? '.25' : '.8'}"/>`;
    }
  }
  return result;
};

export function nightCity() {
  return `<svg class="night-city" xmlns="http://www.w3.org/2000/svg" width="600" height="520" viewBox="0 0 600 520" fill="none" aria-hidden="true" shape-rendering="crispEdges">
    <defs><linearGradient id="night-sky" x2="0" y2="1"><stop stop-color="#111a32"/><stop offset=".65" stop-color="#333048"/><stop offset="1" stop-color="#a46147"/></linearGradient><linearGradient id="city-haze" x2="0" y2="1"><stop stop-color="#efab73" stop-opacity="0"/><stop offset="1" stop-color="#efab73" stop-opacity=".12"/></linearGradient></defs>
    <path fill="url(#night-sky)" d="M0 0h600v520H0z"/>
    <g fill="#cbd7e5" opacity=".55"><path d="M38 55h3v3h-3zm71 58h2v2h-2zm83-77h2v2h-2zm62 64h3v3h-3zm-98 63h2v2h-2zm180-123h2v2h-2zm193 57h3v3h-3zm-48 63h2v2h-2zm-444 44h2v2h-2zm271-34h2v2h-2z"/></g>
    <g class="city-stars" fill="#e7d4ad"><path d="M89 43h3v9h-3zm-3 3h9v3h-9zm202 16h3v9h-3zm-3 3h9v3h-9zm228-44h3v9h-3zm-3 3h9v3h-9zm34 164h3v9h-3zm-3 3h9v3h-9z"/></g>
    <path fill="#f3c68e" d="M412 56h40v8h16v8h8v16h8v40h-8v16h-8v8h-16v8h-40v-8h-16v-8h-8v-16h-8V88h8V72h8v-8h16z"/>
    <path fill="#dbac79" d="M400 120h16v16h-16zm44-48h16v8h-16zm0 56h24v8h-24z"/>
    <g class="city-cloud city-cloud-far" fill="#49516a" opacity=".45"><path d="M310 166h32v-8h56v8h32v8h32v8H294v-8h16zM24 99h24v-8h48v8h40v8H16v-8z"/></g>
    <g class="city-cloud city-cloud-near" fill="#747185" opacity=".35"><path d="M386 112h40v-8h64v8h32v8h32v8H370v-8h16zM140 202h40v-8h48v8h48v8H124v-8h16z"/></g>
    <path fill="#343445" d="M0 280h20v-40h32v32h24v-56h32v-16h8v16h24v64h24v-40h40v-24h24v-32h8v32h24v48h32v-32h40v-48h8v48h32v48h24v-72h40v32h32v-48h40v72h32v-40h40v56h40v-88h32v72h20v-32h28v224H0z"/>
    <path fill="url(#city-haze)" d="M0 230h600v100H0z"/>
    <path fill="#202735" d="M0 314h32V208h88v106h32v-32h60v-58h64v104h44v-60h80v48h32V190h72v132h40v-44h56v242H0z"/>
    <path fill="#4a4650" d="M32 208h88v5H32zm180 16h64v5h-64zm220-34h72v5h-72z"/>
    <path fill="#202735" d="M456 174h24v16h-24zm10-32h4v32h-4z"/>
    ${windows(46, 228, 4, 5, '#e9b87d')}
    ${windows(224, 243, 3, 3, '#a9c1c9', 1)}
    ${windows(446, 211, 3, 6, '#e9b87d', 2)}
    <g class="city-lights">${windows(336, 284, 3, 3, '#efbf8f', 3)}</g>
    <path fill="#131c26" d="M0 348h600v15H0z"/><path fill="#776b65" d="M0 348h600v3H0z"/>
    <path stroke="#333a44" stroke-width="3" d="M18 353v41m88-41v41m88-41v41m88-41v41m88-41v41m88-41v41m88-41v41"/>
    <g class="city-train"><path fill="#a9afa2" d="M0 329h96v4h8v12H0z"/><path fill="#edc486" d="M8 333h10v6H8zm17 0h10v6H25zm17 0h10v6H42zm17 0h10v6H59zm17 0h10v6H76z"/><path fill="#e9ad76" d="M100 338h4v4h-4z"/><path fill="#242936" d="M0 343h104v3H0z"/></g>
    <path fill="#0f171e" d="M0 400h38v-33h100v33h48v-16h110v32h48v-40h92v24h36v-42h128v162H0z"/>
    <path fill="#303937" d="M38 367h100v6H38zm148 17h110v6H186zm158-8h92v6h-92zm128-18h128v6H472z"/>
    <path fill="#f1b277" d="M57 395h12v18H57zm30 0h12v18H87zm-30 39h12v18H57zm30 0h12v18H87zm115-21h18v8h-18zm26 0h18v8h-18zm26 0h18v8h-18z" opacity=".75"/>
    <path fill="#111b1b" d="M454 450h146v70H454z"/>
    <path stroke="#43504a" stroke-width="4" d="M474 395h94v39h-94z"/>
    <g fill="#ffab68"><path d="M492 406h5v5h-5zm-5 5h5v5h-5zm5 5h5v5h-5zm51-10h5v5h-5zm5 5h5v5h-5zm-5 5h5v5h-5zM521 403h5v7h-5zm-5 7h5v7h-5zm-5 7h5v7h-5z"/></g>
    <path stroke="#43504a" stroke-width="3" d="M484 435v15m74-15v15"/>
    <path fill="#0a1116" d="M0 480h600v40H0z"/><path fill="#42453b" d="M0 478h600v5H0z"/>
    <path fill="#70715a" d="M330 424h5v54h-5z"/><path fill="#e8bc83" d="M320 419h25v7h-25z"/>
    <path fill="#b49069" d="M383 450h10v10h-10z"/><path fill="#859281" d="M379 460h18v13h-18z"/><path fill="#303b3b" d="M381 473h6v7h-6zm10 0h6v7h-6z"/>
    <path fill="#72573f" d="M45 494h60v2H45zm170 12h33v2h-33zm240-11h73v2h-73z"/>
  </svg>`;
}
