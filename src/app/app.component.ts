import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'my-app';
}
