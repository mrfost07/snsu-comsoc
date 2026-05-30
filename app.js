/* ============================================================
   SNSU ComSoc — Shared interactions (GSAP-powered)
   Nav · GSAP ScrollTrigger reveals · Animated stat counters · Event filter
   Falls back to IntersectionObserver if GSAP is unavailable.
   ============================================================ */
(() => {
  const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined';
  const hasST = hasGSAP && typeof window.ScrollTrigger !== 'undefined';

  /* ─── Mobile menu ─────────────────────────────────────── */
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

  /* ─── Scrolled state on topbar ────────────────────────── */
  const nav = document.getElementById('navbar');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── Reveal config — maps CSS classes to GSAP "from" vars */
  const REVEALS = [
    { sel: '.reveal-up', from: { y: 72, opacity: 0 } },
    { sel: '.reveal-l', from: { x: -48, opacity: 0 } },
    { sel: '.reveal-r', from: { x: 48, opacity: 0 } },
    { sel: '.reveal-line', from: { scaleX: 0, transformOrigin: 'left center' } },
    // Plain .reveal must be matched last and exclude the variants above.
    { sel: '.reveal:not(.reveal-up):not(.reveal-l):not(.reveal-r):not(.reveal-line)', from: { y: 40, opacity: 0 } },
  ];

  const allRevealEls = document.querySelectorAll('[class*="reveal"]');

  /* ─── Per-parent stagger: assign data-delay like before ── */
  const assignStagger = () => {
    const groups = new Map();
    allRevealEls.forEach((el) => {
      if (el.dataset.delay !== undefined) return;
      const parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, 0);
      const i = groups.get(parent);
      el.dataset.delay = String(i * 90); // ms
      groups.set(parent, i + 1);
    });
  };

  /* ─── Animated counter (shared by GSAP + fallback) ─────── */
  const runCounter = (el) => {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix ?? '+';
    if (hasGSAP) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: 'power4.out',
        onUpdate: () => { el.textContent = Math.floor(obj.val); },
        onComplete: () => { el.textContent = target + suffix; },
      });
    } else {
      const start = performance.now();
      const dur = 1800;
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.floor(eased * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(tick);
    }
  };

  /* ─── Path A: GSAP + ScrollTrigger (preferred) ─────────── */
  if (motionOK && hasST) {
    gsap.registerPlugin(ScrollTrigger);
    assignStagger();

    // Kill CSS reveal transitions AND set the resting state to visible so
    // GSAP's from() animates from the offset → natural (visible) state.
    // Without .visible, CSS opacity:0 would make from(opacity:0) a no-op.
    allRevealEls.forEach((el) => {
      el.style.transition = 'none';
      el.classList.add('visible');
    });

    REVEALS.forEach(({ sel, from }) => {
      gsap.utils.toArray(sel).forEach((el) => {
        const delay = (+el.dataset.delay || 0) / 1000;
        gsap.from(el, {
          ...from,
          duration: from.scaleX !== undefined ? 1 : 0.9,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        });
      });
    });

    // Stat counters via ScrollTrigger
    document.querySelectorAll('[data-target]').forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => runCounter(el),
      });
    });
  } else if (motionOK && 'IntersectionObserver' in window && allRevealEls.length) {
    /* ─── Path B: IntersectionObserver fallback (no GSAP) ── */
    assignStagger();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const delay = +e.target.dataset.delay || 0;
          requestAnimationFrame(() => {
            setTimeout(() => e.target.classList.add('visible'), delay);
          });
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    allRevealEls.forEach((el) => obs.observe(el));

    const stats = document.querySelectorAll('[data-target]');
    if (stats.length) {
      const sObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            runCounter(e.target);
            sObs.unobserve(e.target);
          });
        },
        { threshold: 0.4 }
      );
      stats.forEach((s) => sObs.observe(s));
    }
  } else {
    /* ─── Path C: reduced motion / no observer — show all ── */
    allRevealEls.forEach((el) => el.classList.add('visible'));
    document.querySelectorAll('[data-target]').forEach((el) => {
      const suffix = el.dataset.suffix ?? '+';
      el.textContent = el.dataset.target + suffix;
    });
  }

  /* ─── Event filter (events page) ──────────────────────── */
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
          if (motionOK && hasGSAP) {
            if (show) {
              it.classList.remove('hidden');
              gsap.fromTo(it, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
            } else {
              gsap.to(it, {
                opacity: 0, y: 16, duration: 0.25, ease: 'power2.in',
                onComplete: () => it.classList.add('hidden'),
              });
            }
          } else {
            it.classList.toggle('hidden', !show);
          }
        });
        if (hasST) ScrollTrigger.refresh();
      });
    });
  }

  /* ─── Smooth scroll for in-page anchors ───────────────── */
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

  /* ─── Hero parallax — GSAP-driven, ties bg to scroll ──── */
  if (motionOK && hasST) {
    const heroImg = document.querySelector('.hero-bg img');
    if (heroImg) {
      gsap.to(heroImg, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
    // Inner-page hero photo gets a gentle parallax too
    const pageHeroImg = document.querySelector('.page-hero-photo img');
    if (pageHeroImg) {
      gsap.to(pageHeroImg, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.page-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }
})();
