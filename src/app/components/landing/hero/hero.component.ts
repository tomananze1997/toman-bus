import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public scrollDown(): void {
    const scrollThreshold: number = window.innerHeight * 0.4;

    if (window.scrollY < scrollThreshold) {
      window.scrollBy({ top: scrollThreshold, behavior: 'smooth' });
    }
  }
}
