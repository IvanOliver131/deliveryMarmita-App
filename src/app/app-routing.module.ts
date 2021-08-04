import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'product/:product/:pid',
    loadChildren: () => import('./product/product.module').then(m => m.ProductPageModule)
  },
  {
    path: 'select-product/:product-sel/:sizeid',
    loadChildren: () => import('./select-product/select-product.module').then(m => m.SelectProductPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'cart-final',
    loadChildren: () => import('./cart-final/cart-final.module').then(m => m.CartFinalPageModule)
  },
  {
    path: 'cart-confirm',
    loadChildren: () => import('./cart-confirm/cart-confirm.module').then(m => m.CartConfirmPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
