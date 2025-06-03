import { Component, OnInit, inject } from '@angular/core';

import { LanguageService, SvgIconService } from '@services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private languageService: LanguageService = inject(LanguageService);
  private svgIconService: SvgIconService = inject(SvgIconService);

  constructor() {
    this.svgIconService.registerIcons();
  }

  ngOnInit(): void {
    this.languageService.setLanguageFromBrowserSettings();
  }
}
