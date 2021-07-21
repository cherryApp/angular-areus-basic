import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public list: Hero[] = [
    {
      id: 1,
      name: 'Bombasto',
      descriptin: 'Can explode',
      superPower: 'explode',
      active: true,
    },
    {
      id: 2,
      name: 'Electro',
      descriptin: 'Can flashing',
      superPower: 'flash',
      active: true,
    },
    {
      id: 3,
      name: 'Songoku',
      descriptin: 'super fighter',
      superPower: 'fight',
      active: false,
    },
  ];

  constructor() { }
}
