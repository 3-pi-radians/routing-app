import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazySubView2Component } from './lazy-sub-view2.component';

const routes: Routes = [{ path: '', component: LazySubView2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazySubView2RoutingModule { }
