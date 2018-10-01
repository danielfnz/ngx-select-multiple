import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSelectMultipleModule } from 'ngx-select-multiple';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSelectMultipleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
