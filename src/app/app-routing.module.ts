import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'docs',
  loadChildren: () => import('./components/docs/docs.module').then((m: typeof import('./components/docs/docs.module')) => m.DocsModule),
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
