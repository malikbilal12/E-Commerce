import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersComponent } from './orders/orders.component';
import { SettingComponent } from './setting/setting.component';



@NgModule({
  declarations: [ProfileComponent, OrdersComponent, SettingComponent],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'setting',
        component: SettingComponent,
      }
    ]),
  ]
})
export class ProfilePageModule { }
