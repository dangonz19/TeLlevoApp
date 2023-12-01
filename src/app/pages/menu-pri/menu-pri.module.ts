import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPriPageRoutingModule } from './menu-pri-routing.module';

import { MenuPriPage } from './menu-pri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPriPageRoutingModule
  ],
  declarations: [MenuPriPage]
})
export class MenuPriPageModule {}
