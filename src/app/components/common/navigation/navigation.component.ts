import { Component, ElementRef, HostListener, inject } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public isMenuOpen: boolean = false;
  public isScrolled: boolean = false;
  public showHamburger = true;
  public showCross = false;

  private ref: ElementRef = inject(ElementRef);

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
