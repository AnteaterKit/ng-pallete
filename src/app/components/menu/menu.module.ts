import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemDirective } from './menu-item.directive';
import { MenuDirective } from './menu.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuDirective, MenuItemDirective],
  exports: [MenuDirective, MenuItemDirective]
})
export class MenuModule { }
