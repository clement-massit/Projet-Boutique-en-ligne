import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoutiquesPageRoutingModule } from './boutiques-routing.module';

import { BoutiquesPage } from './boutiques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoutiquesPageRoutingModule
  ],
  declarations: [BoutiquesPage]
})
export class BoutiquesPageModule {}
