import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
})
export class BagComponent implements OnInit {
  items: any[] = [
    {
      name: 'Pullover',
      color: 'Black',
      size: 'L',
      price: 51,
      q: 1,
      url: 'assets/sale/b1.png'
    },
    {
      name: 'T-Shirt',
      color: 'Gray',
      size: 'L',
      q: 1,
      price: 30,
      url: 'assets/sale/b2.png'
    },
    {
      name: 'Sport Dress',
      color: 'Black',
      size: 'M',
      q: 1,
      price: 43,
      url: 'assets/sale/b3.png'
    }
  ]
  constructor() { }

  ngOnInit() { }

  add(index: number) {
    this.items[index].q++;
  }

  sub(index: number) {
    if (this.items[index].q > 0) {
      this.items[index].q--;
    }
  }
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price * item.q), 0);
  }
}
