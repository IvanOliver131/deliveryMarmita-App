import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartFinalPage } from './cart-final.page';

import { Routes, RouterModule } from '@angular/router';
import { TopBarModule } from '../top-bar/top-bar.module';

const routes: Routes = [
  {
    path: '',
    component: CartFinalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopBarModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CartFinalPage]
})
export class CartFinalPageModule {}
