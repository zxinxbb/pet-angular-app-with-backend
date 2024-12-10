import { Routes } from '@angular/router';
import { HomeComponent } from './Home-component/Home-component.component';
import { PetDetailsComponent } from './Pet-details/Pet-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'pet/:petId',
    component: PetDetailsComponent,
    title: 'Pet Details',
  },
];
