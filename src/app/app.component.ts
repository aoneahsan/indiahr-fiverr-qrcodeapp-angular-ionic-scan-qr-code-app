import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  openDeveloperWebsite() {
    window.open('http://aoneahsan.website', '_blank');
  }
}
