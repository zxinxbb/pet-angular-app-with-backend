import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
   <main>
  <header class="brand-name">
    <a [routerLink]="['/']">
      <img class="logo" src="assets/image_files/imagelogo.jpeg" alt="Logo" />
    </a>
    <!-- Right aligned PET link -->
    <a [routerLink]="['/pet-post']" class="pet-post-link">
      + PET
    </a>
  </header>

  <section class="content">
    <router-outlet></router-outlet>
  </section>
</main>`,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
[x: string]: any;
  title = 'pet-angular-app';
imagelogo: any;
}



