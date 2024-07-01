import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.moudule';



@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: FavoritesComponent,
      }
    ]),
  ]
})
export class FavPageModule { }
