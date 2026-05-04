# 🧠 GUIDE PROMPTS — EVALEN PARTNERS WEBSITE
## Meilleurs prompts pour continuer le développement dans VS Code

---

## 📁 STRUCTURE DU PROJET
```
evalen-partners/
├── index.html      ← Page principale (toutes sections)
├── style.css       ← Styles (palette or/vert forêt/ivoire)
├── script.js       ← Interactions JS
└── PROMPTS_VSCODE.md ← Ce guide
```

---

## 🎨 PALETTE DE COULEURS DU SITE
| Variable CSS | Valeur | Usage |
|---|---|---|
| `--gold` | `#C49A2B` | Accent principal, boutons |
| `--gold-light` | `#E8C260` | Texte doré sur fond sombre |
| `--forest` | `#1A3A2A` | Couleur principale sombre |
| `--forest-mid` | `#2C5C40` | Hover, éléments secondaires |
| `--ivory` | `#F7F3EC` | Fond clair, texte sur sombre |
| `--dark` | `#0F1C14` | Hero, sections sombres |

---

## 🚀 PROMPTS POUR CHAQUE TÂCHE

---

### 1. AJOUTER UNE SECTION "ÉQUIPE"
```
Ajoute une section #team entre les sections Values et Commitments dans index.html.
Utilise les variables CSS existantes (--gold, --forest, --ivory, --dark).
Chaque carte membre doit avoir : photo (placeholder), nom, titre, bio courte.
Style cohérent avec les .vm-card existantes.
Pas de librairie externe — HTML/CSS/JS pur.
```

---

### 2. AJOUTER UNE PAGE "PROJETS / RÉFÉRENCES"
```
Crée un fichier projets.html reprenant le header et footer de index.html.
Affiche un grid de cartes projets filtrable par domaine (Évaluation, Data, Finance, Entrepreneuriat).
Filtre via boutons JavaScript sans rechargement.
Respecte la palette CSS : --forest pour les badges actifs, --gold pour les accents.
```

---

### 3. AJOUTER DES ANIMATIONS AU SCROLL
```
Dans script.js, améliore les animations de reveal scroll pour que :
- Les cartes .service-card apparaissent en cascade avec un délai de 100ms entre chaque
- Les .pillar-card glissent depuis la droite (translateX au lieu de translateY)
- Utilise uniquement IntersectionObserver, sans librairie externe
```

---

### 4. RENDRE LE FORMULAIRE FONCTIONNEL (EmailJS)
```
Intègre EmailJS dans le formulaire de contact d'index.html.
Service ID : "service_XXXXX"
Template ID : "template_XXXXX"
Public Key : "XXXXX"
Les champs à envoyer : name, email, organisation, message.
Feedback visuel : bouton change en vert avec ✓ en cas de succès, rouge en cas d'erreur.
Garde le style existant .btn-send.
```

---

### 5. OPTIMISER LES PERFORMANCES
```
Optimise index.html pour les performances :
1. Remplace les Google Fonts par des fonts système (system-ui pour DM Sans, Georgia pour Playfair Display)
2. Ajoute loading="lazy" sur toutes les images futures
3. Minifie le CSS inline critique (above the fold) dans un <style> dans le <head>
4. Ajoute les meta tags SEO : description, og:title, og:description, og:image
```

---

### 6. AJOUTER UN BLOG / INSIGHTS
```
Crée insights.html : une page de blog/articles pour Evalen Partners.
Structure : hero avec titre "Insights & Analyses", grid d'articles avec filtres.
Chaque article-card : date, tag domaine (--gold border-left), titre (Playfair Display), extrait, lien "Lire →".
Design cohérent avec les .service-card de la page principale.
```

---

### 7. VERSION MULTILINGUE (FR/EN)
```
Ajoute un sélecteur de langue FR/EN dans la nav de index.html.
Stocke les traductions dans un objet JS translations = { fr: {...}, en: {...} }.
Au clic, remplace tous les textes via data-i18n="key" sur chaque élément.
La langue choisie est sauvegardée en localStorage.
Ne modifie pas le CSS existant.
```

---

### 8. DARK MODE TOGGLE
```
Ajoute un bouton toggle dark/light mode dans la nav (icône lune/soleil SVG).
En dark mode : background ivory → --dark, textes sombres → --ivory.
Utilise prefers-color-scheme comme valeur par défaut, puis localStorage pour mémoriser le choix.
Transitions CSS fluides (transition: background 0.3s, color 0.3s) sur body et les éléments clés.
```

---

### 9. SECTION PARTENAIRES / LOGOS
```
Ajoute une section partners après la section hero dans index.html.
Affiche un bandeau défilant (marquee CSS infinite scroll) de logos partenaires en placeholder.
Background : rgba(26,58,42,0.05) (--forest avec 5% opacité).
Logos en niveaux de gris au repos, couleur au hover.
```

---

### 10. SEO & META TAGS COMPLETS
```
Complète le <head> d'index.html avec :
- <meta name="description" content="..."> (160 caractères max sur Evalen Partners)
- Open Graph : og:title, og:description, og:type, og:url, og:image
- Twitter Card : twitter:card, twitter:title, twitter:description
- <link rel="canonical"> 
- Schema.org JSON-LD pour une organisation professionnelle (LocalBusiness)
- Sitemap mention
```

---

## 🛠️ COMMANDES UTILES DANS VS CODE

| Commande | Action |
|---|---|
| `Ctrl+Shift+P` → `Live Server: Open` | Lancer le site en local |
| `Ctrl+Shift+P` → `Format Document` | Formater le code |
| `Ctrl+/` | Commenter/décommenter |
| `Ctrl+D` | Sélection multiple (même mot) |
| `Alt+Z` | Toggle word wrap |

## 🔌 EXTENSIONS VS CODE RECOMMANDÉES
- **Live Server** (Ritwick Dey) — aperçu en direct
- **Prettier** — formatage automatique
- **CSS Variable Autocomplete** — autocomplétion des variables CSS
- **HTML CSS Support** — liaison HTML↔CSS
- **GitLens** — suivi des modifications

---

## 📌 RAPPELS IMPORTANTS
- **Toujours utiliser les variables CSS** (`--gold`, `--forest`, etc.) pour rester cohérent
- **Police titres** : `font-family: 'Playfair Display', serif;`
- **Police corps** : `font-family: 'DM Sans', sans-serif;`
- **Border-radius standard** : `var(--radius)` = 12px, `var(--radius-sm)` = 6px
- **Ne pas modifier** la structure HTML des sections existantes sans adapter le CSS correspondant
