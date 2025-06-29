import { Component, Input } from '@angular/core';

import { IServiceCards } from '@interfaces';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  @Input() card: IServiceCards | null = null;
}
