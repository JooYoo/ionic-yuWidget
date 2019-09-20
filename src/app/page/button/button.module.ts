import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ButtonPage } from './button.page';
import { YuButtonModule } from 'src/app/widget/yu-button/yu-button.module';
import { HighlightModule } from 'ngx-highlightjs';

const routes: Routes = [
  {
    path: '',
    component: ButtonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    YuButtonModule,
    HighlightModule
  ],
  declarations: [ButtonPage]
})
export class ButtonPageModule {}
