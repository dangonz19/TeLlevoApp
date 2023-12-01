import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpDisponiblePageRoutingModule } from './op-disponible-routing.module';

import { OpDisponiblePage } from './op-disponible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpDisponiblePageRoutingModule
  ],
  declarations: [OpDisponiblePage]
})
export class OpDisponiblePageModule {}
