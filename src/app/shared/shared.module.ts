import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { UiKitModule } from '../ui-kit/ui-kit.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UiKitModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
