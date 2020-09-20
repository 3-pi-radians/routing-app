import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicRoutingComponent } from './basic-routing/basic-routing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NestedRoute1Component } from './nested-route1/nested-route1.component';
import { NestedChild1Component } from './nested-child1/nested-child1.component';
import { NestedChild2Component } from './nested-child2/nested-child2.component';
import { NestedRoute2Component } from './nested-route2/nested-route2.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BasicRoutingComponent,
    PageNotFoundComponent,
    NestedRoute1Component,
    NestedChild1Component,
    NestedChild2Component,
    NestedRoute2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
