import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  imports: [RouterLink],
  template: `
    <div class="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
      <h1 class="text-3xl md:text-4xl font-bold text-slate-900">{{ title() }}</h1>
      <p class="text-slate-600 leading-relaxed">
        Pendiente de migrar a Angular. La versión vanilla sigue disponible en
        <code class="px-1 py-0.5 rounded bg-slate-100 text-slate-700 text-sm">{{ vanillaPath() }}</code>.
      </p>
      <a
        routerLink="/"
        class="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600"
      >
        Volver al inicio
      </a>
    </div>
  `,
})
export class PlaceholderComponent {
  readonly title = input.required<string>();
  readonly vanillaPath = input.required<string>();
}
