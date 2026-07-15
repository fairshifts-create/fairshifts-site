(function () {
  'use strict';

  /* ---------- language switch (i18n) ---------- */
  /* Runs first, synchronously, so translated text (if Arabic is the saved/
     detected language) appears as soon as this script executes — the <head>
     script already set lang/dir before first paint to avoid a direction flash;
     this closes the remaining gap for text content. */
  var LANG_KEY = 'fairshifts-lang';
  var i18n = window.FAIRSHIFTS_I18N || { en: {}, ar: {} };

  function getLang() {
    return document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';
  }

  function applyLanguage(lang) {
    var strings = i18n[lang] || i18n.en;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (strings[key] !== undefined) el.textContent = strings[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (strings[key] !== undefined) el.innerHTML = strings[key];
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      if (strings[key] !== undefined) el.setAttribute('aria-label', strings[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (strings[key] !== undefined) el.setAttribute('alt', strings[key]);
    });
    var titleEl = document.querySelector('title[data-i18n-title]');
    if (titleEl) {
      var titleKey = titleEl.getAttribute('data-i18n-title');
      if (strings[titleKey] !== undefined) document.title = strings[titleKey];
    }
  }

  function setLanguage(lang) {
    var root = document.documentElement;
    root.classList.add('i18n-fade');
    setTimeout(function () {
      applyLanguage(lang);
      requestAnimationFrame(function () {
        root.classList.remove('i18n-fade');
      });
    }, 150);
    localStorage.setItem(LANG_KEY, lang);
  }

  applyLanguage(getLang());

  document.querySelectorAll('.lang-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(getLang() === 'ar' ? 'en' : 'ar');
    });
  });

  /* ---------- theme toggle (light/dark) ---------- */
  /* The <head> of every page already set the initial data-theme attribute
     before first paint, to avoid a flash of the wrong theme. This just
     wires up the button click and remembers the choice for next time. */
  var THEME_KEY = 'fairshifts-theme';
  var root = document.documentElement;
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(THEME_KEY, next);
      document.querySelectorAll('.theme-toggle').forEach(function (b) {
        b.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
      });
    });
  });

  /* ---------- mobile nav toggle ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- reveal-on-scroll ---------- */
  var revealTargets = document.querySelectorAll('.reveal, .reveal-group');
  if (revealTargets.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lastFocused = null;

  function openLightbox(src, alt) {
    if (!lightbox) return;
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      lightbox.querySelector('.lightbox-close').focus();
    }, 0);
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }
  document.querySelectorAll('[data-lightbox]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var img = trigger.querySelector('img');
      openLightbox(img.src, img.alt);
    });
  });
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  }

  /* ---------- modals ---------- */
  var openModalBtns = document.querySelectorAll('[data-open-modal]');
  var activeModal = null;

  function openModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    lastFocused = document.activeElement;
    activeModal = modal;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(function () {
      var firstField = modal.querySelector('input, textarea, select');
      if (firstField) firstField.focus();
    }, 0);
  }
  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    activeModal = null;
    if (lastFocused) lastFocused.focus();
  }

  openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(btn.getAttribute('data-open-modal'));
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal(overlay);
    });
    var closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', function () { closeModal(overlay); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (activeModal) closeModal(activeModal);
    if (lightbox && lightbox.classList.contains('open')) closeLightbox();
  });

  /* ---------- Formspree AJAX submission ---------- */
  document.querySelectorAll('form[data-formspree]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      var successEl = form.parentElement.querySelector('.form-success');
      var errorEl = form.parentElement.querySelector('.form-error');
      if (errorEl) errorEl.classList.remove('show');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.dataset.originalText = submitBtn.textContent; submitBtn.textContent = 'Sending…'; }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            form.style.display = 'none';
            if (successEl) successEl.classList.add('show');
          } else {
            throw new Error('Submission failed');
          }
        })
        .catch(function () {
          if (errorEl) errorEl.classList.add('show');
        })
        .finally(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = submitBtn.dataset.originalText; }
        });
    });
  });
})();
