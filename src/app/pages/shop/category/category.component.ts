import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: any[] = [
    { n: 'Tops' }, { n: 'Shirts & Blouses' }, { n: 'Knitwear' }, { n: 'Blazers' }, { n: 'OuterWear' }, { n: 'Pants' }, { n: 'Jeans' }, { n: 'Shorts' }
  ]
  constructor() { }

  ngOnInit() { }

}
