import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LazyDashBoardComponent } from "./lazy-dash-board.component";

const routes: Routes = [
  {
    path: "",
    component: LazyDashBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyDashBoardRoutingModule { }
