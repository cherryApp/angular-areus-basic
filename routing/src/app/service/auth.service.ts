import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserSubject$: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  lastToken: string = '';
  loginUrl: string = `http://localhost:3000/login`;

  constructor(
    private http: HttpClient,
  ) { }

  login(loginData: User): Observable<User | null> {
    return this.http.post<User | null>(this.loginUrl, loginData).pipe(
      map( user => {
        if (user && user.accessToken) {
          this.lastToken = user.accessToken;
          return user;
        }
        return null;
      })
    );
  }
}
