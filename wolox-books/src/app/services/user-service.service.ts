import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserCretionForm } from '../screens/sign-up/sign-up.component';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  readonly root_url = 'http://private-anon-80b0b54ecb-wbooksapi.apiary-mock.com/api/v1/users';

  constructor(private htpp: HttpClient) {}

  createUser(user: UserCretionForm) {
    let json = JSON.stringify(user);
    console.log(json);

    let response = this.htpp.post(this.root_url, json)
    .subscribe(user => console.log("success"));
  }
}
