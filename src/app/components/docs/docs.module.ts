import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NG_DOC_ROUTING, NgDocGeneratedModule} from '@ng-doc/generated';
import {DocsComponent} from './docs.component';
import {NgDocNavbarModule} from '@ng-doc/app/components/navbar';
import {NgDocRootModule} from '@ng-doc/app/components/root';
import {NgDocSidebarModule} from '@ng-doc/app/components/sidebar';
import {NgDocModule} from "@ng-doc/app";

@NgModule({
  imports: [
    CommonModule,
    NgDocNavbarModule,
    NgDocSidebarModule,
    NgDocModule.forRoot(),
    NgDocGeneratedModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        children: NG_DOC_ROUTING,
      },
    ]),
  ],
  declarations: [DocsComponent],
  exports: [RouterModule],
})
export class DocsModule {}
