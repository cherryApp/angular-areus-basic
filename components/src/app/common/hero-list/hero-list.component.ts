import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  @Input() list: Hero[] = [];
  @Input() cols: ITableColumn[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
