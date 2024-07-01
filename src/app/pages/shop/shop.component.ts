import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  categories: any[] = [
    {
      name: 'New',
      url: 'assets/sale/image1.png'
    },
    {
      name: 'Clothes',
      url: 'assets/sale/image.png'
    },
    {
      name: 'Shoes',
      url: 'assets/sale/image2.png'
    },
    {
      name: 'Accesories',
      url: 'assets/sale/image3.png'
    },
    {
      name: 'Shirts',
      url: 'assets/sale/image.png'
    },



  ]
  constructor() { }

  ngOnInit() { }

}
