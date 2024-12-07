import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: ` <h1>Welcome to {{ title() }}!</h1> `,
  styles: ``,
})
export class HeaderComponent {
  title = signal('Angular Ecommerce!');
}
