import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { User } from '../types/JsonPlaceholderUser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  @Input() users: User[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges() {
    // console.log('invoked from ngOnChanges!');
  }

  refresh() {
    this.cd.detectChanges();
  }
}

// CoffeMachineBase
// CoffeMachineDelongi extend CoffeMachineBase
// CoffeMachineLavazza extend CoffeMachineBase

// CoffeMachineBase.makeCoffee();
// CoffeMachineDelongi.makeCoffee();
// CoffeMachineLavazza.makeCoffee();
