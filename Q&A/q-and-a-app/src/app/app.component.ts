import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, setValue } from './store/action';
import { getCounter } from './store/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter$ = this.store.select(getCounter);

  constructor(private store: Store) {}

  incrementHandler() {
    this.store.dispatch(increment());
  }

  setValueHandler(value: number) {
    this.store.dispatch(setValue({ counter: value }));
  }
}
