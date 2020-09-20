import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyView2Component } from './lazy-view2.component';

const routes: Routes = [
  {
    path: '',
    component: LazyView2Component,
    children: [
      {
        path: "comp1",
        loadChildren: () =>
          import("../lazy-sub-view/lazy-sub-view.module").then(
            (mod) => mod.LazySubViewModule
          )
      },
      {
        path: "comp2",
        loadChildren: () =>
          import("../lazy-sub-view2/lazy-sub-view2.module").then(
            (mod) => mod.LazySubView2Module
          )
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyView2RoutingModule { }
