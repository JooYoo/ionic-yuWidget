import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseTitleComponent } from './showcase-title.component';



@NgModule({
  declarations: [ShowcaseTitleComponent],
  imports: [
    CommonModule
  ],
  exports:[ShowcaseTitleComponent]
})
export class ShowcaseTitleModule { }
