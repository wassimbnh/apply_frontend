import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideGridComponent } from './side-grid/side-grid.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SideGridComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    SideGridComponent
  ]
})
export class LayoutsModule { }
