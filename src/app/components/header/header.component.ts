import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: ` <div class="header">Welcome to {{ title() }}!</div> `,
  styles: `
  .header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
  }`,
})
export class HeaderComponent {
  title = signal('Angular Ecommerce!');
}
