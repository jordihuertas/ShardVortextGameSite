/* ============================================================
   ShardVortex — main.js
   Handles: mobile nav, hero particles, gallery slider,
            lightbox, scroll animations, active nav link
   (Works with Tailwind-based markup + i18n.js)
   ============================================================ */
(function () {
  'use strict';

  function init() {
  /* ── Active nav link ─────────────────────────────────────── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    if (link.getAttribute('href') === currentPage ||
        (currentPage === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('!text-white', '!border-[#7b2fff]');
    }
  });

  /* ── Mobile Navigation ───────────────────────────────────── */
  var navToggle  = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      /* toggle() returns true when 'hidden' was ADDED (menu closed), false when removed (menu open) */
      var nowHidden = mobileMenu.classList.toggle('hidden');
      var menuOpen  = !nowHidden;
      navToggle.setAttribute('aria-expanded', String(menuOpen));
      /* Animate hamburger bars → ✕ when menu is open */
      var spans = navToggle.querySelectorAll('span');
      if (menuOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        navToggle.setAttribute('aria-expanded', 'false');
        var spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      });
    });
  }

  /* ── Hero Particle Canvas ────────────────────────────────── */
  var canvas = document.getElementById('particlesCanvas');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var particles = [];
    var PARTICLE_COUNT = 70;

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function rand(a, b) { return a + Math.random() * (b - a); }

    function mkParticle() {
      return {
        x: rand(0, canvas.width), y: rand(0, canvas.height),
        r: rand(1, 3), dx: rand(-0.3, 0.3), dy: rand(-0.6, -0.15),
        alpha: rand(0.2, 0.8),
        color: Math.random() > 0.5 ? '123,47,255' : '0,229,255',
      };
    }

    for (var i = 0; i < PARTICLE_COUNT; i++) { particles.push(mkParticle()); }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(function (p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color + ',' + p.alpha + ')';
        ctx.fill();
        p.x += p.dx; p.y += p.dy; p.alpha -= 0.001;
        if (p.y < -10 || p.alpha <= 0) {
          var fresh = mkParticle();
          fresh.y = canvas.height + 10;
          Object.assign(p, fresh);
        }
      });
      requestAnimationFrame(drawParticles);
    }
    drawParticles();
  }

  /* ── Lightbox ────────────────────────────────────────────── */
  var lightbox      = document.getElementById('lightbox');
  var lightboxImg   = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.grid button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        lightboxImg.src = btn.querySelector('img').src;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      document.body.style.overflow = '';
    }
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
  }

  /* ── Scroll Fade-in ──────────────────────────────────────── */
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  } // end init

  window.MainApp = { init: init };
}());
