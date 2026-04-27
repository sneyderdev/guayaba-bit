import { Component } from '@angular/core';

import { LayoutComponent } from './shared/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  template: '<app-layout />',
  styles: [':host { display: contents }'],
})
export class App {}
