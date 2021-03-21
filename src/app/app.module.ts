import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NextComponentComponent } from './next-component/next-component.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

@NgModule({
  declarations: [AppComponent, NextComponentComponent, SecondCompComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
