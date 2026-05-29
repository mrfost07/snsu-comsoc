/* ============================================================
   SNSU ComSoc — Shared interactions
   Nav · Reveal animations (Framer-Motion-style) · Stat counters · Event filter
   ============================================================ */
(() => {
  // ─── Mobile menu ─────────────────────────────────────────
  const burger = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      links.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        links.classList.remove('open');
      })
    );
  }

  // ─── Scrolled state on topbar (subtle elevation increase) ─
  const nav = document.getElementById('navbar');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ─── Reveal animations — Framer-Motion-style ─────────────
  // Reads .reveal* classes, stages them per-parent (auto stagger),
  // honors data-delay (ms), uses spring-ish easing via CSS.
  const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('[class*="reveal"]');

  if (motionOK && 'IntersectionObserver' in window && reveals.length) {
    // Auto-stagger: number siblings inside the same parent so each one
    // gets data-delay if it doesn't already have one.
    const groups = new Map();
    reveals.forEach((el) => {
      if (el.dataset.delay !== undefined) return;
      const parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, 0);
      const i = groups.get(parent);
      el.dataset.delay = String(i * 90);
      groups.set(parent, i + 1);
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const delay = +e.target.dataset.delay || 0;
          // Use rAF to commit the visible class on next frame for cleaner FLIP
          requestAnimationFrame(() => {
            setTimeout(() => e.target.classList.add('visible'), delay);
          });
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    reveals.forEach((el) => obs.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  // ─── Stat counter ────────────────────────────────────────
  const stats = document.querySelectorAll('[data-target]');
  if (stats.length && 'IntersectionObserver' in window) {
    const sObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = +el.dataset.target;
          const suffix = el.dataset.suffix || '+';
          const start = performance.now();
          const dur = 1800;
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            // ease-out-quart
            const eased = 1 - Math.pow(1 - p, 4);
            el.textContent = Math.floor(eased * target);
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
          };
          requestAnimationFrame(tick);
          sObs.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    stats.forEach((s) => sObs.observe(s));
  }

  // ─── Event filter (events page) ──────────────────────────
  const tabs = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-status]');
  if (tabs.length && items.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const f = tab.dataset.filter;
        items.forEach((it) => {
          const show = f === 'all' || it.dataset.status === f;
          it.classList.toggle('hidden', !show);
        });
      });
    });
  }

  // ─── Smooth scroll for in-page anchors ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ─── Subtle parallax on hero slabs ───────────────────────
  // Tiny mouse-move tilt for depth — no layout shift.
  const hero = document.querySelector('.hero');
  if (motionOK && hero) {
    const slabs = hero.querySelectorAll('.slab, .hero-lines, .hero-dots');
    let raf;
    hero.addEventListener('mousemove', (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        slabs.forEach((el, i) => {
          const depth = (i + 1) * 0.6;
          el.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
        });
        raf = null;
      });
    });
    hero.addEventListener('mouseleave', () => {
      slabs.forEach((el) => (el.style.transform = ''));
    });
  }
})();
