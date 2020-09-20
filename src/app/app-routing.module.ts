import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import  { DashboardComponent } from "./dashboard/dashboard.component";
import { BasicRoutingComponent } from "./basic-routing/basic-routing.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NestedRoute1Component } from "./nested-route1/nested-route1.component";
import { NestedChild1Component } from "./nested-child1/nested-child1.component";
import { NestedChild2Component } from './nested-child2/nested-child2.component';
import { NestedRoute2Component } from './nested-route2/nested-route2.component';

const routes: Routes = [
  {
    path: "basic-routing",
    component: BasicRoutingComponent
  },
  {
    path: "redirect",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "nested-1",
    component: NestedRoute1Component,
    children: [
      {
        path: "child1",
        component: NestedChild1Component
      },
      {
        path: "child2",
        component: NestedChild2Component
      }
    ]
  },
  {
    path: "nested-2",
    component: NestedRoute2Component,
    children: [
      {
        path: "child1",
        component: NestedChild1Component
      },
      {
        path: "child2",
        component: NestedChild2Component
      },
      {
        path: "",
        redirectTo: "child1",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "basic-routing/:userId",
    component: BasicRoutingComponent
  },
  {
    path: "lazy-load",
    loadChildren: () => {
      return import("./lazy-dash-board/lazy-dash-board.module").then(
        (mod) => mod.LazyDashBoardModule
      )
    }
  },
  {
    path: "lazy-view1",
    loadChildren: () => {
      return import("./lazy-view1/lazy-view1.module").then(
        (mod) => mod.LazyView1Module
      )
    }
  },
  {
    path: "lazy-view2",
    loadChildren: () => {
      return import("./lazy-view2/lazy-view2.module").then(
        (mod) => mod.LazyView2Module
      )
    }
  },
  {
    path: "",
    component: DashboardComponent
  },
  { path: 'lazySubView', loadChildren: () => import('./lazy-sub-view/lazy-sub-view.module').then(m => m.LazySubViewModule) },
  { path: 'lazySubView2', loadChildren: () => import('./lazy-sub-view2/lazy-sub-view2.module').then(m => m.LazySubView2Module) },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
