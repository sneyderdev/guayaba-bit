import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FavoritesStore } from '../../core/favorites-store';
import { ServicesStore } from '../../core/services-store';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink, ServiceCardComponent],
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent {
  private readonly favoritesStore = inject(FavoritesStore);
  private readonly servicesStore = inject(ServicesStore);

  readonly favoriteServices = computed(() => {
    const ids = this.favoritesStore.ids();
    return this.servicesStore.services().filter((s) => ids.includes(s.id));
  });
}