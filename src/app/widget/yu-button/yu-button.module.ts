import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YuButtonComponent } from './yu-button.component';



@NgModule({
  declarations: [YuButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[YuButtonComponent]
})
export class YuButtonModule { }
