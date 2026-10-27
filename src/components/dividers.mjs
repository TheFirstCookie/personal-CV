// Small, static illustrations mark the chapter changes without extra motion.
const pine = (x, y, color) => `<path fill="${color}" d="M${x} ${y}l-16 23h9l-18 25h18v13h14V${y + 48}h18l-18-25h9z"/>`;

function desk() {
  const books = [ '#b5866c', '#9db5ac', '#c4b083', '#857f9d' ];
  return `<path fill="#344853" d="M0 0h1600v96H0z"/>
    <path stroke="#536875" stroke-width="2" d="M0 24h1600M0 64h1600M200 0v78m400-78v78m400-78v78m400-78v78"/>
    <path fill="#9cbdc3" d="M250 12h116v53H250zm906 0h140v53h-140z"/>
    <path stroke="#344853" stroke-width="5" d="M308 12v53m-58-27h116m860-26v53m-70-27h140"/>
    ${[480, 1018].map(x => books.map((color, i) => `<path fill="${color}" d="M${x + i * 14} ${44 - i % 2 * 8}h10v${34 + i % 2 * 8}h-10z"/>`).join('')).join('')}
    <path fill="#192b38" d="M720 12h136v64H720z"/><path fill="#69888d" d="M725 17h126v53H725z"/><path fill="#1b303d" d="M730 22h116v43H730z"/>
    <path stroke="#c1d99a" stroke-width="3" d="m746 36-7 6 7 6m20-12 7 6-7 6m-11 5 6-22m27 11h29m-29 9h19"/>
    <path fill="#9badad" d="M710 76h156v5H710z"/>
    <path fill="#c8aa88" d="M925 58h24v20h-24z"/><path fill="#81a088" d="M935 58V27h6v31zm0-12h-15V31h9v9h6zm6-13h16V19h-9v8h-7z"/>
    <path fill="#c9b489" d="M641 76h9V32h32v-6h-38v6h-3z"/><path fill="#e4d0a6" d="M661 32h43v8h-43z"/>
    <path fill="#bd9d7b" d="M0 81h1600v5H0z"/><path fill="#6e5851" d="M0 86h1600v10H0z"/>`;
}

function campus() {
  const windows = Array.from({ length: 12 }, (_, i) => `<path fill="${i % 3 === 0 ? '#d1c28c' : '#789784'}" d="M${726 + i % 6 * 28} ${40 + Math.floor(i / 6) * 19}h10v10h-10z"/>`).join('');
  return `<path fill="#829da2" d="M0 0h1600v96H0z"/>
    <path fill="#536f72" d="m0 63 140-30 115 22 190-39 160 34 155-27 157 25 171-31 143 36 171-27 198 34v36H0z"/>
    <path fill="#31554b" d="m0 73 200-20 201 16 220-16 179 14 202-18 211 17 189-12 198 18v24H0z"/>
    <path fill="#28493f" d="M704 27h192v55H704z"/><path fill="#bed0b3" d="M697 23h206v5H697z"/>
    <path fill="#426757" d="M759 10h82v15h-82z"/><path fill="#ced5af" d="M767 6h66v5h-66z"/>
    ${windows}<path fill="#162f2c" d="M782 66h36v17h-36z"/>
    ${[360, 570, 1030, 1230].map(x => pine(x, 24, '#25483e')).join('')}
    <path fill="#193a31" d="M0 82h1600v14H0z"/><path fill="#91a78d" d="m784 83-17 13h66l-17-13z"/>
    <path fill="#bfc69b" d="M648 50h4v32h-4zm299 0h4v32h-4zM643 46h14v5h-14zm299 0h14v5h-14z"/>`;
}

function orbit() {
  const stars = Array.from({ length: 30 }, (_, i) => `<path fill="${i % 3 === 0 ? '#d0b18f' : '#8195af'}" d="M${40 + i * 53} ${9 + i * 23 % 65}h${i % 5 === 0 ? 3 : 2}v2h-${i % 5 === 0 ? 3 : 2}z"/>`).join('');
  return `<path fill="#1b2137" d="M0 0h1600v96H0z"/>${stars}
    <g stroke="#75839d" opacity=".65"><ellipse cx="800" cy="44" rx="143" ry="29"/><ellipse cx="800" cy="44" rx="105" ry="18" transform="rotate(-12 800 44)"/></g>
    <path fill="#aeb9a5" d="M782 28h9v-7h20v7h9v27h-9v7h-20v-7h-9z"/>
    <path fill="#709087" d="M789 29h15v7h10v10h-12v11h-11v-8h-8V38h6z"/>
    <path fill="#e4bd88" d="M934 34h9v9h-9zM684 62h6v6h-6z"/>
    <path fill="#283840" d="m0 79 144-25 154 25 160-23 151 25 171-8 180 11 159-29 149 25 143-21 189 22v15H0z"/>
    <path fill="#161c30" d="M0 89h1600v7H0z"/>`;
}

function coast() {
  return `<path fill="#263049" d="M0 0h1600v96H0z"/>
    <path fill="#f1c68f" d="M783 17h34v5h9v9h5v24h-5v9h-9v5h-34v-5h-9v-9h-5V31h5v-9h9z"/>
    <path fill="#9c929e" d="M275 27h48v5h43v4H240v-4h35zm925-11h52v5h47v4h-141v-4h42z"/>
    <path fill="#687180" d="m0 71 136-28 137 19 145-7 141 23h480l136-21 126 6 145-30 154 34v29H0z"/>
    <path fill="#be9b90" d="M0 75h1600v21H0z"/>
    <path fill="#f0c493" d="M769 79h62v3h-62zm-23 8h108v3H746zm-32 7h170v2H714z"/>
    <path fill="#3b4955" d="m0 78 190-9 170 12 151-4 113 19H0zm1600-5-152-7-148 13-146 17h446z"/>`;
}

const scenes = { desk, campus, orbit, coast };

export function chapterDivider(scene) {
  return `<div class="chapter-divider chapter-divider-${scene}" aria-hidden="true"><svg viewBox="0 0 1600 96" preserveAspectRatio="xMidYMid slice" fill="none" shape-rendering="crispEdges">${scenes[scene]()}</svg></div>`;
}
