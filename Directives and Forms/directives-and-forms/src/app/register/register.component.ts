import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.maxLength(4)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm.get('email')?.valueChanges.subscribe(console.log);
  }

  handleSubmit(): void {
    // console.log(this.registerForm.get('password')?.errors?.['maxlength']);
  }
}
