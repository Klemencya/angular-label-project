import { provideSearchEngine, NgDocDefaultSearchEngine, NgDocModule } from "@ng-doc/app";
import { NG_DOC_ROUTING, NgDocGeneratedModule } from "@ng-doc/generated";
import { RouterModule } from "@angular/router";
import { NgDocSidebarModule } from "@ng-doc/app/components/sidebar";
import { NgDocNavbarModule } from "@ng-doc/app/components/navbar";
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
      NgDocNavbarModule,
      NgDocSidebarModule,
      RouterModule.forRoot(NG_DOC_ROUTING, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', scrollOffset: [0, 70]}),
      NgDocModule.forRoot(),
      NgDocGeneratedModule.forRoot()
],
  providers: [DialogService, provideSearchEngine(NgDocDefaultSearchEngine)],
  bootstrap: [AppComponent]
})
export class AppModule { }
