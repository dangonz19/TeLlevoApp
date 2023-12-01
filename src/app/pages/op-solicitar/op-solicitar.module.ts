import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpSolicitarPageRoutingModule } from './op-solicitar-routing.module';

import { OpSolicitarPage } from './op-solicitar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpSolicitarPageRoutingModule
  ],
  declarations: [OpSolicitarPage]
})
export class OpSolicitarPageModule {}
