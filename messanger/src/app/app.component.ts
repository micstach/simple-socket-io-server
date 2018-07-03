import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Messanger';
}

// Add global to window, assigning the value of window itself.
(window as any).global = window;
