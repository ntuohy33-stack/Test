(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Living hills (home page only): a calm flow field in the logo's palette ---------- */
  const canvas = document.getElementById('field');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const CREAM = '251,248,241';
    // top of the sky to the paddocks below, echoing the logo
    const BANDS = ['#e3b25d', '#e3b25d', '#9aa666', '#9aa666', '#5d8c88', '#a8845a'];

    let W = 0, H = 0, dpr = 1, parts = [], t = 0, visible = true;
    const mouse = { x: -9999, y: -9999, active: false };

    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = `rgb(${CREAM})`; ctx.fillRect(0, 0, W, H);
      const n = Math.round(Math.min(1100, Math.max(350, W * H / 1800)));
      parts = Array.from({ length: n }, spawn);
    }
    function spawn() {
      const y = Math.random() * H;
      const band = Math.min(BANDS.length - 1, Math.floor((y / H) * BANDS.length));
      return { x: Math.random() * W, y, c: BANDS[band], life: 200 + Math.random() * 400, w: .6 + Math.random() * 1.1 };
    }
    // rolling-hills angle: mostly horizontal, undulating
    function angle(x, y) {
      const a = Math.sin(x * .0042 + t * .18) * .75 + Math.cos(y * .006 - t * .14) * .55 + Math.sin((x + y) * .0021 + t * .09) * .45;
      return a * .55;
    }
    function step() {
      ctx.fillStyle = `rgba(${CREAM},.045)`;
      ctx.fillRect(0, 0, W, H);
      ctx.lineCap = 'round';
      for (const p of parts) {
        const a = angle(p.x, p.y);
        let vx = Math.cos(a) * 1.15, vy = Math.sin(a) * 1.15;
        if (mouse.active) {           // a gentle swirl around the visitor's cursor
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < 22000) { const f = (1 - d2 / 22000) * 1.6, d = Math.sqrt(d2) + 1; vx += (-dy / d) * f; vy += (dx / d) * f; }
        }
        const nx = p.x + vx, ny = p.y + vy;
        ctx.strokeStyle = p.c; ctx.globalAlpha = .8; ctx.lineWidth = p.w;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
        p.x = nx; p.y = ny;
        if (--p.life <= 0 || p.x < -10 || p.x > W + 10 || p.y < -10 || p.y > H + 10) Object.assign(p, spawn());
      }
      ctx.globalAlpha = 1;
      t += .004;
    }
    function loop() { if (visible && !document.hidden) step(); requestAnimationFrame(loop); }

    size();
    if (reduce) {                      // still image only for people who prefer no motion
      ctx.fillStyle = `rgb(${CREAM})`; ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < 260; i++) step();
    } else {
      loop();
      new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);
      addEventListener('pointermove', e => {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.active = true;
      }, { passive: true });
      addEventListener('pointerleave', () => { mouse.active = false; });
    }
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(size, 200); });
  }

  /* ---------- gentle reveal on scroll ---------- */
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add('in'));

  /* ---------- menu: phone toggle ---------- */
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  if (nav && toggle) {
    const setOpen = open => { nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open)); };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    nav.addEventListener('click', e => { if (e.target.closest('.menu a')) setOpen(false); });
    addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  }

  /* ---------- copy giving details (contact page) ---------- */
  document.querySelectorAll('.copy').forEach(btn => btn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(btn.dataset.copy); btn.textContent = 'Copied'; }
    catch { btn.textContent = 'Select and copy'; }
    setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
  }));

  /* ---------- contact form: composes an email (no server needed) ---------- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const d = Object.fromEntries(new FormData(form));
      const body = `Name: ${d.name}\nE-mail: ${d.email}\nTelephone: ${d.phone || '—'}\n\n${d.message}`;
      location.href = 'mailto:info@echunga.ucasa.org.au?subject=' + encodeURIComponent('Website enquiry from ' + d.name) + '&body=' + encodeURIComponent(body);
      status.textContent = 'Opening your email app… If nothing opens, please email info@echunga.ucasa.org.au directly.';
    });
  }
})();
