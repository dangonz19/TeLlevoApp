import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAutoPageRoutingModule } from './form-auto-routing.module';

import { FormAutoPage } from './form-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAutoPageRoutingModule
  ],
  declarations: [FormAutoPage]
})
export class FormAutoPageModule {}
