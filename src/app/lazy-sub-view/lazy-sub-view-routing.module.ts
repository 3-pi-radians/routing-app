import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazySubViewComponent } from './lazy-sub-view.component';

const routes: Routes = [{ path: '', component: LazySubViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazySubViewRoutingModule { }
