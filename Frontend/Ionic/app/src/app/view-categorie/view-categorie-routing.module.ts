import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCategoriePage } from './view-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCategoriePageRoutingModule {}
