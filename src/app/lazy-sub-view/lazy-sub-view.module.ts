import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazySubViewRoutingModule } from './lazy-sub-view-routing.module';
import { LazySubViewComponent } from './lazy-sub-view.component';
import { Comp1Module } from '../comp1/comp1.module';


@NgModule({
  declarations: [LazySubViewComponent],
  imports: [
    CommonModule,
    LazySubViewRoutingModule,
    Comp1Module
  ]
})
export class LazySubViewModule { }
