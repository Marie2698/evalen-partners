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

// ============================================================
// SYSTÈME MULTILINGUE FR / EN
// ============================================================
const translations = {
  fr: {
    "nav-about": "À propos",
    "nav-services": "Services",
    "nav-approach": "Approche",
    "nav-values": "Valeurs",
    "nav-contact": "Contact",
    "hero-badge": "Cabinet de Conseil Multidisciplinaire · Dakar, Sénégal",
    "hero-slogan": "From Data to Decisions, from Learning to Impact.",
    "hero-sub": "Evalen Partners place l'évidence, la rigueur analytique et l'apprentissage au cœur de la décision stratégique — pour les gouvernements, ONG, entreprises et organisations d'Afrique francophone.",
    "hero-btn1": "Nos services",
    "hero-btn2": "Nous contacter",
    "stat-label1": "Domaines d'expertise",
    "stat-label2": "Orientés impact",
    "stat-label3": "Cabinet de référence",
    "about-tag": "Qui sommes-nous",
    "about-title": "La rencontre entre l'intelligence des données et l'engagement pour le changement",
    "about-desc": "Evalen Partners est un cabinet de conseil multidisciplinaire spécialisé dans l'évaluation de projets et programmes, l'analyse de données, l'ingénierie financière, le renforcement des capacités organisationnelles et l'accompagnement à l'entrepreneuriat.",
    "services-tag": "Ce que nous faisons",
    "services-title": "Nos domaines d'intervention",
    "services-sub": "Cinq expertises complémentaires pour accompagner votre transformation",
    "approach-tag": "Notre démarche",
    "approach-title": "Une approche en quatre piliers fondamentaux",
    "values-tag": "Ce en quoi nous croyons",
    "values-title": "Nos valeurs",
    "commits-tag": "Ce que nous promettons",
    "commits-title": "Nos engagements",
    "contact-tag": "Parlons ensemble",
    "contact-title": "Prêts à transformer vos données en décisions ?",
    "contact-desc": "Notre équipe d'experts est disponible pour étudier vos besoins et vous proposer les solutions les mieux adaptées à votre contexte.",
    "form-name": "Votre nom",
    "form-email": "Email",
    "form-org": "Organisation",
    "form-message": "Message",
    "form-btn": "Envoyer le message",
  },
  en: {
    "nav-about": "About",
    "nav-services": "Services",
    "nav-approach": "Approach",
    "nav-values": "Values",
    "nav-contact": "Contact",
    "hero-badge": "Multidisciplinary Consulting Firm · Dakar, Senegal",
    "hero-slogan": "From Data to Decisions, from Learning to Impact.",
    "hero-sub": "Evalen Partners places evidence, analytical rigor and learning at the heart of strategic decision-making — for governments, NGOs, businesses and organizations across French-speaking Africa.",
    "hero-btn1": "Our services",
    "hero-btn2": "Contact us",
    "stat-label1": "Areas of expertise",
    "stat-label2": "Impact-oriented",
    "stat-label3": "Reference firm",
    "about-tag": "Who we are",
    "about-title": "Where data intelligence meets commitment to change",
    "about-desc": "Evalen Partners is a multidisciplinary consulting firm specializing in project and program evaluation, data analysis, financial engineering, organizational capacity building and entrepreneurship support.",
    "services-tag": "What we do",
    "services-title": "Our areas of intervention",
    "services-sub": "Five complementary expertises to support your transformation",
    "approach-tag": "Our approach",
    "approach-title": "An approach built on four fundamental pillars",
    "values-tag": "What we believe in",
    "values-title": "Our values",
    "commits-tag": "What we promise",
    "commits-title": "Our commitments",
    "contact-tag": "Let's talk",
    "contact-title": "Ready to turn your data into decisions?",
    "contact-desc": "Our team of experts is available to study your needs and offer the best solutions for your context.",
    "form-name": "Your name",
    "form-email": "Email",
    "form-org": "Organization",
    "form-message": "Message",
    "form-btn": "Send message",
  }
};

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  localStorage.setItem('lang', lang);
  document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
}

// Charger la langue sauvegardée
const savedLang = localStorage.getItem('lang') || 'fr';
applyLanguage(savedLang);

document.getElementById('lang-fr').addEventListener('click', () => applyLanguage('fr'));
document.getElementById('lang-en').addEventListener('click', () => applyLanguage('en'));