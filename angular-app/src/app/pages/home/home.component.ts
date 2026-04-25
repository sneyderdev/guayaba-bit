import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ServicesStore } from '../../core/services-store';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ServiceCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private readonly store = inject(ServicesStore);

  readonly featured = computed(() => this.store.services().slice(0, 3));
}
