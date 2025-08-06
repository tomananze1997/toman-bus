import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public scrollDown(): void {
    const scrollThreshold: number = window.innerHeight * 0.8;
    const targetScroll = Math.floor(scrollThreshold);

    if (window.scrollY < targetScroll) {
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  }
}
