import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule
  ],
  exports: [TabsComponent]
})
export class TabsModule { }
