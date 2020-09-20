import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazySubView2RoutingModule } from './lazy-sub-view2-routing.module';
import { LazySubView2Component } from './lazy-sub-view2.component';
import { Comp2Module } from '../comp2/comp2.module';


@NgModule({
  declarations: [LazySubView2Component],
  imports: [
    CommonModule,
    LazySubView2RoutingModule,
    Comp2Module
  ]
})
export class LazySubView2Module { }
