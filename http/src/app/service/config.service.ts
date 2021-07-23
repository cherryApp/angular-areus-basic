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
    {key: 'id', title: '#'},
    {key: 'firstName', title: 'First Name'},
    {key: 'lastName', title: 'Last Name'},
    {key: 'email', title: 'Email'},
  ];

  constructor() { }
}
