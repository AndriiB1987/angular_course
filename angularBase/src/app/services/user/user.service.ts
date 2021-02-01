import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "../../models/User";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) {

  }
  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
  }
  getUserById(id): Observable<User> {
    return this.httpClient.get<User>(this.url + '/' + id);
  }
}
