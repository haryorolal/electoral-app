import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { StepperModule } from './components';
import { PersonalComponent } from './components/personal/personal.component';
import { Personal2Component } from './components/personal2/personal2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteModule, CheckboxModule, DateRangeModule, FormFieldModule, InputModule, RadiosModule, SelectModule} from 'src/app/shared/controls';
import { SpinnerModule} from 'src/app/shared/indicators';
import { UserPhotoModule } from 'src/app/shared/layouts';
import { FilesUploadModule } from 'src/app/shared/popups/files-upload/files-upload.module';
import { MapperService } from './services';
import { AdminComponent } from './components/personal2/roles/admin/admin.component';
import { SuperAdminComponent } from './components/personal2/roles/super-admin/super-admin.component';
import { VoterComponent } from './components/personal2/roles/voter/voter.component';


@NgModule({
  declarations: [
    FormComponent,
    PersonalComponent,
    Personal2Component,
    AdminComponent,
    SuperAdminComponent,
    VoterComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    SelectModule, 
    CheckboxModule,
    RadiosModule,
    DateRangeModule,
    AutocompleteModule,
    FilesUploadModule,
    UserPhotoModule,
    SpinnerModule,
    StepperModule,
    
  ],
  providers: [MapperService]
})
export class FormModule { }
