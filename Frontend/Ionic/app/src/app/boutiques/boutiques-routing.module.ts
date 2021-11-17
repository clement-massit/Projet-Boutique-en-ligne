import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoutiquesPage } from './boutiques.page';

const routes: Routes = [
  {
    path: '',
    component: BoutiquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoutiquesPageRoutingModule {}
