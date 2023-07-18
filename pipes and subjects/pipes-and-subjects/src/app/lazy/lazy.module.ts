import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { LazyRoutingModule } from './lazy.router';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, LazyRoutingModule],
})
export class LazyModule {}
