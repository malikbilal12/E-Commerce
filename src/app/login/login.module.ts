import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [LoginComponent, ForgotComponent],
  imports: [ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
