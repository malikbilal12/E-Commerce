import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-comp-page',
  templateUrl: './home-comp-page.component.html',
  styleUrls: ['./home-comp-page.component.scss'],
})
export class HomeCompPageComponent implements OnInit {
  products: any[] = [
    {
      discount: '-20%',
      star: '10',
      product_name: 'Dorothy Perkins',
      catagory: 'Evening Dress',
      old_price: 15,
      new_price: 12,
      url: 'assets/sale/photo1.png'
    },
    {
      discount: '-25%',
      star: '10',
      product_name: 'Stilly',
      catagory: 'Sports Dress',
      old_price: 15,
      new_price: 12,
      url: 'assets/sale/photo2.png'
    }, {
      discount: '-15%',
      star: '10',
      product_name: 'Perkins',
      catagory: 'Morning Dress',
      old_price: 20,
      new_price: 18,
      url: 'assets/sale/photo3.png'
    }, {
      star: '10',
      product_name: 'Dorothy Perkins',
      catagory: 'Evening Dress',
      new_price: 12,
      url: 'assets/sale/photo1.png'
    },
    {
      discount: '-25%',
      star: '10',
      product_name: 'Stilly',
      catagory: 'Sports Dress',
      old_price: 15,
      new_price: 12,
      url: 'assets/sale/photo2.png'
    }, {
      discount: '-15%',
      star: '10',
      product_name: 'Perkins',
      catagory: 'Morning Dress',
      old_price: 20,
      new_price: 18,
      url: 'assets/sale/photo3.png'
    },

  ]
  new_products: any[] = [
    {
      star: '10',
      product_name: 'Dorothy Perkins',
      catagory: 'Evening Dress',
      url: 'assets/sale/p1.png'
    },
    {
      star: '10',
      product_name: 'Stilly',
      catagory: 'Sports Dress',
      url: 'assets/sale/p2.png'
    }, {
      star: '10',
      product_name: 'Perkins',
      catagory: 'Morning Dress',
      url: 'assets/sale/p1.png'
    },
    {
      star: '10',
      product_name: 'Dorothy Perkins',
      catagory: 'Evening Dress',
      url: 'assets/sale/p1.png'
    },
    {
      star: '10',
      product_name: 'Stilly',
      catagory: 'Sports Dress',
      url: 'assets/sale/p2.png'
    }, {
      star: '10',
      product_name: 'Perkins',
      catagory: 'Morning Dress',
      url: 'assets/sale/p1.png'
    },

  ]
  superSale: string = 'Super Summer Sale'
  constructor(private router: Router) { }

  ngOnInit() { }
  goToDetail() {
    this.router.navigate(['/home/detail'], { state: { product: this.products, heading: 'Fashin Sale' } });
  }
  goToNewDetail() {
    this.router.navigate(['/home/detail'], { state: { product: this.new_products, heading: 'New Products' } });
  }
  goToSaleDetail() {
    this.router.navigate(['/home/detail'], { state: { product: this.new_products, heading: this.superSale } });
  }

}
