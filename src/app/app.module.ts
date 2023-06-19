import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LabelComponent} from "./components/label/label.component";
import {BlurModule} from "./directives/blur/blur.module";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {TooltipModule} from "primeng/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlurModule,
    ProgressSpinnerModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
