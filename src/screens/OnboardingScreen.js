/**
 * OnboardingScreen.js - SheRise TN Exact Reference Onboarding Screen
 * 
 * Accurately reproduces the master design specification from Image 1:
 * - Soft lavender, pale pink, and warm white atmospheric background gradient.
 * - Language selector in the upper-right corner with working [ EN | தமிழ் ] toggle.
 * - Unchanged original SheRise TN logo asset centered near the top with tagline:
 *   "Your safety. Your skills. Your sovereignty."
 * - Centered 3-line headline:
 *   “Empowered
 *    Women,
 *    Stronger Tamil Nadu”
 *   with "Empowered" and "Stronger Tamil Nadu" in deep purple, and "Women," in vibrant magenta.
 * - Supporting description directly beneath:
 *   “A safer, brighter and more independent
 *    tomorrow for every woman in Tamil Nadu.”
 * - Prominent central illustration of the empowered woman in white kurti and flowing purple dupatta
 *   with arms outstretched in freedom and joy, surrounded by Western Ghats mountains,
 *   Dravidian temple gopurams, palm trees, warm rising sun, and birds.
 * - Rounded white feature panel with 4 circular pillars:
 *   1. Stay Safe (Emergency & Support Services)
 *   2. Build Skills (Learn & Grow)
 *   3. Find Opportunities (Jobs & Scholarships)
 *   4. Get Support (Guidance & Community)
 * - Three pagination indicators with the active pill.
 * - Large purple-gradient “Get Started →” pill button.
 * - Outlined “Watch Introduction” pill button with purple play icon.
 * - Flowing lavender and purple waves with botanical leaf flourishes in bottom corners.
 * - Code-based animations: breathing motion, sun pulse, bird glide, sequential entrance, press feedback.
 */

import { showIntroductionModal } from '../components/IntroductionModal.js';

