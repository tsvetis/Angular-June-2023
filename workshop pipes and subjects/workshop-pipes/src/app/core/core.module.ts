import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorComponent],
  imports: [CommonModule, RouterModule],
  // Note: tells which components to be exported from this module
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
