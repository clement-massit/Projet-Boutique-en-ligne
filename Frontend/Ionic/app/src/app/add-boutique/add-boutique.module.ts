import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddBoutiquePageRoutingModule } from './add-boutique-routing.module';
import { AddBoutiquePage } from './add-boutique.page';
import { Routes, RouterModule } from '@angular/router';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AddBoutiquePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddBoutiquePageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddBoutiquePage]
})
export class AddBoutiquePageModule {}
