import { Component, Input, OnInit } from '@angular/core';
import { ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T extends {[propname: string]: any}> implements OnInit {

  @Input() list: T[] = [];
  @Input() cols: ITableColumn[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
