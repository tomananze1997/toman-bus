import { Component, OnInit, inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private translate: TranslateService = inject(TranslateService);

  ngOnInit(): void {
    this.setLanguage();
  }

  private setLanguage(): void {
    this.translate.setDefaultLang('en-GB');
    this.translate.use('sl');
  }
}
