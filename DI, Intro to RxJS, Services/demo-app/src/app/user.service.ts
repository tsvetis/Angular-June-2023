import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './types/JsonPlaceholderUser';

@Injectable()
export class UserService {
  users: User[] = [];

  constructor(private http: HttpClient) {
    // setInterval(() => {
    //   this.users.push({
    //     name: 'DemoName',
    //     age: 0,
    //   });
    //   // console.log('User has been added!');
    // }, 3000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // const user = {
    //   name: inputName.value,
    //   age: Number(inputAge.value),
    // };

    // this.users = [...this.users, user];

    inputName.value = '';
    inputAge.value = '';
  }

  getUsers() {
    // PROMISE
    // return fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    //   res.json()
    // );

    // OBSERVABLE
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
