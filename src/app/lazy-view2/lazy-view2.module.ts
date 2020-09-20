import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyView2RoutingModule } from './lazy-view2-routing.module';
import { LazyView2Component } from './lazy-view2.component';

@NgModule({
  declarations: [LazyView2Component],
  imports: [
    CommonModule,
    LazyView2RoutingModule
  ]
})
export class LazyView2Module { }
