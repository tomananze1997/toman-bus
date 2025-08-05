import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroVideo', { static: false }) heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.heroVideo?.nativeElement;

    if (video) {
      video.muted = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('autoplay', '');
      video.setAttribute('loop', '');

      const tryPlay = () => {
        video.play().catch((err) => {
          console.warn('Autoplay prevented:', err);
        });
      };

      if (video.readyState >= 3) {
        tryPlay();
      } else {
        video.addEventListener('canplay', tryPlay, { once: true });
      }
    }
  }

  public scrollDown(): void {
    const scrollThreshold: number = window.innerHeight * 0.8;
    const targetScroll = Math.floor(scrollThreshold);

    if (window.scrollY < targetScroll) {
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  }
}
