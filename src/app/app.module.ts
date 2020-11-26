import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from './components/button/button.module';
import { InputModule } from './components/input/input.module';
import { SelectModule } from './components/select/select.module';
import { FormsModule } from '@angular/forms';
import { MyLayoutModule } from './components/layout/layout.module';
import { MenuModule } from './components/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ButtonModule,
    InputModule,
    SelectModule,
    MyLayoutModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
