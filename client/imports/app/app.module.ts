import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './web/app.web.component';
import { AppMobileComponent } from './mobile/app.mobile.component';
import { routes } from './app.routes';
import { SHARED_DECLARATIONS } from './shared';
import { MaterialModule } from '@angular/material';
import { MOBILE_DECLARATIONS } from './mobile/index';
import { WEB_DECLARATIONS } from './web/index';
import { IonicModule, IonicApp } from 'ionic-angular';
import { InitialMobileComponent } from './mobile/initial.mobile.component';

let moduleDefinition;

if (Meteor.isCordova) {
  moduleDefinition = {
    imports: [
      IonicModule.forRoot(AppMobileComponent)
    ],
    declarations: [
      ...SHARED_DECLARATIONS,
      ...MOBILE_DECLARATIONS
    ],
    providers: [

    ],
    bootstrap: [
      IonicApp
    ],
    entryComponents: [
      InitialMobileComponent
    ]
  }
}
else {
  moduleDefinition = {
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes),
      MaterialModule.forRoot(),
    ],
    declarations: [
      ...WEB_DECLARATIONS,
      ...SHARED_DECLARATIONS,
    ],
    providers: [

    ],
    bootstrap: [
      AppComponent
    ]
  }
}

@NgModule(moduleDefinition)
export class AppModule { }