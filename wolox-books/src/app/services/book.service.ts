import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly root_url = 'https://wbooks-api-stage.herokuapp.com/api/v1/books';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.root_url);
  }
}
