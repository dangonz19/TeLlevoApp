import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebasMenuPageRoutingModule } from './pruebas-menu-routing.module';

import { PruebasMenuPage } from './pruebas-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebasMenuPageRoutingModule
  ],
  declarations: [PruebasMenuPage]
})
export class PruebasMenuPageModule {}
