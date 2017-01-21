import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ViewController, NavController, AlertController } from 'ionic-angular';

import template from './initial.mobile.component.html';
import style from './initial.mobile.component.scss';


@Component({
    selector: 'initial',
    template,
    styles: [style]
})

export class InitialMobileComponent {


    constructor(protected zone: NgZone, protected formBuilder: FormBuilder, public navCtrl: NavController) {

    }
}