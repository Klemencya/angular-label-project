import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LabelComponent} from "./components/label/label.component";
import {BlurModule} from "./directives/blur/blur.module";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {TooltipModule} from "primeng/tooltip";
import {CarouselModule} from "primeng/carousel";
import {ImageModule} from "./components/image/image";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FullImageComponent} from "./components/fullImage/fullImage.component";
import {DialogService} from "primeng/dynamicdialog";

import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    FullImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlurModule,
    ProgressSpinnerModule,
    TooltipModule,
    CarouselModule,
    ImageModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'docs',
        loadChildren: () => import('./components/docs/docs.module').then((m: typeof import('./components/docs/docs.module')) => m.DocsModule),
      },
    ]),
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
