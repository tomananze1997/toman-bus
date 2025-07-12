import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroVideo', { static: false }) heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video: HTMLVideoElement = this.heroVideo?.nativeElement;
    if (video) {
      video.muted = true;
      const playPromise: Promise<void> = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Autoplay prevented:', error);
        });
      }
    }
  }
  public scrollDown(): void {
    const scrollThreshold: number = window.innerHeight * 0.4;

    if (window.scrollY < scrollThreshold) {
      window.scrollBy({ top: scrollThreshold, behavior: 'smooth' });
    }
  }
}
