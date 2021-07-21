import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
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
      insert: 1626874615740,
    },
    {
      id: 2,
      name: 'Electro',
      descriptin: 'Can flashing and lightning',
      superPower: 'flash',
      active: true,
      insert: 1626874610450,
    },
    {
      id: 3,
      name: 'Songoku',
      descriptin: 'super fighter',
      superPower: 'fight',
      active: false,
      insert: 1626874625700,
    },
  ];

  constructor() {
    interval(3000).subscribe(
      () => this.list[0].insert = Math.round( Math.random() * 10**13 )
    )
  }
}
