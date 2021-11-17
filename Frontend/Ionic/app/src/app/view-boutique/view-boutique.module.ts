import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewBoutiquePageRoutingModule } from './view-boutique-routing.module';
import { ViewBoutiquePage } from './view-boutique.page';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ViewBoutiquePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBoutiquePageRoutingModule
  ],
  declarations: [ViewBoutiquePage]
})
export class ViewBoutiquePageModule {}
