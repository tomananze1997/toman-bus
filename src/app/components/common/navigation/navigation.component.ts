import { Component, ElementRef, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription, filter } from 'rxjs';

import { environment } from '@environments';

import { LanguageService } from '@services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  public isMenuOpen: boolean = false;
  public isScrolled: boolean = false;
  public isHomeRoute: boolean = false;
  public showHamburger: boolean = true;
  public showCross: boolean = false;

  private ref: ElementRef = inject(ElementRef);
  private router: Router = inject(Router);
  private routeSub: Subscription | null = null;
  public languageService: LanguageService = inject(LanguageService);

  ngOnInit(): void {
    this.updateHomeRoute();
    this.routeSub = this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(() => this.updateHomeRoute());
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  public get vipSiteLangUrl(): string {
    const base: string = environment.REDIRECT_LINK.replace(/\/$/, '');
    return `${base}/${this.languageService.currentLang}`;
  }

  private updateHomeRoute(): void {
    const path: string = this.router.url.split('?')[0];
    const segments: string[] = path.split('/').filter(Boolean);
    const langs: string[] = ['en', 'sl', 'de'];
    this.isHomeRoute = segments.length === 1 && langs.includes(segments[0]);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    // Close the menu if click is outside the nav
    if (this.isMenuOpen && !this.ref.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();

    if (this.isMenuOpen) {
      this.showCross = false;
      setTimeout(() => {
        this.showHamburger = true;
      }, 200);
    } else {
      this.showHamburger = false;
      setTimeout(() => {
        this.showCross = true;
      }, 200);
    }

    this.isMenuOpen = !this.isMenuOpen;
  }
}
