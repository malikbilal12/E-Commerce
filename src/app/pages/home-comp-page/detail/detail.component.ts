import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  product!: any[]
  heading: string = '';
  search: boolean = false
  constructor() { }

  ngOnInit() {
    this.product = history.state.product;
    this.heading = history.state.heading;
    // console.log(history.state);

  }
}
