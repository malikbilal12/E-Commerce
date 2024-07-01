import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [FilterComponent],
  imports: [

    FormsModule,
    IonicModule,
    CommonModule,
    // RouterModule.forChild([
    //   // {
    //   //   path: '',
    //   //   component: FilterComponent,
    //   // }
    // ]),
  ],
  exports: [FilterComponent]
})
export class SharedModule { }
