import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {Feature1Module} from './feature1/feature1.module';
import {AppRoutingModule} from './app-routing.module';
import { Feature2Component } from './feature2/feature2.component';

@NgModule({
  declarations: [
    AppComponent,
    Feature2Component,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    Feature1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
