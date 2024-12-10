import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <main>

      <a [routerLink]="['/']">
        <header class="brand-name">
         <h1>PetoTrader</h1>
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pet-angular-app';
}
