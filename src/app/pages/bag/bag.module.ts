import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BagComponent } from './bag.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [BagComponent],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BagComponent,
      }
    ]),
  ]
})
export class BagPageModule { }
