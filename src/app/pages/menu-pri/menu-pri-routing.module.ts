import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPriPage } from './menu-pri.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPriPageRoutingModule {}
