import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPage } from './cart.page';
import { Routes, RouterModule } from '@angular/router';
import { TopBarModule } from '../top-bar/top-bar.module';

const routes: Routes = [
  {
    path: '',
    component: CartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopBarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
