// Simple i18n utility functions
export class I18n {
  private static currentLanguage: string = 'en';
  private static translations: Record<string, Record<string, string>> = {};

  static init() {
    // Get saved language or detect from browser
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    
    this.currentLanguage = savedLang || (browserLang === 'ar' ? 'ar' : 'en');
    
    // Apply language settings
    this.applyLanguage(this.currentLanguage);
    
    // Load translations dynamically
    this.loadTranslations();
  }

  static applyLanguage(lang: string) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update page title
    document.title = lang === 'ar' 
      ? 'MovinWare - حلول تخطيط موارد المؤسسات المدعومة بالذكاء الاصطناعي'
      : 'MovinWare - AI-Powered ERP Solutions';
      
    localStorage.setItem('language', lang);
    this.currentLanguage = lang;
  }

  static changeLanguage(lang: string) {
    this.applyLanguage(lang);
    this.translatePage();
  }

  static getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  static loadTranslations() {
    // This would typically load from external files or API
    // For now, we'll use the translations from our translations.ts file
    import('./translations').then(({ translations }) => {
      this.translations = translations;
      this.translatePage();
    });
  }

  static translatePage() {
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        const translation = this.getTranslation(key);
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          (element as HTMLInputElement).placeholder = translation;
        } else {
          element.innerHTML = translation;
        }
      }
    });
  }

  static getTranslation(key: string): any {
    const keys = key.split('.');
    let value: any = this.translations[this.currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English
        value = this.translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }
    
    return value !== undefined ? value : key;
  }

  static t(key: string): any {
    return this.getTranslation(key);
  }
}

// Initialize on DOM load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    I18n.init();
  });
}