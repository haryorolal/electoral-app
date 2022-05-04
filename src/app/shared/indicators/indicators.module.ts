import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from './spinner/spinner.module';
import { TabsModule } from './tabs/tabs.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpinnerModule,
    TabsModule
  ],
  exports: [
    SpinnerModule,
    TabsModule
  ]
})
export class IndicatorsModule { }
