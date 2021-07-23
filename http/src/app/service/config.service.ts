import { Injectable } from '@angular/core';

export interface ITableColumn {
  key: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  userCols: ITableColumn[] = [
    {key: 'firstName', title: 'First Name'},
    {key: 'lastName', title: 'Last Name'},
    {key: 'email', title: 'Email'},
    {key: 'active', title: 'Active'},
    {key: 'ip_address', title: 'IP.'},
  ];

  constructor() { }
}
