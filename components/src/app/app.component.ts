import { Component } from '@angular/core';
import { Hero } from './model/hero';
import { ConfigService, ITableColumn } from './service/config.service';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components';
  heroList: Hero[] = this.heroService.list;
  heroCols: ITableColumn[] = this.configService.heroColumns;

  constructor(
    private heroService: HeroService,
    private configService: ConfigService
  ) {}
}
