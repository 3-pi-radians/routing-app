import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyDashBoardRoutingModule } from './lazy-dash-board-routing.module';
import { LazyDashBoardComponent } from './lazy-dash-board.component';


@NgModule({
  declarations: [LazyDashBoardComponent],
  imports: [
    CommonModule,
    LazyDashBoardRoutingModule
  ]
})
export class LazyDashBoardModule { }
