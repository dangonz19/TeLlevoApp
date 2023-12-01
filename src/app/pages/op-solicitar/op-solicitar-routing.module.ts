import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpSolicitarPage } from './op-solicitar.page';

const routes: Routes = [
  {
    path: '',
    component: OpSolicitarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpSolicitarPageRoutingModule {}
