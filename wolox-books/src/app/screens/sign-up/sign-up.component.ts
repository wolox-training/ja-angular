import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../models/User.model';

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
    let user = new User(this.rForm.controls.firstName.value, this.rForm.controls.lastName.value, this.rForm.controls.email.value, this.rForm.controls.password.value);
    this.userService.createUser(user);
  }

}
