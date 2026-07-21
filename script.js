(function () {
  'use strict';

  /* ---------- testimonials section flag ---------- */
  /* Flip to true once real testimonials are ready — the cards are already
     in index.html with placeholder text, just edit the testi.* strings in
     translations.js and flip this. No other changes needed. */
  var SHOW_TESTIMONIALS = false;
  var testimonialsBlock = document.getElementById('testimonials-block');
  var founderNoteBlock = document.getElementById('founder-note-block');
  if (testimonialsBlock && founderNoteBlock) {
    testimonialsBlock.style.display = SHOW_TESTIMONIALS ? '' : 'none';
    founderNoteBlock.style.display = SHOW_TESTIMONIALS ? 'none' : '';
  }

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

    renderPriceUsd(strings);
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

  /* ---------- pricing: AED -> USD conversion ---------- */
  /* Single source of truth for the exchange rate — update this one constant
     if the peg ever changes, every card's USD line recomputes from it.
     Re-run from applyLanguage() too, so the "USD" label re-translates and
     the figure recomputes on every language switch. */
  var AED_PER_USD = 3.6725;

  function renderPriceUsd(strings) {
    var usdLabel = strings['pricing.currencyUSD'] || 'USD';
    document.querySelectorAll('.price-amount[data-aed]').forEach(function (amountEl) {
      var aed = parseFloat(amountEl.getAttribute('data-aed'));
      if (!aed) return;
      var usd = Math.round(aed / AED_PER_USD);
      var usdLine = amountEl.parentElement.querySelector('[data-usd-line]');
      if (usdLine) usdLine.textContent = '≈ $' + usd + ' ' + usdLabel;
    });
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

  /* ---------- hero scroll cue ---------- */
  (function () {
    var scrollCue = document.querySelector('.scroll-cue');
    if (!scrollCue) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    window.addEventListener('scroll', function () {
      scrollCue.classList.toggle('is-hidden', window.scrollY > 40);
    }, { passive: true });
  })();

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

  /* ---------- email options popover ---------- */
  /* One shared popover, repositioned per trigger, so every "email us" /
     contact mailto: link on the site (nav, footer, final CTA, legal pages,
     form-error fallbacks) gets the same working options instead of a dead
     mailto: tab. Uses the i18n() helper above to read the current language's
     strings, since this popover's copy has to track the active language too. */
  var EMAIL_ADDRESS = 'fairshifts@gmail.com';
  var GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fm=1&to=' + encodeURIComponent(EMAIL_ADDRESS);
  var emailPopover = document.getElementById('email-popover');
  var activeEmailTrigger = null;
  var copyRevertTimer = null;

  function positionEmailPopover(trigger) {
    if (!emailPopover) return;
    var r = trigger.getBoundingClientRect();
    emailPopover.style.visibility = 'hidden';
    emailPopover.classList.add('open');
    var pw = emailPopover.offsetWidth;
    var ph = emailPopover.offsetHeight;
    emailPopover.classList.remove('open');
    emailPopover.style.visibility = '';

    var margin = 12;
    var isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    var left = isRtl ? r.right - pw : r.left;
    left = Math.max(margin, Math.min(left, window.innerWidth - pw - margin));

    var top = r.bottom + 8;
    if (top + ph > window.innerHeight - margin) {
      top = r.top - ph - 8;
      if (top < margin) top = margin;
    }
    emailPopover.style.left = left + 'px';
    emailPopover.style.top = top + 'px';
  }

  function openEmailPopover(trigger) {
    if (!emailPopover) return;
    activeEmailTrigger = trigger;
    positionEmailPopover(trigger);
    emailPopover.classList.add('open');
    emailPopover.setAttribute('aria-hidden', 'false');
  }

  function closeEmailPopover() {
    if (!emailPopover || !emailPopover.classList.contains('open')) return;
    emailPopover.classList.remove('open');
    emailPopover.setAttribute('aria-hidden', 'true');
    activeEmailTrigger = null;
  }

  function copyEmailAddress(btn) {
    var span = btn.querySelector('span');
    var strings = i18n[getLang()] || i18n.en;
    var original = strings['emailPopover.copy'];
    var copiedText = strings['emailPopover.copied'];

    function showCopied() {
      btn.classList.add('copied');
      if (span) span.textContent = copiedText;
      clearTimeout(copyRevertTimer);
      copyRevertTimer = setTimeout(function () {
        btn.classList.remove('copied');
        if (span) span.textContent = original;
        closeEmailPopover();
      }, 1400);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL_ADDRESS).then(showCopied, function () {
        fallbackCopy(EMAIL_ADDRESS);
        showCopied();
      });
    } else {
      fallbackCopy(EMAIL_ADDRESS);
      showCopied();
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (err) { /* no-op: clipboard unavailable */ }
    document.body.removeChild(ta);
  }

  if (emailPopover) {
    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('.email-trigger');
      if (trigger) {
        e.preventDefault();
        if (activeEmailTrigger === trigger && emailPopover.classList.contains('open')) {
          closeEmailPopover();
        } else {
          openEmailPopover(trigger);
        }
        return;
      }

      var action = e.target.closest('[data-action]');
      if (action && emailPopover.contains(action)) {
        var kind = action.getAttribute('data-action');
        if (kind === 'gmail') {
          e.preventDefault();
          window.open(GMAIL_COMPOSE_URL, '_blank', 'noopener');
          closeEmailPopover();
        } else if (kind === 'copy') {
          e.preventDefault();
          copyEmailAddress(action);
        } else if (kind === 'mailapp') {
          closeEmailPopover();
        }
        return;
      }

      if (emailPopover.classList.contains('open') && !emailPopover.contains(e.target)) {
        closeEmailPopover();
      }
    });

    window.addEventListener('scroll', function () {
      if (emailPopover.classList.contains('open')) closeEmailPopover();
    }, true);
    window.addEventListener('resize', function () {
      if (emailPopover.classList.contains('open')) closeEmailPopover();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (activeModal) closeModal(activeModal);
    if (lightbox && lightbox.classList.contains('open')) closeLightbox();
    closeEmailPopover();
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
