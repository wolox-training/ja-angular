import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { UserCretionForm } from '../screens/sign-up/sign-up.component';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  readonly root_url = 'https://wbooks-api-stage.herokuapp.com/api/v1/users';

  constructor(private http: HttpClient, private Router: Router) {}

  createUser(user: UserCretionForm) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let response = this.http.post(this.root_url, user, {headers: headers})
      .subscribe(a => this.Router.navigate(['login']));
  }
}
