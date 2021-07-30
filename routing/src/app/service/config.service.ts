import { Injectable } from '@angular/core';

export interface INavItem {
  text: string;
  url: string;
  icon?: string;
}

export interface ITableColumn {
  key: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  navItems: INavItem[] = [
    {url: '/', text: 'Home', icon: 'fa-home'},
    {url: '/users', text: 'Users', icon: 'fa-users'},
    {url: '/customers', text: 'Customers', icon: 'fa-user-o'},
    {url: '/about', text: 'About', icon: 'fa-book'},
  ];

  userTableColumns: ITableColumn[] = [
    {key: 'firstName', title: 'First Name'},
    {key: 'lastName', title: 'Last Name'},
    {key: 'email', title: 'Email'},
    {key: 'ip_address', title: 'IP.'},
  ];

  constructor() { }
}
