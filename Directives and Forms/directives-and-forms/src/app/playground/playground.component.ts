import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent {
  isShown: boolean = true;

  toggle(): void {
    this.isShown = !this.isShown;
  }
}
