import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebasMenuPage } from './pruebas-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PruebasMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebasMenuPageRoutingModule {}
