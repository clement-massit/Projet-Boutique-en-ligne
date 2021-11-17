import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBoutiquePage } from './add-boutique.page';

const routes: Routes = [
  {
    path: '',
    component: AddBoutiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBoutiquePageRoutingModule {}
