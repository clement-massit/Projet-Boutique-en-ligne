import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoriePageRoutingModule } from './add-categorie-routing.module';
import { AddCategoriePage } from './add-categorie.page';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AddCategoriePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddCategoriePageRoutingModule
    
  ],
  declarations: [AddCategoriePage]
})
export class AddCategoriePageModule {}
