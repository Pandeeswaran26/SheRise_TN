/**
 * SheRise TN - Application Controller
 * Manages native screen transitions, code-based splash flow, and application routing.
 */

import { renderSplashScreen } from './screens/SplashScreen.js';
import { renderOnboardingScreen } from './screens/OnboardingScreen.js';
import { renderAboutScreen } from './screens/AboutScreen.js';

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.getElementById('app');
  let currentLanguage = 'en';

  // Central Application Router
  const navigateTo = (screenName, options = {}) => {
    if (options.lang) {
      currentLanguage = options.lang;
    }

    if (screenName === 'splash') {
      renderSplashScreen(appRoot, () => {
        navigateTo('onboarding');
      });
    } else if (screenName === 'onboarding') {
      renderOnboardingScreen(appRoot, {
        initialLang: currentLanguage,
        onLangChange: (lang) => {
          currentLanguage = lang;
        },
        onNavigateToAbout: () => {
          navigateTo('about');
        },
        onRestartSplash: () => {
          navigateTo('splash');
        }
      });
    } else if (screenName === 'about') {
      renderAboutScreen(appRoot, {
        initialLang: currentLanguage,
        onLangChange: (lang) => {
          currentLanguage = lang;
        },
        onBack: () => {
          navigateTo('onboarding');
        },
        onGetStarted: () => {
          navigateTo('onboarding');
          // Give DOM a frame to mount and trigger toast
          setTimeout(() => {
            const btn = document.getElementById('btnGetStarted');
            if (btn) btn.click();
          }, 150);
        }
      });
    }
  };

  // Launch initial screen (support query param for testing e.g. ?screen=onboarding)
  const urlParams = new URLSearchParams(window.location.search);
  const initialScreen = urlParams.get('screen') || 'splash';
  navigateTo(initialScreen);
});
