import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDTO} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'your-api-url';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${this.apiUrl}/users`);
  }
}
