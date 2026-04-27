import { Component, computed, inject, signal } from '@angular/core';

import { ServicesStore } from '../../core/services-store';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';

@Component({
  selector: 'app-services',
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  private readonly servicesStore = inject(ServicesStore);

  readonly selectedCategory = signal<string>('');

  readonly categories = computed(() => {
    const all = this.servicesStore.services();
    return [...new Set(all.map((s) => s.category).filter(Boolean))];
  });

  readonly filteredServices = computed(() => {
    const all = this.servicesStore.services();
    const cat = this.selectedCategory();
    return cat ? all.filter((s) => s.category === cat) : all;
  });

  setCategory(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedCategory.set(select.value);
  }
}