import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewCategoriePageRoutingModule } from './view-categorie-routing.module';
import { ViewCategoriePage } from './view-categorie.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewCategoriePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCategoriePageRoutingModule
    
  ],
  declarations: [ViewCategoriePage]
})
export class ViewCategoriePageModule {}
