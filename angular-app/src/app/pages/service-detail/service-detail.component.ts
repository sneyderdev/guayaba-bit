import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { ServicesStore } from '../../core/services-store';
import { FavoriteButtonComponent } from '../../shared/favorite-button/favorite-button.component';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink, FavoriteButtonComponent],
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent {
  private readonly servicesStore = inject(ServicesStore);
  private readonly route = inject(ActivatedRoute);

  private readonly id = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('id') ?? ''))
  );

  readonly service = computed(() =>
    this.servicesStore.findById(this.id() ?? '')
  );
}