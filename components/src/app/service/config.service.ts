import { DatePipe, SlicePipe } from '@angular/common';
import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
  pipes?: any[];
  pipeArgs?: any[][];
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
    {key: 'descriptin', title: 'Desc.',
      pipes: [
        new SlicePipe()
      ],
      pipeArgs: [
        [0, 15]
      ]
    },
    {key: 'insert', title: 'InsDate', pipes: [
      new DatePipe('hu')
    ],
    pipeArgs: [
      ['yyyy-mm-dd hh:mm']
    ]},
  ];

  constructor() { }

  static displayDateTime(time: number): string {
    console.log('displayDateTime is invoked: ', time);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    return Intl.DateTimeFormat('hu', options).format(time);
  }
}
