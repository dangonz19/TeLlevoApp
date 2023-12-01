import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpDisponiblePage } from './op-disponible.page';

const routes: Routes = [
  {
    path: '',
    component: OpDisponiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpDisponiblePageRoutingModule {}
