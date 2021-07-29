import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataAccessService } from '../data-access/service/data-access.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataAccessService<User> {

  constructor(
    public http: HttpClient,
  ) {
    super(http, 'http://localhost:3000/', 'users');
  }
}
