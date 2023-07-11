import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';

  // another way to get the form login without passing it as a parameter of the callback
  @ViewChild('loginForm') loginForm: NgForm | undefined;

  // will render only the static content
  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.loginForm) {
      this.loginForm.form.valueChanges.subscribe(console.log);
    }
  }

  // Will render the final content with the dynamic components
  // ngAfterViewInit(): void {
  // }

  submitHandler(): void {
    if (!this.loginForm) return;

    const form = this.loginForm;
    if (form.invalid) {
      return;
    }

    form.setValue({ email: '', password: '' });
    const value: { email: string; password: string } = form.value;
  }
}
