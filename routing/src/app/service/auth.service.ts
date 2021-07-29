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
  ) {
    if (localStorage.currentUser) {
      const user: User = JSON.parse(localStorage.currentUser);
      this.lastToken = user.accessToken || '';
      this.currentUserSubject$.next(user);
    }
  }

  login(loginData: User): Observable<User | null> {
    return this.http.post<User | null>(this.loginUrl, loginData).pipe(
      map( user => {
        if (user && user.accessToken) {
          this.lastToken = user.accessToken;
          this.currentUserSubject$.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }
        return null;
      })
    );
  }

  logout(): void {
    this.lastToken = '';
    this.currentUserSubject$.next(null);
    localStorage.removeItem('currentUser');
  }
}