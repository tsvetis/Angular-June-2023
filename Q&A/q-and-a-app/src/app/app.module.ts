import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YourComponent } from './your/your.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
  declarations: [AppComponent, YourComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(reducers)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
