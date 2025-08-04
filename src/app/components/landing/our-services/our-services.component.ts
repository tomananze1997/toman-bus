import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { IServiceCards } from '@interfaces';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
  private router: Router = inject(Router);

  public cards: IServiceCards[] = [
    { title: 'MAIN.SERVICES.FIRST.TITLE', content: 'MAIN.SERVICES.FIRST.CONTENT', icon: 'airplane', link: '/airport-transports' },
    { title: 'MAIN.SERVICES.SECOND.TITLE', content: 'MAIN.SERVICES.SECOND.CONTENT', icon: 'ship', link: '/seaport-transports' },
    { title: 'MAIN.SERVICES.THIRD.TITLE', content: 'MAIN.SERVICES.THIRD.CONTENT', icon: 'suitcase', link: '/travel-trips' },
    { title: 'MAIN.SERVICES.FOURTH.TITLE', content: 'MAIN.SERVICES.FOURTH.CONTENT', icon: 'school', link: '/school-transfers' },
    { title: 'MAIN.SERVICES.FIFTH.TITLE', content: 'MAIN.SERVICES.FIFTH.CONTENT', icon: 'corporate', link: '/corporate-transfers' },
    { title: 'MAIN.SERVICES.SIXTH.TITLE', content: 'MAIN.SERVICES.SIXTH.CONTENT', icon: 'coach', link: '/on-request' }
  ];
  public nextSlide(): void {}

  public prevSlide(): void {}

  public async navigateTo(route: string): Promise<void> {
    await this.router.navigate([route]);
  }
}
