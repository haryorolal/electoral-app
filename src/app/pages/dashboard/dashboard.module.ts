import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileModule } from '../profile/profile.module';
import { SettingsModule } from '../settings/settings.module';
import { UserPhotoModule } from 'src/app/shared';
import { SideNavComponent } from 'src/app/components/sidenav/sidenav.component';
import { DemographyModule } from '../demography/demography.module';
import { ReportsModule } from '../reports/reports.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DemographyModule,
    //ReportsModule,
    SettingsModule,
    ProfileModule,
    UserPhotoModule
  ]
})
export class DashboardModule { }
