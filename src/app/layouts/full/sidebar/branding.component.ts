import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/logos/dark-logo.svg"
          class="align-middle m-2"
          alt="logo"
        />
      </a>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class BrandingComponent {
  constructor() {}
}
