import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TopBarComponent } from './top-bar.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([])
  ],
  declarations: [
    TopBarComponent
  ],
  exports: [
    TopBarComponent
  ]
})
export class TopBarModule {}
