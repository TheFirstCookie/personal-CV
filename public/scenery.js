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
  const terrainPaths = new Map();
  let auroraBackground = null, auroraForeground = null, skyGradient = null;
  let auroraWaves = [];

  function ridgeSample(x, baseline, amplitude, seed) {
    const ridge = Math.sin(x * .013 + seed) * .4 + Math.sin(x * .027 + seed * 3) * .3 + Math.sin(x * .005 + seed) * .3;
    return Math.round(height * baseline + ridge * height * amplitude);
  }

  // Match the actual polygon edge between its 16px samples, including on resize.
  function groundAt(x, baseline, amplitude, seed) {
    const left = Math.floor(x / 16) * 16, fraction = (x - left) / 16;
    return ridgeSample(left, baseline, amplitude, seed) * (1 - fraction) + ridgeSample(left + 16, baseline, amplitude, seed) * fraction;
  }

  function mountains(baseline, amplitude, color, seed, target = ctx) {
    const key = `${baseline}:${amplitude}:${seed}`;
    if (!terrainPaths.has(key)) {
      const path = new Path2D(); path.moveTo(0, height);
      for (let x = 0; x <= width + 16; x += 16) path.lineTo(x, ridgeSample(x, baseline, amplitude, seed));
      path.lineTo(width, height); path.closePath(); terrainPaths.set(key, path);
    }
    target.fillStyle = color; target.fill(terrainPaths.get(key));
  }

  function auroraLandscape() {
    // Static terrain and vegetation are painted only when the canvas size changes.
    const layer = () => { const surface = document.createElement('canvas'); surface.width = width; surface.height = height; return surface; };
    auroraBackground = layer(); auroraForeground = layer();
    const back = auroraBackground.getContext('2d'), front = auroraForeground.getContext('2d');
    mountains(.67, .15, '#29494b', 1, back);
    back.fillStyle = '#72908c';
    for (let x = 16; x < width; x += 16) {
      const y = ridgeSample(x, .67, .15, 1);
      if (y < ridgeSample(x - 16, .67, .15, 1) && y <= ridgeSample(x + 16, .67, .15, 1)) {
        back.beginPath(); back.moveTo(x - 12, groundAt(x - 12, .67, .15, 1)); back.lineTo(x, y); back.lineTo(x + 12, groundAt(x + 12, .67, .15, 1)); back.lineTo(x + 3, y + 5); back.lineTo(x - 2, y + 3); back.closePath(); back.fill();
      }
    }
    mountains(.78, .1, '#1b383d', 4, back);
    back.fillStyle = '#17383e'; back.fillRect(0, Math.round(height * .8), width, height);
    mountains(.885, .04, '#102a2e', 7, front);
    const cabinX = Math.round(width * .86), cabinY = Math.round(groundAt(cabinX, .885, .04, 7)) + 2;
    const tree = (x, size, tone) => {
      const base = Math.round(groundAt(x, .885, .04, 7)) + 3;
      front.fillStyle = tone; front.fillRect(x - 1, base - size * .4, 3, size * .4);
      for (let tier = 0; tier < 3; tier++) {
        const top = base - size + tier * size * .22, half = size * (.2 + tier * .08);
        front.beginPath(); front.moveTo(x, top); front.lineTo(x - half, top + size * .48); front.lineTo(x + half, top + size * .48); front.closePath(); front.fill();
      }
    };
    for (let i = 0; i < 23; i++) {
      const x = Math.round(width * (.42 + i * .027));
      if (Math.abs(x - cabinX) > 21) tree(x, 18 + i % 5 * 5, i % 3 ? '#0c2529' : '#153438');
    }
    for (let i = 0; i < 7; i++) {
      const x = Math.round(width * (.49 + i * .075)), y = Math.round(groundAt(x, .885, .04, 7));
      front.fillStyle = '#41605d'; front.fillRect(x, y + 5, 6 + i % 3 * 2, 2);
      front.fillStyle = '#213e3e'; front.fillRect(x - 2, y + 7, 11, 3);
    }
    front.fillStyle = '#4c4c43'; front.fillRect(cabinX - 10, cabinY - 11, 20, 12);
    front.fillStyle = '#182c2e'; front.beginPath(); front.moveTo(cabinX - 14, cabinY - 11); front.lineTo(cabinX, cabinY - 22); front.lineTo(cabinX + 14, cabinY - 11); front.closePath(); front.fill();
    front.fillStyle = '#b9ccbf'; front.fillRect(cabinX - 10, cabinY - 12, 20, 2);
    front.fillStyle = '#dfbb82'; front.fillRect(cabinX - 6, cabinY - 8, 4, 4);
    front.fillStyle = '#203337'; front.fillRect(cabinX + 3, cabinY - 7, 4, 8);
  }

  function draw() {
    const colors = palettes[mode];
    if (!skyGradient) {
      skyGradient = ctx.createLinearGradient(0, 0, 0, height);
      colors.forEach((color, i) => skyGradient.addColorStop(i / (colors.length - 1), color));
    }
    ctx.fillStyle = skyGradient;
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
        const wave = auroraWaves[ribbon] ??= new Float32Array(Math.ceil(width / 8) + 2);
        for (let i = 0; i < wave.length; i++) {
          const x = i * 8;
          wave[i] = height * (.16 + ribbon * .1) + Math.sin(x * .007 + time * .12 + ribbon) * height * .1 + Math.sin(x * .018 - time * .06) * 10;
        }
        for (let band = 0; band < 12; band++) {
          ctx.globalAlpha = (1 - band / 12) * .075;
          ctx.fillStyle = ['#8ed5af', '#b5b4ee', '#a5dbca'][ribbon];
          ctx.beginPath();
          for (let i = 0; i < wave.length; i++) {
            const y = wave[i] + band * 4;
            if (!i) ctx.moveTo(0, y); else ctx.lineTo(i * 8, y);
          }
          for (let i = wave.length - 1; i >= 0; i--) {
            ctx.lineTo(i * 8, wave[i] + band * 4 + 30);
          }
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      if (!auroraBackground) auroraLandscape();
      ctx.drawImage(auroraBackground, 0, 0);
      // Broken reflections move on the lake; the shoreline stays crisp and still.
      for (let i = 0; i < 14; i++) {
        const y = height * (.805 + i * .008), x = width * (.63 + Math.sin(i * 1.9 + time * .18) * .06);
        ctx.globalAlpha = .13 - i * .006;
        rect(x - i * 2, y, 20 + i * 5, 1, i % 3 ? '#8ed5af' : '#b5b4ee');
      }
      ctx.globalAlpha = 1;
      ctx.drawImage(auroraForeground, 0, 0);
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
      // A small sailboat shares the scenery clock, so pausing motion freezes it.
      const boatSize = Math.max(16, Math.min(28, width * .04));
      const bx = Math.round(width * .68 + Math.sin(time * .18) * 4);
      const by = Math.round(height * .875 + Math.sin(time * 1.1) * .8);
      const mastHeight = Math.round(boatSize * .95);
      const halfHull = Math.round(boatSize / 2);
      ctx.globalAlpha = .25;
      rect(bx - halfHull, by + 7, boatSize, 1, '#405b63');
      rect(bx - halfHull + 3 + Math.sin(time * .7) * 2, by + 10, boatSize - 6, 1, '#e9cfac');
      ctx.globalAlpha = 1;
      rect(bx, by - mastHeight, 1, mastHeight + 2, '#635952');
      ctx.fillStyle = '#f5e2bf';
      ctx.beginPath(); ctx.moveTo(bx - 2, by - mastHeight + 2); ctx.lineTo(bx - halfHull, by - 3); ctx.lineTo(bx - 2, by - 3); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#dfb79d';
      ctx.beginPath(); ctx.moveTo(bx + 2, by - mastHeight + 7); ctx.lineTo(bx + halfHull - 2, by - 3); ctx.lineTo(bx + 2, by - 3); ctx.closePath(); ctx.fill();
      rect(bx + 1, by - mastHeight, 5, 2, '#bd765b');
      rect(bx - halfHull, by, boatSize, 2, '#715247');
      rect(bx - halfHull + 2, by + 2, boatSize - 4, 2, '#4c4e50');
      rect(bx - halfHull + 4, by + 4, boatSize - 8, 1, '#40515a');
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
    canvas.width = width; canvas.height = height; ctx.imageSmoothingEnabled = false;
    terrainPaths.clear(); auroraBackground = auroraForeground = skyGradient = null; auroraWaves = [];
    draw();
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
    setMode(value) { if (value in palettes) { mode = value; time = 0; skyGradient = null; draw(); } },
  };
}
