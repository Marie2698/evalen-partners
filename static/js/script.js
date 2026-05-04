// ============================================================
// EVALEN PARTNERS — SCRIPT.JS
// ============================================================

// ---- NAV SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll(
  '.about-grid, .vm-card, .service-card, .pillar-card, .value-card, .commit-item, .contact-grid, .section-header'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ---- STAGGER REVEAL for grids ----
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.service-card, .value-card, .vm-card, .pillar-card');
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, i * 100);
      });
      staggerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.services-grid, .values-grid, .vm-grid, .approach-right').forEach(el => {
  staggerObserver.observe(el);
});

// ---- CONTACT FORM ----
const sendBtn = document.getElementById('sendBtn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.contact-form-card input, .contact-form-card textarea');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();

    if (!name || !email) {
      sendBtn.textContent = 'Veuillez remplir les champs requis';
      sendBtn.style.background = '#A32D2D';
      sendBtn.style.color = '#fff';
      setTimeout(() => {
        sendBtn.innerHTML = `Envoyer le message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
        sendBtn.style.background = '';
        sendBtn.style.color = '';
      }, 2500);
      return;
    }

    sendBtn.innerHTML = `Message envoyé ✓`;
    sendBtn.style.background = '#3D7A58';
    sendBtn.style.color = '#F7F3EC';
    inputs.forEach(i => i.value = '');

    setTimeout(() => {
      sendBtn.innerHTML = `Envoyer le message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
      sendBtn.style.background = '';
      sendBtn.style.color = '';
    }, 3500);
  });
}

// ---- ACTIVE NAV LINK ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#1A3A2A' : '';
    link.style.fontWeight = link.getAttribute('href') === `#${current}` ? '600' : '';
  });
});
