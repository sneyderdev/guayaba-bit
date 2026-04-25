import { Component, computed, inject, input } from '@angular/core';

import { FavoritesStore } from '../../core/favorites-store';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
})
export class FavoriteButtonComponent {
  readonly serviceId = input.required<string>();

  private readonly favorites = inject(FavoritesStore);

  readonly isFavorite = computed(() =>
    this.favorites.ids().includes(this.serviceId()),
  );

  toggle(): void {
    this.favorites.toggle(this.serviceId());
  }
}
