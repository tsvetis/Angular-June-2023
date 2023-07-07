import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  declarations: [NewThemeComponent, CurrentThemeComponent],
  imports: [CommonModule, ThemeRoutingModule],
})
export class ThemeModule {}
