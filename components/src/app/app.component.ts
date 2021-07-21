import { Component } from '@angular/core';
import { Hero } from './model/hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components';
  heroList: Hero[] = this.heroService.list;

  constructor(
    private heroService: HeroService,
  ) {}
}
