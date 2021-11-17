import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCategoriePage } from './add-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: AddCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCategoriePageRoutingModule {}
