import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.baseUrl + 'users.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

}
