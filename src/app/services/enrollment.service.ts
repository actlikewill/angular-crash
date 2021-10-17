import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:5000/users'

  constructor(private _http: HttpClient) { }

  enroll(user: User): Observable<User> {
    return this._http.post<User>(this._url, user)
  }
}
