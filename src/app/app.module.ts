import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OneComponent } from './one.component/one.component';
import { TwoComponent } from './two.component/two.component';
import { ThreeComponent } from './three.component/three.component';
import { AppRoutingModule } from './app.routing.module';
import { Error_Component } from './404.component/404.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    Error_Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
