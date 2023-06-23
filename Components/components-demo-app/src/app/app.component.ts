import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'title from AppComponent';

  users = [
    { name: 'Mitko', age: true },
    { name: 'Pesho', age: true },
    { name: 'Mariika', age: false },
    { name: 'Katya', age: true },
  ];

  outputChildHandler() {
    console.log('outputChildHandler');
  }
}