export function renderOnboardingScreen(container, options = {}) {
  const { 
    initialLang = 'en', 
    onLangChange, 
    onNavigateToAbout, 
    onRestartSplash 
  } = options;

  let currentLang = initialLang;
  let currentSlide = 0;

  // Localization dictionaries
  const content = {
    en: {
      navAbout: 'About',
      tagline: 'Your safety. Your skills. Your sovereignty.',
      headlinePart1: 'Empowered',
      headlineHighlight: 'Women,',
      headlinePart2: 'Stronger Tamil Nadu',
      subtitle: 'A safer, brighter and more independent<br>tomorrow for every woman in Tamil Nadu.',
      features: [
        {
          id: 'safety',
          title: 'Stay Safe',
          desc: 'Emergency &<br>Support Services',
          bg: '#E8DCFE',
          icon: `
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#7027D9">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14.5l-3.5-3.5 1.41-1.41L11 13.67l5.59-5.59 1.41 1.41L11 16.5z"/>
            </svg>
          `
        },
        {
          id: 'skills',
          title: 'Build Skills',
          desc: 'Learn &<br>Grow',
          bg: '#FDE4F3',
          icon: `
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#DB2777">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
            </svg>
          `
        },
        {
          id: 'opportunities',
          title: 'Find Opportunities',
          desc: 'Jobs &<br>Scholarships',
          bg: '#FDECD4',
          icon: `
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#D97706">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
          `
        },
        {
          id: 'support',
          title: 'Get Support',
          desc: 'Guidance &<br>Community',
          bg: '#DBF6EE',
          icon: `
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#059669">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
          `
        }
      ],
      btnGetStarted: 'Get Started',
      btnWatchIntro: 'Watch Introduction',
      slides: [
        {
          headlinePart1: 'Empowered',
          headlineHighlight: 'Women,',
          headlinePart2: 'Stronger Tamil Nadu',
          subtitle: 'A safer, brighter and more independent<br>tomorrow for every woman in Tamil Nadu.'
        },
        {
          headlinePart1: 'Instant',
          headlineHighlight: 'SOS Safety,',
          headlinePart2: 'Connected with TN 112',
          subtitle: 'Live location tracking, silent emergency trigger,<br>and verified police responder network across TN.'
        },
        {
          headlinePart1: 'Certified',
          headlineHighlight: 'Skills & Jobs,',
          headlinePart2: 'Financial Sovereignty',
          subtitle: 'Free government-certified digital courses,<br>entrepreneur micro-grants, and career placement.'
        }
      ]
    },
    ta: {
      navAbout: 'பற்றி',
      tagline: 'உங்கள் பாதுகாப்பு. உங்கள் திறன். உங்கள் இறையாண்மை.',
      headlinePart1: 'வல்லமைமிக்க',
      headlineHighlight: 'பெண்கள்,',
      headlinePart2: 'வலிமையான தமிழ்நாடு',
      subtitle: 'தமிழ்நாட்டின் ஒவ்வொரு பெண்ணிற்கும் பாதுகாப்பான,<br>ஒளிமயமான மற்றும் சுதந்திரமான எதிர்காலம்.',
      features: [
        {
          id: 'safety',
          title: 'பாதுகாப்பாக இருங்கள்',
          desc: 'அவசர உதவி &<br>ஆதரவு சேவைகள்',
          bg: '#E8DCFE',
          icon: `
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#7027D9">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14.5l-3.5-3.5 1.41-1.41L11 13.67l5.59-5.59 1.41 1.41L11 16.5z"/>
            </svg>
          `
        },
        {
          id: 'skills',
          title: 'திறன்களை வளருங்கள்',
          desc: 'கற்று<br>முன்னேறுங்கள்',
          bg: '#FDE4F3',
          icon: `
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#DB2777">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
            </svg>
          `
        },
        {
          id: 'opportunities',
          title: 'வாய்ப்புகள் பெறுங்கள்',
          desc: 'வேலை &<br>கல்வி உதவித்தொகை',
          bg: '#FDECD4',
          icon: `
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#D97706">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
          `
        },
        {
          id: 'support',
          title: 'ஆதரவு பெறுங்கள்',
          desc: 'வழிகாட்டுதல் &<br>சமூகம்',
          bg: '#DBF6EE',
          icon: `
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#059669">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
          `
        }
      ],
      btnGetStarted: 'தொடங்குங்கள்',
      btnWatchIntro: 'அறிமுகக் காட்சியைக் காண்க',
      slides: [
        {
          headlinePart1: 'வல்லமைமிக்க',
          headlineHighlight: 'பெண்கள்,',
          headlinePart2: 'வலிமையான தமிழ்நாடு',
          subtitle: 'தமிழ்நாட்டின் ஒவ்வொரு பெண்ணிற்கும் பாதுகாப்பான,<br>ஒளிமயமான மற்றும் சுதந்திரமான எதிர்காலம்.'
        },
        {
          headlinePart1: 'உடனடி',
          headlineHighlight: 'SOS பாதுகாப்பு,',
          headlinePart2: 'TN 112 இணைப்பு',
          subtitle: 'நிகழ்நேர இருப்பிட பகிர்வு, அவசர எச்சரிக்கை<br>மற்றும் தமிழ்நாடு காவல் மீட்பு வலைப்பின்னல்.'
        },
        {
          headlinePart1: 'சான்றளிக்கப்பட்ட',
          headlineHighlight: 'திறன் & வேலைகள்,',
          headlinePart2: 'பொருளாதார சுதந்திரம்',
          subtitle: 'இலவச அரசு அங்கீகரிக்கப்பட்ட படிப்புகள்,<br>பெண் தொழில்முனைவோர் மானியங்கள் மற்றும் வேலைவாய்ப்புகள்.'
        }
      ]
    }
  };

  function render() {
    const t = content[currentLang];
    const slide = t.slides[currentSlide] || t.slides[0];

    container.innerHTML = `
      <div class="sherise-onboarding-screen animate-screen-in" id="onboardingScreen">

        <!-- 1. Top Section: Language Switcher in Upper-Right Corner -->
        <header class="onboarding-top-bar">
          <!-- Working EN / தமிழ் Language Selector Pill -->
          <div class="lang-switch-pill" id="langSwitchPill" role="radiogroup" aria-label="Language Selector">
            <button class="lang-opt ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button class="lang-opt ${currentLang === 'ta' ? 'active' : ''}" data-lang="ta">தமிழ்</button>
          </div>
        </header>

        <!-- 2. Main Scroll-Free Viewport Container -->
        <main class="onboarding-app-content">

          <!-- A. Centered Brand Logo (Exact Finalized SheRise TN Logo) -->
          <div class="onboarding-brand-header">
            <img 
              src="/sherise_official_logo.png" 
              alt="SheRise TN — ${t.tagline}" 
              class="onboarding-logo-img"
              loading="eager"
            />
          </div>

          <!-- B. Headline with Exact Line Breaks & Color Accents -->
          <div class="onboarding-text-hero">
            <h1 class="onboarding-main-headline">
              <span class="hl-bold">${slide.headlinePart1}</span><br>
              <span class="hl-magenta">${slide.headlineHighlight}</span><br>
              <span class="hl-bold">${slide.headlinePart2}</span>
            </h1>
            <p class="onboarding-subtitle">
              ${slide.subtitle}
            </p>
          </div>

          <!-- C. Prominent Central Illustration of Empowered Woman with Outstretched Arms & Tamil Nadu Landscape -->
          <div class="onboarding-hero-stage">
            <div class="hero-art-wrapper">
              <img 
                src="/sherise_onboarding_woman_hero_hd.png" 
                alt="Empowered Tamil Woman with Outstretched Arms in Tamil Nadu Landscape" 
                class="onboarding-hero-art"
                loading="eager"
              />
              <!-- Subtle Animated Sun Glow Pulse -->
              <div class="animated-sun-pulse" aria-hidden="true"></div>
              <!-- Subtle Animated Birds Gliding in Horizon -->
              <div class="animated-birds-group" aria-hidden="true">
                <span class="sky-bird bird-1"></span>
                <span class="sky-bird bird-2"></span>
              </div>
            </div>
          </div>

          <!-- D. Rounded White Feature Panel (4 Core Pillars) -->
          <section class="onboarding-feature-panel" aria-label="Core Pillars">
            <div class="feature-items-grid">
              ${t.features.map((f, idx) => `
                <div class="feature-item-col" data-feature="${f.id}" style="animation-delay: ${0.05 * (idx + 1)}s">
                  <div class="feature-icon-circle" style="background-color: ${f.bg};">
                    ${f.icon}
                  </div>
                  <h3 class="feature-title">${f.title}</h3>
                  <p class="feature-desc">${f.desc}</p>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- E. Three Interactive Pagination Indicators -->
          <div class="onboarding-pagination-dock" role="tablist" aria-label="Onboarding Slide Navigation">
            <button class="pag-dot ${currentSlide === 0 ? 'active' : ''}" data-slide="0" aria-label="Slide 1"></button>
            <button class="pag-dot ${currentSlide === 1 ? 'active' : ''}" data-slide="1" aria-label="Slide 2"></button>
            <button class="pag-dot ${currentSlide === 2 ? 'active' : ''}" data-slide="2" aria-label="Slide 3"></button>
          </div>

          <!-- F & G. Unified Bottom Cluster: Action Buttons & Flowing Flourish -->
          <div class="onboarding-bottom-cluster">
            <!-- Action Buttons: Get Started & Restored Watch Introduction -->
            <div class="onboarding-actions-group">
              <button class="btn-primary-get-started" id="btnGetStarted">
                <span>${t.btnGetStarted}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="arrow-icon">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              <button class="btn-secondary-watch-intro" id="btnWatchIntro">
                <div class="btn-play-circle">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#FFFFFF">
                    <polygon points="6 3 20 12 6 21 6 3"/>
                  </svg>
                </div>
                <span>${t.btnWatchIntro}</span>
              </button>
            </div>

            <!-- Bottom Flourish: Lavender & Purple Waves with Botanical Leaves (Exact Reference Image 2) -->
            <footer class="onboarding-bottom-flourish" aria-hidden="true">
              <img 
                src="/sherise_onboarding_bottom_exact_hd.png?v=noline" 
                alt="Tamil Nadu Botanical Waves" 
                class="onboarding-bottom-waves-img"
                loading="eager"
              />
            </footer>
          </div>

        </main>

      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    // 1. Language Toggle (EN / தமிழ்)
    const langBtns = container.querySelectorAll('.lang-opt');
    langBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang !== currentLang) {
          currentLang = selectedLang;
          if (typeof onLangChange === 'function') {
            onLangChange(currentLang);
          }
          render();
        }
      });
    });

    // 2. Pagination Dots
    const dots = container.querySelectorAll('.pag-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
        if (!isNaN(slideIdx) && slideIdx !== currentSlide) {
          currentSlide = slideIdx;
          render();
        }
      });
    });

    // 3. Feature Card Interactions (Toast info)
    const featureCols = container.querySelectorAll('.feature-item-col');
    featureCols.forEach(col => {
      col.addEventListener('click', () => {
        const featId = col.getAttribute('data-feature');
        showFeatureToast(featId);
      });
    });

    // 4. Get Started Button
    const btnGetStarted = container.querySelector('#btnGetStarted');
    if (btnGetStarted) {
      btnGetStarted.addEventListener('click', () => {
        showFeatureToast('started');
      });
    }

    // 5. Watch Introduction Button -> Opens Interactive Introduction Modal
    const btnWatchIntro = container.querySelector('#btnWatchIntro');
    if (btnWatchIntro) {
      btnWatchIntro.addEventListener('click', () => {
        showIntroductionModal({
          currentLang,
          onOpenAbout: () => {
            if (typeof onNavigateToAbout === 'function') {
              onNavigateToAbout();
            }
          },
          onGetStarted: () => {
            showFeatureToast('started');
          }
        });
      });
    }
  }

  function showFeatureToast(type) {
    const existingToast = document.querySelector('.sherise-live-toast');
    if (existingToast) existingToast.remove();

    const messages = {
      en: {
        safety: { title: 'Emergency SOS Ready', desc: 'Directly linked with Tamil Nadu 112 emergency response network.' },
        skills: { title: 'Skill Academy', desc: 'Browse over 50+ free certified digital and vocational courses.' },
        opportunities: { title: 'TN Career Portal', desc: 'Access exclusive job fairs, government schemes, and internships.' },
        support: { title: 'Community & Mentorship', desc: 'Join 100,000+ empowered Tamil Nadu women and verified legal advisors.' },
        started: { title: 'Welcome to SheRise TN!', desc: 'Navigating to registration & authentication portal...' }
      },
      ta: {
        safety: { title: 'அவசர SOS தயார்', desc: 'தமிழ்நாடு 112 அவசர உதவி மையத்துடன் நேரடியாக இணைக்கப்பட்டுள்ளது.' },
        skills: { title: 'திறன் பயிற்சி மையம்', desc: '50-க்கும் மேற்பட்ட இலவச அரசு சான்றிதழ் படிப்புகளைக் கண்டறியுங்கள்.' },
        opportunities: { title: 'வேலைவாய்ப்பு மையம்', desc: 'பெண்களுக்கான பிரத்யேக வேலைவாய்ப்புகள் மற்றும் அரசு திட்டங்கள்.' },
        support: { title: 'சமூக வழிகாட்டுதல்', desc: '1,00,000+ தமிழ்நாட்டுப் பெண்கள் மற்றும் சட்ட ஆலோசகர்களுடன் இணையுங்கள்.' },
        started: { title: 'ஷி ரைஸ் தமிழ்நாட்டிற்கு நல்வரவு!', desc: 'பதிவு பக்கத்திற்கு அழைத்துச் செல்லப்படுகிறது...' }
      }
    };

    const dict = messages[currentLang] || messages.en;
    const item = dict[type] || dict.started;

    const toast = document.createElement('div');
    toast.className = 'sherise-live-toast toast-show';
    toast.innerHTML = `
      <div class="toast-icon">✨</div>
      <div class="toast-body">
        <strong>${item.title}</strong>
        <span>${item.desc}</span>
      </div>
    `;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('toast-show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // Initial render
  render();
}
