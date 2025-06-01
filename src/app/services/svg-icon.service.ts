import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SvgIconService {
  private matIconRegistry: MatIconRegistry = inject(MatIconRegistry);
  private domSanitizer: DomSanitizer = inject(DomSanitizer);

  public registerIcons(): void {
    this.matIconRegistry.addSvgIcon('de', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/de.svg'));
    this.matIconRegistry.addSvgIcon('en', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/en.svg'));
    this.matIconRegistry.addSvgIcon('sl', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sl.svg'));
  }
}
