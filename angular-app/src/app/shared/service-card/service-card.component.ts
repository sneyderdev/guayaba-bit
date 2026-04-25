import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Service } from '../../core/service.model';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink, FavoriteButtonComponent],
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent {
  readonly service = input.required<Service>();
}
