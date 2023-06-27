import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../app/types/JsonPlaceholderUser';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UserService],
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  appUsers: User[] = [];
  isLoading = true;

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }

  ngOnInit() {
    // this.userService.getUsers().then((users) => {
    //   this.appUsers = users;
    //   this.isLoading = false;
    // });

    this.userService.getUsers().subscribe((users) => {
      this.appUsers = users;

      this.isLoading = false;
    });
  }

  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement): void {
    // do something;
    this.userService.addUser(inputName, inputAge);
    this.appUsers = this.userService.users;
  }
}
