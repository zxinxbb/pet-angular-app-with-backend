import { Routes } from '@angular/router';
import { HomeComponent } from './Home-component/Home-component.component';
import { PetDetailsComponent } from './Pet-details/Pet-details.component';
import { PetPostComponent } from './pet-post/pet-post.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'pet/:id',
    component: PetDetailsComponent,
    title: 'Pet Details',
  },
  { path: 'pet-post',
    component: PetPostComponent },
];
