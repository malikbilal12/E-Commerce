import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCompPageComponent } from './home-comp-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductComponent } from './product/product.component';
import { RatingComponent } from './rating/rating.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    HomeCompPageComponent,
    ProductComponent,
    RatingComponent,
    DetailComponent
  ],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeCompPageComponent,
      },
      {
        path: 'rating',
        component: RatingComponent,
      },
      {
        path: 'detail',
        component: DetailComponent,
      }
    ]),
  ]
})
export class HomePageModule { }
