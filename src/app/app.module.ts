import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { HeaderComponent } from './components/header/header.component';

//Date
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: {day: 'numeric', month: 'numeric', year: 'numeric'},
  },
  display: {
    dateInput: {day: 'numeric', month: 'short', year: 'numeric'},
    monthYearLabel: { year:'numeric', month: 'short'},
    dateA11yLabel: {day: 'numeric', month: 'long', year: 'numeric'},
    monthYearA11yLabel: {day: 'numeric', month: 'long'}
  }
};

//services

import { NotificationModule } from './services';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects} from './store';
import { SideNavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production
    }),
    
    MatNativeDateModule,

    NotificationModule.forRoot(),
    
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
      { 
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
