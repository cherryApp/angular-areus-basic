import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
  ) {
    if (localStorage.currentUser) {
      const user: User = JSON.parse(localStorage.currentUser);
      this.lastToken = user.accessToken || '';
      this.currentUserSubject$.next(user);
    }
  }

  login(loginData: User): Observable<User | null> {
    return this.http.post<{user: User, accessToken: string}>(this.loginUrl, loginData).pipe(
      map( response => {
        if (response.user && response.accessToken) {
          this.lastToken = response.accessToken;
          response.user.accessToken = response.accessToken;
          this.currentUserSubject$.next(response.user);
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          return response.user;
        }
        return null;
      })
    );
  }

  logout(): void {
    this.lastToken = '';
    this.currentUserSubject$.next(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/', 'login']);
  }
}
