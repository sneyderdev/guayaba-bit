import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AdminServicesComponent } from './pages/admin-services/admin-services.component';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'Guayaba Bit — Inicio',
  },
  {
    path: 'admin/services',
    component: AdminServicesComponent,
    title: 'Guayaba Bit — Administrar servicios',
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Guayaba Bit — Servicios',
    data: { title: 'Servicios', vanillaPath: 'src/pages/services/index.html' },
  },
  {
    path: 'services/:id',
    component: ServiceDetailComponent,
    title: 'Guayaba Bit — Detalle del servicio',
    data: { title: 'Detalle del servicio', vanillaPath: 'src/pages/services/detail.html' },
  },
  {
  path: 'favorites',
  component: FavoritesComponent,
  title: 'Guayaba Bit — Favoritos',
  data: { title: 'Favoritos', vanillaPath: 'src/pages/favorites.html' },
},
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Guayaba Bit — Contacto',
    data: { title: 'Contacto', vanillaPath: 'src/pages/contact.html' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
