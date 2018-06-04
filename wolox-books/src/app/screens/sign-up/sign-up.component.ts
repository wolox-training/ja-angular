import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  rForm: FormGroup;

  constructor(private fb:FormBuilder, private userService: UserServiceService) { 

    this.rForm = fb.group({
      'firstName': [],
      'lastName': [],
      'email': [],
      'password': []
    })
  }

  ngOnInit() {
  }

  signUp() {
    let form = new UserCretionForm(this.rForm.controls.firstName.value, this.rForm.controls.lastName.value, this.rForm.controls.email.value, this.rForm.controls.password.value);
    this.userService.createUser(form);
  }

}

export class UserCretionForm {
  user: UserCreation;


  constructor(firstName, lastName, email, password) {
    this.user = new UserCreation(firstName, lastName, email, password);
  }
}

class UserCreation {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  locale: string;

  constructor(firstName, lastName, email, password) {
    this.first_name = firstName;
    this.last_name = lastName;
    this.email = email;
    this.password = password;
    this.password_confirmation = password;
    this.locale = "en";
  }
}
