// Decorative scenery stays separate from the readable education content.
export function campus() {
  return `<div class="campus-world" aria-hidden="true">
    <div class="campus-glow"></div><div class="campus-mist ambient"></div>
    <svg class="campus-landscape" viewBox="0 0 1600 450" fill="none" preserveAspectRatio="xMidYMax slice" shape-rendering="crispEdges">
      <path fill="#244c40" d="M0 190 100 140l110 60 170-100 160 100 180-70 170 80 170-120 180 100 150-80 210 90v250H0z"/>
      <path fill="#1c4036" d="M0 270 170 210l180 70 210-80 180 90 180-70 200 40 240-60 240 60v190H0z"/>
      <g fill="#15382f"><path d="M930 325V210h70v-45h10v-18h8v18h10v45h70v115h26V242h110v83h30V220h160v105h176v125H850V325z"/>
      <path fill="#46715a" d="M1000 207h98v4h-98zm264 10h160v4h-160zm-140 22h110v4h-110z"/></g>
      <g class="campus-windows ambient" fill="#c8bc7a" opacity=".6"><path d="M948 232h8v12h-8zm20 0h8v12h-8zm60 0h8v12h-8zm20 0h8v12h-8zm20 0h8v12h-8zm-120 30h8v12h-8zm20 0h8v12h-8zm60 0h8v12h-8zm20 0h8v12h-8zm20 0h8v12h-8zm72 0h8v12h-8zm24 0h8v12h-8zm24 0h8v12h-8zm102-20h8v12h-8zm24 0h8v12h-8zm24 0h8v12h-8zm24 0h8v12h-8zm-72 30h8v12h-8zm24 0h8v12h-8zm24 0h8v12h-8zm24 0h8v12h-8z"/></g>
      <path fill="#102f29" d="M0 350 220 320l220 40 230-35 220 28 240-25 220 35 250-20v107H0z"/>
      <g fill="#0c2925"><path d="M62 380V190l-42 72h24l-40 70h39l-38 55h114l-38-55h39l-40-70h24l-42-72zm1400 15V205l-42 72h24l-40 70h39l-38 55h114l-38-55h39l-40-70h24l-42-72zm-90 35V290l-30 52h17l-29 51h28l-27 40h82l-27-40h28l-29-51h17l-30-52z"/></g>
      <path stroke="#60816b" stroke-opacity=".3" stroke-width="3" d="M660 450c80-70 210-70 310-112"/>
    </svg>
    <div class="campus-fireflies">${Array.from({ length: 12 }, (_, i) => `<i class="ambient" style="--x:${7 + (i * 29) % 88}%;--y:${18 + (i * 17) % 65}%;--delay:-${i * 1.3}s;--duration:${6 + i % 4}s"></i>`).join('')}</div>
  </div>`;
}
