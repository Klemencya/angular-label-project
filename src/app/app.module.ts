import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LabelComponent} from "./components/label/label.component";
import {BlurModule} from "./directives/blur/blur.module";

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlurModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
