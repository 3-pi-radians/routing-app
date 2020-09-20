import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyView1RoutingModule } from './lazy-view1-routing.module';
import { LazyView1Component } from './lazy-view1.component';
import { Comp1Module } from '../comp1/comp1.module';
import { Comp2Module } from '../comp2/comp2.module';


@NgModule({
  declarations: [LazyView1Component],
  imports: [
    CommonModule,
    LazyView1RoutingModule,
    Comp1Module,
    Comp2Module
  ]
})
export class LazyView1Module { }
