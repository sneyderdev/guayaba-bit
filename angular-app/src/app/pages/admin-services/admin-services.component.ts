import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ServicesStore, makeNewServiceId } from '../../core/services-store';
import { Service } from '../../core/service.model';

interface ServiceFormModel {
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  priceLabel: string;
  image: string;
}

const emptyForm = (): ServiceFormModel => ({
  title: '',
  category: '',
  shortDescription: '',
  longDescription: '',
  priceLabel: '',
  image: '',
});

@Component({
  selector: 'app-admin-services',
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-services.component.html',
})
export class AdminServicesComponent {
  private readonly store = inject(ServicesStore);

  readonly services = this.store.services;
  readonly showSuccess = signal(false);

  form: ServiceFormModel = emptyForm();

  readonly countLabel = computed(() => {
    const n = this.services().length;
    return n === 1 ? '1 servicio' : `${n} servicios`;
  });

  onTitleChange(title: string): void {
    const seed = title.trim();
    this.form.image = seed
      ? `https://picsum.photos/seed/${encodeURIComponent(seed)}/800/500`
      : '';
  }

  onSubmit(formRef: NgForm): void {
    if (formRef.invalid) return;

    const newService: Service = {
      id: makeNewServiceId(),
      title: this.form.title.trim(),
      category: this.form.category.trim(),
      shortDescription: this.form.shortDescription.trim(),
      longDescription: this.form.longDescription.trim(),
      priceLabel: this.form.priceLabel.trim(),
      image: this.form.image.trim(),
    };
    this.store.addService(newService);
    formRef.resetForm(emptyForm());
    this.form = emptyForm();
    this.showSuccess.set(true);
  }

  onDelete(id: string): void {
    const ok = window.confirm(
      '¿Seguro que quieres eliminar este servicio? Esta acción no se puede deshacer.',
    );
    if (!ok) return;
    this.store.deleteServiceById(id);
  }
}
