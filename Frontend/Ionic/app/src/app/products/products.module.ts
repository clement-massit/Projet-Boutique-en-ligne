import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductsPage } from './products.page';

import { ProductsPageRoutingModule } from './products-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
