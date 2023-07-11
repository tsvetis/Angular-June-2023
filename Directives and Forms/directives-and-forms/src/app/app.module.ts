import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightOnMoveDirective } from './highlight-on-move.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyStructuralDirective } from './my-structural.directive';
import { PlaygroundComponent } from './playground/playground.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxCountDirective } from './max-count.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MyRouterLinkDirective,
    HighlightOnMoveDirective,
    MyStructuralDirective,
    PlaygroundComponent,
    MaxCountDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Template Driven Form
    ReactiveFormsModule, // Reactive Forms approach
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
