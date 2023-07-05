import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { LabelDemoComponent } from './demo/label-demo/label-demo.component';
import {AppModule} from "../../app.module";

@NgModule({
  imports: [CommonModule, AppModule],
	// Declare you demo components here
	declarations: [
    LabelDemoComponent
  ],
})
export class LabelPageModule {}
