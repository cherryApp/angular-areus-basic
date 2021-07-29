import { Injectable } from '@angular/core';

export interface INavItem {
  text: string;
  url: string;
  icon?: string;
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

  constructor() { }
}
