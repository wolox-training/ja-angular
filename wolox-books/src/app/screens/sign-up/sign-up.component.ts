import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  rForm: FormGroup;

  constructor(private fb:FormBuilder) { 

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
    console.log({user:this.rForm.value, password_confirmation: this.rForm.value.password, locale: "en"});
  }
}
