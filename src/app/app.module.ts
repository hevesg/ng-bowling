import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BowlingModule} from "./bowling/bowling.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BowlingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
