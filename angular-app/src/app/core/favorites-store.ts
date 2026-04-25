import { Injectable, computed, signal } from '@angular/core';

import { readStoredJson, writeStoredJson } from './storage';

const FAVORITES_STORAGE_KEY = 'favorites';

@Injectable({ providedIn: 'root' })
export class FavoritesStore {
  private readonly _ids = signal<string[]>(
    readStoredJson<string[]>(FAVORITES_STORAGE_KEY, []),
  );

  readonly ids = this._ids.asReadonly();

  isFavorite(id: string): boolean {
    return this._ids().includes(id);
  }

  isFavoriteSignal(id: string) {
    return computed(() => this._ids().includes(id));
  }

  add(id: string): void {
    if (this.isFavorite(id)) return;
    this.persist([...this._ids(), id]);
  }

  remove(id: string): void {
    this.persist(this._ids().filter((fid) => fid !== id));
  }

  toggle(id: string): boolean {
    if (this.isFavorite(id)) {
      this.remove(id);
      return false;
    }
    this.add(id);
    return true;
  }

  private persist(ids: string[]): void {
    writeStoredJson(FAVORITES_STORAGE_KEY, ids);
    this._ids.set(ids);
  }
}
