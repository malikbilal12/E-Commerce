import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  lower: number = 78;
  upper: number = 143;
  min: number = 0;
  max: number = 200;
  sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  category = ['All', 'women', 'Men', 'Boys', 'Girls']
  colors = ['#000', '#f9f9f9', '#B82222', '#BEA9A9', '#E2BB8D', '#151867'];
  selectColors: number[] = [1, 4];
  selectSizes: number[] = [2, 1]
  selectCategories: number[] = [0]

  selectCategory(index: number) {
    const selectedIndex = this.selectCategories.indexOf(index);
    if (selectedIndex > -1) {
      this.selectCategories.splice(selectedIndex, 1);
    } else {
      this.selectCategories.push(index);
    }
  }
  selectSize(index: number) {
    const selectedIndex = this.selectSizes.indexOf(index);
    if (selectedIndex > -1) {
      this.selectSizes.splice(selectedIndex, 1);
    } else {
      this.selectSizes.push(index);
    }
  }
  selectColor(index: number) {
    const selectedIndex = this.selectColors.indexOf(index);
    if (selectedIndex > -1) {
      this.selectColors.splice(selectedIndex, 1);
    } else {
      this.selectColors.push(index);
    }
  }


  constructor() { }

  onRangeChange(event: any) {
    this.lower = event.detail.value.lower;
    this.upper = event.detail.value.upper;
  }

  ngOnInit() { }

}
