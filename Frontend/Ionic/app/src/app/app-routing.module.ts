import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'addProduct',
    loadChildren: () => import('./addProduct/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'viewProduct/:id',
    loadChildren: () => import('./viewProduct/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'add-categorie',
    loadChildren: () => import('./add-categorie/add-categorie.module').then( m => m.AddCategoriePageModule)
  },
  {
    path: 'categories/:id',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'view-categorie/:id',
    loadChildren: () => import('./view-categorie/view-categorie.module').then( m => m.ViewCategoriePageModule)
  },
  {
    path: 'boutiques',
    loadChildren: () => import('./boutiques/boutiques.module').then( m => m.BoutiquesPageModule)
  },
  {
    path: 'add-boutique',
    loadChildren: () => import('./add-boutique/add-boutique.module').then( m => m.AddBoutiquePageModule)
  },
  {
    path: 'view-boutique/:id',
    loadChildren: () => import('./view-boutique/view-boutique.module').then( m => m.ViewBoutiquePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
