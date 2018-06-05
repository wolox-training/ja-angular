import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../models/User.model';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly root_url = 'https://wbooks-api-stage.herokuapp.com/api/v1/users';

  constructor(private http: HttpClient) {}

  createUser(user: User) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let response = this.http.post(this.root_url, {user: user }, {headers: headers})
    .subscribe(user => console.log("success"));
  }
}
