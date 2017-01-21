import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { AppComponent } from './web/app.web.component';

export const routes: Route[] = [
    { path: '', component: AppComponent }
];
