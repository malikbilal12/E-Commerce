import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [ShopComponent, CategoryComponent],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShopComponent,
      },
      {
        path: 'categories',
        component: CategoryComponent,
      }
    ]),
  ]
})
export class ShopPageModule { }
