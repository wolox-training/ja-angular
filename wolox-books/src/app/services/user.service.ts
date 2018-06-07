import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../models/User.model';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly root_url = 'https://wbooks-api-stage.herokuapp.com/api/v1/users';

  constructor(private http: HttpClient, private Router: Router) {}

  createUser(user: User) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let response = this.http.post(this.root_url, {user: user }, {headers: headers})
      .subscribe(a => this.Router.navigate(['login']));
  }

  logIn(login) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    const url = this.root_url + '/sessions';

    let response = this.http.post(url, {session: login }, {headers: headers})
      .subscribe(token => console.log(token));
  }
}
