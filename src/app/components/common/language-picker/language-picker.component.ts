import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { ELanguages } from '@enums';

import { IDropdown } from '@interfaces';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.css']
})
export class LanguagePickerComponent implements OnInit {
  private translate: TranslateService = inject(TranslateService);
  @Output() languageChange: EventEmitter<void> = new EventEmitter<void>();

  public selectedLanguage: IDropdown = { label: 'Slovenščina', value: ELanguages.SLOVENIAN };
  public languages: IDropdown[] = [
    { label: 'NAVIGATION.LANGUAGE.SLOVENIAN', value: ELanguages.SLOVENIAN },
    { label: 'NAVIGATION.LANGUAGE.ENGLISH', value: ELanguages.ENGLISH },
    { label: 'NAVIGATION.LANGUAGE.GERMAN', value: ELanguages.GERMAN }
  ];

  ngOnInit(): void {
    this.selectedLanguage =
      this.getDropdownObjectFromValue(this.translate.currentLang as ELanguages) || this.getDropdownObjectFromValue(this.translate.getDefaultLang() as ELanguages);
  }

  public onLangChange(lang: ELanguages): void {
    this.translate.use(lang);
    this.selectedLanguage = this.getDropdownObjectFromValue(lang);
    this.languageChange.emit();
  }

  private getDropdownObjectFromValue(value: ELanguages): IDropdown {
    switch (value) {
      case ELanguages.SLOVENIAN:
        return { label: 'NAVIGATION.LANGUAGE.SLOVENIAN', value: ELanguages.SLOVENIAN };
      case ELanguages.GERMAN:
        return { label: 'NAVIGATION.LANGUAGE.GERMAN', value: ELanguages.GERMAN };
      default:
        return { label: 'NAVIGATION.LANGUAGE.ENGLISH', value: ELanguages.ENGLISH };
    }
  }
}
