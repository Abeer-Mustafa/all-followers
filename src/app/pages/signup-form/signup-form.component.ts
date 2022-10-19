import { CustomeValidation } from './custome.validation';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      CustomeValidation.cannotContainSpace,
    ],
    CustomeValidation.shouldbBeUnique
    ),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  login(){
    this.form.setErrors({
      loginFaild: false
    })
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }
}
