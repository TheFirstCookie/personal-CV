// A small, low-resolution canvas world. One loop, capped at 30 fps, only in view.
export function createScenery(canvas) {
  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) return null;
  let width = 720, height = 400, time = 0, mode = 'city', active = false, frame = 0, last = 0;
  const stars = Array.from({ length: 75 }, (_, i) => ({ x: ((i * 137.508) % 997) / 997, y: ((i * 73.17) % 677) / 1000, size: i % 5 === 0 ? 2 : 1, phase: i * 1.7 }));
  const palettes = {
    city: ['#10172d', '#18213b', '#242b47', '#34364c', '#4c4150', '#73564e'],
    aurora: ['#101c2c', '#142b37', '#193d43', '#245052', '#385b5c', '#526a69'],
    daybreak: ['#80718f', '#a789a0', '#c8a1aa', '#deb3a7', '#edc4a5', '#f3d4aa'],
  };
  const rect = (x, y, w, h, color) => { ctx.fillStyle = color; ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); };

  function mountains(baseline, amplitude, color, seed) {
    ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(0, height);
    for (let x = 0; x <= width + 16; x += 16) {
      const ridge = Math.sin(x * .013 + seed) * .4 + Math.sin(x * .027 + seed * 3) * .3 + Math.sin(x * .005 + seed) * .3;
      ctx.lineTo(x, Math.round(height * baseline + ridge * height * amplitude));
    }
    ctx.lineTo(width, height); ctx.closePath(); ctx.fill();
  }

  function draw() {
    const colors = palettes[mode];
    const sky = ctx.createLinearGradient(0, 0, 0, height);
    colors.forEach((color, i) => sky.addColorStop(i / (colors.length - 1), color));
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, width, height);
    if (mode !== 'daybreak') {
      for (const star of stars) {
        ctx.globalAlpha = .35 + (Math.sin(time * .6 + star.phase) + 1) * .25;
        rect(star.x * width, star.y * height, star.size, star.size, '#e5ddcb');
      }
      ctx.globalAlpha = 1;
      const meteor = time % 19;
      if (meteor > 16 && meteor < 17.8) {
        const p = (meteor - 16) / 1.8;
        for (let j = 0; j < 10; j++) {
          ctx.globalAlpha = (1 - j / 10) * Math.sin(p * Math.PI);
          rect(width * (.55 + p * .28) - j * 4, height * (.12 + p * .21) - j * 2, 3, 2, '#f2ddb7');
        }
        ctx.globalAlpha = 1;
      }
    }
    if (mode === 'aurora') {
      for (let ribbon = 0; ribbon < 3; ribbon++) {
        for (let band = 0; band < 12; band++) {
          ctx.globalAlpha = (1 - band / 12) * .075;
          ctx.fillStyle = ['#8ed5af', '#b5b4ee', '#a5dbca'][ribbon];
          ctx.beginPath();
          for (let x = 0; x <= width + 8; x += 8) {
            const y = height * (.16 + ribbon * .1) + Math.sin(x * .007 + time * .12 + ribbon) * height * .1 + Math.sin(x * .018 - time * .06) * 10 + band * 4;
            if (!x) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          for (let x = width + 8; x >= 0; x -= 8) {
            const y = height * (.16 + ribbon * .1) + Math.sin(x * .007 + time * .12 + ribbon) * height * .1 + Math.sin(x * .018 - time * .06) * 10 + band * 4 + 30;
            ctx.lineTo(x, y);
          }
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      mountains(.7, .16, '#29494b', 1); mountains(.83, .13, '#1b383b', 4); mountains(.94, .07, '#122c30', 7);
      // A few distant pine silhouettes, on the far side of the composition.
      for (let i = 0; i < 14; i++) {
        const x = width * .58 + i * width * .034, y = height * (.88 + Math.sin(i) * .025), s = 12 + i % 4 * 4;
        ctx.fillStyle = '#102a2b'; ctx.beginPath(); ctx.moveTo(x, y - s); ctx.lineTo(x - s * .4, y + s * .4); ctx.lineTo(x + s * .4, y + s * .4); ctx.fill(); rect(x - 1, y, 3, s, '#102a2b');
      }
    }
    if (mode === 'daybreak') {
      const sx = width * .77, sy = height * .34, radius = Math.min(width * .085, height * .16);
      ctx.fillStyle = '#f9dfb1'; ctx.beginPath(); ctx.arc(sx, sy, radius, 0, Math.PI * 2); ctx.fill();
      for (let i = 0; i < 4; i++) {
        const x = ((width * (.2 + i * .23) + Math.sin(time * .06 + i) * 20) % (width + 80)) - 40, y = height * (.12 + i * .085);
        rect(x, y, 60 + i * 8, 5, '#e6c7c1'); rect(x + 13, y - 4, 30, 4, '#e6c7c1');
      }
      mountains(.66, .14, '#918e94', 2); mountains(.77, .1, '#6d7b86', 5);
      rect(0, height * .8, width, height * .2, '#879c9d');
      for (let i = 0; i < 16; i++) {
        const y = height * .81 + i * height * .012, x = sx + Math.sin(time * .5 + i * 2) * 14;
        rect(x - i * 3, y, 20 + i * 6, i % 3 === 0 ? 2 : 1, i % 2 ? '#d1bda6' : '#e5cba7');
      }
      mountains(1.03, .05, '#384f55', 9);
    }
  }

  function tick(now) {
    if (!active) return;
    if (now - last >= 1000 / 30) { time += Math.min((now - last) / 1000, .1); last = now; draw(); }
    frame = requestAnimationFrame(tick);
  }
  function resize() {
    const box = canvas.getBoundingClientRect();
    if (!box.width || !box.height) return;
    width = Math.max(240, Math.min(960, Math.round(box.width / 2)));
    height = Math.round(width * box.height / box.width);
    canvas.width = width; canvas.height = height; ctx.imageSmoothingEnabled = false; draw();
  }
  new ResizeObserver(resize).observe(canvas);
  resize();
  return {
    setActive(value) {
      if (value === active) return;
      active = value; cancelAnimationFrame(frame);
      if (active) { last = performance.now(); frame = requestAnimationFrame(tick); }
      else draw();
    },
    setMode(value) { if (value in palettes) { mode = value; time = 0; draw(); } },
  };
}
