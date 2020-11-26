import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutComponent } from './layout.component';
import { SiderComponent } from './sider.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [LayoutComponent, SiderComponent, HeaderComponent, FooterComponent],
  declarations: [LayoutComponent, SiderComponent, HeaderComponent, FooterComponent]
})
export class MyLayoutModule {

}
