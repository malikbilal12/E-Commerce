import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  order: any[] = [
    {
      no: 'Order №1947034',
      date: '05-12-2024',
      tno: 'IW3475453455',
      q: 3,
      total: 112
    }, {
      no: 'Order №1947034',
      date: '05-12-2024',
      tno: 'IW3475453455',
      q: 3,
      total: 112
    }, {
      no: 'Order №1947034',
      date: '05-12-2024',
      tno: 'IW3475453455',
      q: 3,
      total: 112
    }, {
      no: 'Order №1947034',
      date: '05-12-2024',
      tno: 'IW3475453455',
      q: 3,
      total: 112
    }
  ]
  constructor() { }

  ngOnInit() { }

}
