import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBoutiquePage } from './view-boutique.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBoutiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBoutiquePageRoutingModule {}
