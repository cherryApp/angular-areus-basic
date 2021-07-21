import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  heroColumns: ITableColumn[] = [
    {key: 'id', title: '#'},
    {key: 'active', title: 'Active'},
    {key: 'name', title: 'Name'},
    {key: 'superPower', title: 'Sp.'},
    {key: 'descriptin', title: 'Desc.'},
  ];

  constructor() { }
}
