import { Injectable, signal } from '@angular/core';

import { Service } from './service.model';
import { INITIAL_SERVICES } from './initial-services';
import { readStoredJson, writeStoredJson } from './storage';

const SERVICES_STORAGE_KEY = 'services';

const loadInitial = (): Service[] => {
  const stored = readStoredJson<Service[]>(SERVICES_STORAGE_KEY, []);
  if (!Array.isArray(stored) || stored.length === 0) {
    writeStoredJson(SERVICES_STORAGE_KEY, INITIAL_SERVICES);
    return [...INITIAL_SERVICES];
  }
  return stored;
};

@Injectable({ providedIn: 'root' })
export class ServicesStore {
  private readonly _services = signal<Service[]>(loadInitial());

  readonly services = this._services.asReadonly();

  findById(id: string): Service | undefined {
    return this._services().find((s) => s.id === id);
  }

  addService(service: Service): void {
    const next = [...this._services(), service];
    writeStoredJson(SERVICES_STORAGE_KEY, next);
    this._services.set(next);
  }

  deleteServiceById(id: string): void {
    const next = this._services().filter((s) => s.id !== id);
    writeStoredJson(SERVICES_STORAGE_KEY, next);
    this._services.set(next);
  }
}

export const makeNewServiceId = (): string =>
  `svc_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
