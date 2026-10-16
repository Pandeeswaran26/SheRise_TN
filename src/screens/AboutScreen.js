/**
 * AboutScreen.js - SheRise TN Dedicated About Screen
 * 
 * Provides an informative, elegant overview of SheRise TN:
 * - Header with tactile Back button, SheRise TN logo, Title, and Language Switcher [ EN | தமிழ் ]
 * - Hero section: "Empowering Women. Strengthening Tamil Nadu." with tagline and decorative lotus motif
 * - About Section: Platform purpose and community reach across Tamil Nadu
 * - Mission Section: "To help women build safer, more independent futures through access to information, skills, opportunities, and support."
 * - Core Features:
 *     1. Stay Safe: Access safety information, emergency resources, and support services.
 *     2. Build Skills: Discover learning resources and opportunities to develop skills.
 *     3. Find Opportunities: Explore jobs, scholarships, and career development resources.
 *     4. Get Support: Find guidance and community support.
 * - Key Principles: Dignity & Respect, Privacy & Trust, Lifelong Learning, Community Solidarity
 * - Action footer with "Get Started" and "Back" buttons
 */

export function renderAboutScreen(container, { onBack, initialLang = 'en', onLangChange, onGetStarted }) {
  let currentLang = initialLang;

  const content = {
    en: {
      navTitle: 'About SheRise TN',
      backAria: 'Go back to welcome screen',
      heroHeading: 'Empowering Women.<br><span class="hl-magenta">Strengthening Tamil Nadu.</span>',
      heroTagline: '“Your safety. Your skills. Your sovereignty.”',
      heroSub: 'A dedicated mobile initiative designed to provide women across Tamil Nadu with reliable information, practical skill-building, and supportive community networks.',
      
      aboutHeading: 'About the Platform',
      aboutParagraph1: 'SheRise TN is designed to support, inspire, and uplift every woman in Tamil Nadu. Navigating life, education, and career requires reliable resources—our mission is to bring these directly into your hands.',
      aboutParagraph2: 'From students exploring higher education scholarships to entrepreneurs launching local micro-businesses and homemakers seeking digital literacy, SheRise TN offers accessible tools tailored for every stage of your journey.',
      
      missionHeading: 'Our Mission',
      missionQuote: '“To help women build safer, more independent futures through access to information, skills, opportunities, and support.”',
      
      pillarsHeading: 'Four Core Pillars',
      pillarsSub: 'Explore how SheRise TN supports your daily life, career ambitions, and personal wellbeing:',
      pillars: [
        {
          id: 'safety',
          badge: 'Pillar 01',
          title: 'Stay Safe',
          desc: 'Access safety information, emergency resources, and support services.',
          points: [
            '24/7 essential helpline numbers & emergency guidelines',
            'Safe travel tips and local support center directory',
            'Awareness on legal rights and personal safety mechanisms'
          ],
          bg: '#F3E8FF',
          accent: '#7027D9',
          icon: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7027D9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          `
        },
        {
          id: 'skills',
          badge: 'Pillar 02',
          title: 'Build Skills',
          desc: 'Discover learning resources and opportunities to develop skills.',
          points: [
            'Digital literacy & everyday smartphone productivity',
            'Financial literacy, budgeting & savings fundamentals',
            'Vocational crafts, coding basics & entrepreneurship'
          ],
          bg: '#FCE7F3',
          accent: '#DB2777',
          icon: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DB2777" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          `
        },
        {
          id: 'opportunities',
          badge: 'Pillar 03',
          title: 'Find Opportunities',
          desc: 'Explore jobs, scholarships, and career development resources.',
          points: [
            'Career openings, remote work & local enterprise vacancies',
            'Higher education grants & women scholarship programs',
            'Resume building, interview guidance & career fairs'
          ],
          bg: '#FEF3C7',
          accent: '#D97706',
          icon: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="3" ry="3"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              <path d="M12 12h.01"/>
            </svg>
          `
        },
        {
          id: 'support',
          badge: 'Pillar 04',
          title: 'Get Support',
          desc: 'Find guidance and community support.',
          points: [
            'Connect with peer groups and experienced mentors',
            'Access verified counselling and wellbeing advisory',
            'Inspiring stories of women leaders across Tamil Nadu'
          ],
          bg: '#DCFCE7',
          accent: '#059669',
          icon: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          `
        }
      ],

      valuesHeading: 'Our Guiding Principles',
      values: [
        {
          title: 'Dignity & Autonomy',
          desc: 'Every woman deserves equal respect, freedom of thought, and full control over her future.',
          icon: '✨'
        },
        {
          title: 'Safety & Privacy',
          desc: 'A secure, non-judgmental environment that respects your privacy and personal security.',
          icon: '🛡️'
        },
        {
          title: 'Inclusive Growth',
          desc: 'Accessible across all districts of Tamil Nadu for women of every background and walk of life.',
          icon: '🌱'
        },
        {
          title: 'Community Sisterhood',
          desc: 'Strength in unity—encouraging women to mentor, share knowledge, and lift each other up.',
          icon: '🤝'
        }
      ],

      btnCtaStart: 'Get Started with SheRise TN →',
      btnCtaBack: '← Back to Welcome Screen',
      footerCopyright: 'SheRise TN — Women Empowerment Platform for Tamil Nadu'
    },

    ta: {
      navTitle: 'ஷி ரைஸ் தமிழ்நாடு பற்றி',
      backAria: 'முகப்புத் திரைக்குத் திரும்பு',
      heroHeading: 'பெண்களின் முன்னேற்றம்.<br><span class="hl-magenta">வலிமையான தமிழ்நாடு.</span>',
      heroTagline: '“உங்கள் பாதுகாப்பு. உங்கள் திறன். உங்கள் இறையாண்மை.”',
      heroSub: 'தமிழ்நாட்டுப் பெண்கள் தங்களின் வாழ்வை மேம்படுத்த தேவையான நம்பகமான தகவல்கள், திறன் பயிற்சிகள் மற்றும் சமூக ஆதரவை வழங்கும் பிரத்யேக தளம்.',
      
      aboutHeading: 'தளம் பற்றி',
      aboutParagraph1: 'ஷி ரைஸ் தமிழ்நாடு என்பது தமிழ்நாட்டின் ஒவ்வொரு பெண்ணையும் ஊக்கப்படுத்தவும், முன்னேற்றவும் உருவாக்கப்பட்ட சிறப்பு முயற்சியாகும். கல்வி, தொழில், மற்றும் பாதுகாப்பான வாழ்விற்கு தேவையான வழிகாட்டுதல்களை உங்கள் விரல்நுனியில் கொண்டு சேர்ப்பதே எங்கள் குறிக்கோள்.',
      aboutParagraph2: 'உயர்கல்வி உதவித்தொகைகளைத் தேடும் மாணவிகள் முதல், சொந்தமாக தொழில் தொடங்கும் மகளிர் மற்றும் டிஜிட்டல் திறன்களைக் கற்கும் இல்லத்தரசிகள் வரை அனைவருக்கும் ஏற்ற எளிய பயன்பாடுகளை இத்தளம் வழங்குகிறது.',
      
      missionHeading: 'எங்கள் நோக்கம்',
      missionQuote: '“தகவல்கள், திறன்கள், வாய்ப்புகள் மற்றும் ஆதரவு மூலம் பெண்கள் பாதுகாப்பான, சுதந்திரமான எதிர்காலத்தை உருவாக்க உதவுதல்.”',
      
      pillarsHeading: 'நான்கு முக்கிய தூண்கள்',
      pillarsSub: 'ஷி ரைஸ் தமிழ்நாடு உங்கள் வாழ்க்கை, தொழில் மற்றும் நலனை எவ்வாறு ஆதரிக்கிறது என்பதைப் பாருங்கள்:',
      pillars: [
        {
          id: 'safety',
          badge: 'தூண் 01',
          title: 'பாதுகாப்பாக இருங்கள்',
          desc: 'பாதுகாப்புத் தகவல்கள், அவசர உதவி வளங்கள் மற்றும் ஆதரவு சேவைகளை அணுகுங்கள்.',
          points: [
            '24/7 முக்கிய உதவி எண்கள் மற்றும் அவசர வழிகாட்டுதல்கள்',
            'பாதுகாப்பான பயணக் குறிப்புகள் மற்றும் உதவி மையங்கள்',
            'சட்ட உரிமைகள் மற்றும் தனிநபர் பாதுகாப்பு குறித்த விழிப்புணர்வு'
          ],
          bg: '#F3E8FF',
          accent: '#7027D9',
          icon: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7027D9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          `
        },
        {
          id: 'skills',
          badge: 'தூண் 02',
          title: 'திறன்களை வளருங்கள்',
          desc: 'கற்றல் வளங்கள் மற்றும் திறன்களை வளர்ப்பதற்கான வாய்ப்புகளைக் கண்டறியுங்கள்.',
          points: [
            'டிஜிட்டல் அறிவு மற்றும் அன்றாட ஸ்மார்ட்போன் பயன்பாடு',
            'சேமிப்பு, வரவு செலவு மற்றும் நிதி விழிப்புணர்வு அடிப்படைகள்',
            'சுயதொழில் பயிற்சி, கைவினைக் கலை மற்றும் அடிப்படைக் குறியீட்டு முறைகள்'
          ],
          bg: '#FCE7F3',
          accent: '#DB2777',
          icon: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DB2777" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          `
        },
        {
          id: 'opportunities',
          badge: 'தூண் 03',
          title: 'வாய்ப்புகள் பெறுங்கள்',
          desc: 'வேலைகள், கல்வி உதவித்தொகைகள் மற்றும் தொழில் வளர்ச்சி வளங்களை ஆராயுங்கள்.',
          points: [
            'வேலைவாய்ப்புகள், உள்ளூர் தொழிற்துறை காலியிடங்கள்',
            'உயர்கல்வி உதவித்தொகைகள் மற்றும் மாணவிகளுக்கான மானியங்கள்',
            'சுயவிவரம் தயாரித்தல் மற்றும் நேர்காணல் வழிகாட்டுதல்'
          ],
          bg: '#FEF3C7',
          accent: '#D97706',
          icon: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="3" ry="3"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              <path d="M12 12h.01"/>
            </svg>
          `
        },
        {
          id: 'support',
          badge: 'தூண் 04',
          title: 'ஆதரவு பெறுங்கள்',
          desc: 'ஆலோசனை, வழிகாட்டுதல் மற்றும் சமூக ஆதரவைப் பெறுங்கள்.',
          points: [
            'வழிகாட்டிகள் மற்றும் பெண்களுக்கான நட்புக் குழுக்களுடன் இணைதல்',
            'நல்வாழ்வு ஆலோசனை மற்றும் வழிகாட்டுதல் உதவி',
            'தமிழ்நாடு பெண் சாதனையாளர்களின் எழுச்சியூட்டும் கதைகள்'
          ],
          bg: '#DCFCE7',
          accent: '#059669',
          icon: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          `
        }
      ],

      valuesHeading: 'எங்கள் முக்கிய கொள்கைகள்',
      values: [
        {
          title: 'கண்ணியம் & சமத்துவம்',
          desc: 'ஒவ்வொரு பெண்ணும் சம உரிமையுடனும், கண்ணியத்துடனும் வாழ துணை நிற்றல்.',
          icon: '✨'
        },
        {
          title: 'பாதுகாப்பு & தனிநபர் உரிமை',
          desc: 'தனிநபர் விவரங்களைப் பாதுகாக்கும் நம்பகமான மற்றும் பாதுகாப்பான சூழல்.',
          icon: '🛡️'
        },
        {
          title: 'அனைவருக்குமான வளர்ச்சி',
          desc: 'தமிழ்நாட்டின் அனைத்து மாவட்டங்களிலும் உள்ள அனைத்துப் பெண்களுக்கும் சமமான அணுகல்.',
          icon: '🌱'
        },
        {
          title: 'சகோதரத்துவ ஆதரவு',
          desc: 'பெண்கள் ஒருவருக்கொருவர் வழிகாட்டி, ஆதரவளித்து இணைந்து முன்னேறும் உணர்வு.',
          icon: '🤝'
        }
      ],

      btnCtaStart: 'ஷி ரைஸ் தமிழ்நாட்டைத் தொடங்குங்கள் →',
      btnCtaBack: '← முகப்புத் திரைக்குத் திரும்பு',
      footerCopyright: 'ஷி ரைஸ் தமிழ்நாடு — பெண்களுக்கான அதிகாரமளிக்கும் தளம்'
    }
  };

  function render() {
    const t = content[currentLang];

    container.innerHTML = `
      <div class="sherise-about-screen animate-screen-in" id="aboutScreen">
        
        <!-- 1. Header Navigation Bar -->
        <header class="about-top-bar">
          <button class="about-back-btn" id="btnAboutBack" aria-label="${t.backAria}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>

          <div class="about-header-branding">
            <img src="/sherise_official_logo.png" alt="SheRise TN" class="about-header-logo" />
            <h1 class="about-header-title">${t.navTitle}</h1>
          </div>

          <!-- Language Selector [ EN | தமிழ் ] -->
          <div class="lang-switch-pill" id="aboutLangSwitch" role="radiogroup" aria-label="Language Selector">
            <button class="lang-opt ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button class="lang-opt ${currentLang === 'ta' ? 'active' : ''}" data-lang="ta">தமிழ்</button>
          </div>
        </header>

        <!-- 2. Scrollable Content Area -->
        <main class="about-scroll-viewport">
          
          <!-- Hero Section with Soft Gradients & Lotus Motif -->
          <section class="about-hero-card">
            <div class="about-lotus-aura" aria-hidden="true">
              <svg width="120" height="80" viewBox="0 0 100 60" fill="none" class="lotus-motif-svg">
                <path d="M50 10 C40 25, 30 45, 50 55 C70 45, 60 25, 50 10 Z" fill="rgba(231, 45, 167, 0.15)"/>
                <path d="M50 20 C32 25, 20 40, 42 54 C55 48, 50 35, 50 20 Z" fill="rgba(112, 39, 217, 0.18)"/>
                <path d="M50 20 C68 25, 80 40, 58 54 C45 48, 50 35, 50 20 Z" fill="rgba(112, 39, 217, 0.18)"/>
                <circle cx="50" cy="54" r="3" fill="#E72DA7"/>
              </svg>
            </div>

            <div class="about-hero-badge">Official Initiative</div>
            <h2 class="about-hero-heading">${t.heroHeading}</h2>
            <p class="about-hero-tagline">${t.heroTagline}</p>
            <p class="about-hero-sub">${t.heroSub}</p>
          </section>

          <!-- About Platform Section -->
          <section class="about-content-card">
            <div class="card-title-row">
              <span class="card-accent-pill"></span>
              <h3 class="card-heading">${t.aboutHeading}</h3>
            </div>
            <p class="card-body-text">${t.aboutParagraph1}</p>
            <p class="card-body-text" style="margin-top: 0.65rem;">${t.aboutParagraph2}</p>
          </section>

          <!-- Mission Section -->
          <section class="about-mission-card">
            <div class="mission-badge-row">
              <span class="mission-icon">🎯</span>
              <span class="mission-label">${t.missionHeading}</span>
            </div>
            <blockquote class="mission-quote">
              ${t.missionQuote}
            </blockquote>
          </section>

          <!-- Core Pillars Grid -->
          <section class="about-pillars-section">
            <div class="section-title-wrap">
              <h3 class="section-heading">${t.pillarsHeading}</h3>
              <p class="section-subheading">${t.pillarsSub}</p>
            </div>

            <div class="pillars-stack">
              ${t.pillars.map(p => `
                <div class="pillar-card" id="aboutPillar-${p.id}">
                  <div class="pillar-card-header">
                    <div class="pillar-icon-box" style="background-color: ${p.bg};">
                      ${p.icon}
                    </div>
                    <div class="pillar-meta">
                      <span class="pillar-badge" style="color: ${p.accent}; background: ${p.bg};">${p.badge}</span>
                      <h4 class="pillar-title">${p.title}</h4>
                    </div>
                  </div>
                  <p class="pillar-desc">${p.desc}</p>
                  <ul class="pillar-points-list">
                    ${p.points.map(pt => `
                      <li>
                        <span class="point-bullet" style="color: ${p.accent};">✓</span>
                        <span>${pt}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Guiding Principles Section -->
          <section class="about-principles-section">
            <h3 class="section-heading" style="text-align: center; margin-bottom: 0.85rem;">${t.valuesHeading}</h3>
            <div class="principles-grid">
              ${t.values.map(v => `
                <div class="principle-item-card">
                  <div class="principle-icon">${v.icon}</div>
                  <h4 class="principle-title">${v.title}</h4>
                  <p class="principle-desc">${v.desc}</p>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Action Buttons Dock -->
          <div class="about-actions-dock">
            <button class="btn-primary-get-started" id="btnAboutGetStarted">
              <span>${t.btnCtaStart}</span>
            </button>
            <button class="btn-secondary-about-back" id="btnAboutBackCta">
              <span>${t.btnCtaBack}</span>
            </button>
          </div>

          <!-- Bottom Footer Flourish -->
          <footer class="about-footer-dock">
            <p class="about-footer-note">${t.footerCopyright}</p>
          </footer>

        </main>

      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    // 1. Back button in header
    const btnBack = container.querySelector('#btnAboutBack');
    if (btnBack) {
      btnBack.addEventListener('click', () => {
        if (typeof onBack === 'function') onBack();
      });
    }

    // 2. Back button in actions dock
    const btnBackCta = container.querySelector('#btnAboutBackCta');
    if (btnBackCta) {
      btnBackCta.addEventListener('click', () => {
        if (typeof onBack === 'function') onBack();
      });
    }

    // 3. Get Started button
    const btnGetStarted = container.querySelector('#btnAboutGetStarted');
    if (btnGetStarted) {
      btnGetStarted.addEventListener('click', () => {
        if (typeof onGetStarted === 'function') onGetStarted();
      });
    }

    // 4. Language Switcher [ EN | தமிழ் ]
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
  }

  // Initial render
  render();
}
