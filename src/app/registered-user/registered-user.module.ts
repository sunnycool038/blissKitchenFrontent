import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { RegisteredUserComponent } from './registered-user.component';


@NgModule({
  declarations: [
    RegisteredUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RegisteredUserModule { }
