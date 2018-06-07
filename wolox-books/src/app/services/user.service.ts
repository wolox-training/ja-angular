import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../models/User.model';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly root_url = 'https://wbooks-api-stage.herokuapp.com/api/v1/users';

  constructor(private http: HttpClient, private router: Router, private localStorageService: LocalStorageService) {}

  createUser(user: User) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let response = this.http.post(this.root_url, {user: user }, {headers: headers})
      .subscribe(a => this.router.navigate(['login']));
  }

  logIn(login) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    const url = this.root_url + '/sessions';
    let service = this;

    let response = this.http.post(url, {session: login }, {headers: headers})
      .subscribe(function (token) {
        service.localStorageService.setValue('token', (<any>token).access_token);
        service.router.navigate(['auth']);
      });
  }

  
}
