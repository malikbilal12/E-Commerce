import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  items: any[] = [
    {
      outStack: false,
      cat: 'LIME',
      name: 'Shirt',
      color: 'Black',
      size: 'L',
      price: 51,
      url: 'assets/sale/f1.png'
    },
    {
      outStack: false,
      dis: 0,
      cat: 'Mango',
      name: 'Longdleeve',
      color: 'Gray',
      size: 'L',
      price: 30,
      url: 'assets/sale/f2.png'
    },
    {
      outStack: true,
      cat: 'Berries',
      name: 'T-Shirt',
      color: 'Black',
      size: 'M',
      price: 43,
      url: 'assets/sale/f3.png'
    },
    {
      dis: 30,
      outStack: false,
      cat: 'LIME',
      name: 'Shirt',
      color: 'Black',
      size: 'L',
      price: 51,
      url: 'assets/sale/b1.png'
    },
    {
      outStack: false,
      cat: 'Mango',
      name: 'Longdleeve',
      color: 'Gray',
      size: 'L',
      price: 30,
      url: 'assets/sale/b2.png'
    },
    {
      outStack: false,
      cat: 'Berries',
      name: 'T-Shirt',
      color: 'Black',
      size: 'M',
      price: 43,
      url: 'assets/sale/b3.png'
    }
  ]
  categories: any[] = [
    { name: 'Summer' }, { name: 'Winter' }, { name: 'Shirts' }, { name: 'Pents' }, { name: 'Summer' }
  ]
  constructor() { }

  ngOnInit() { }
  @ViewChild(IonModal) modal!: IonModal;



  cancel() {
    this.modal.dismiss(null, 'cancel');
  }





}
