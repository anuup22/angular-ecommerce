import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <app-header />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecommerce';
}
