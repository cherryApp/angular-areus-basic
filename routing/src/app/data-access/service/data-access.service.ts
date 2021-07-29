import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataAccessModule } from '../data-access.module';

@Injectable({
  providedIn: DataAccessModule
})
export class DataAccessService<T extends {id: number}> {

  constructor(
    public http: HttpClient,
    @Inject(String) public apiUrl: string,
    @Inject(String) public entityName: string,
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entityName}`);
  }
}
