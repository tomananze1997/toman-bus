import { Injectable, inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { ELanguages } from '@enums';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translate: TranslateService = inject(TranslateService);

  public setLanguageFromBrowserSettings(): void {
    const browserLang: string = navigator.language.split('-')[0].toLowerCase();
    let selectedLang: ELanguages;

    switch (browserLang) {
      case ELanguages.SLOVENIAN:
        selectedLang = ELanguages.SLOVENIAN;
        break;
      case ELanguages.GERMAN:
        selectedLang = ELanguages.GERMAN;
        break;
      default:
        selectedLang = ELanguages.ENGLISH;
    }

    this.translate.setDefaultLang(ELanguages.ENGLISH);
    this.translate.use(selectedLang);
  }
}
