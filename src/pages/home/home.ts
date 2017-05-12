import { Component } from '@angular/core';
import { BLE } from '@ionic-native/ble';

import { NavController } from 'ionic-angular';

import { MyApp } from '../app/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
    //this.bluetoothSerial.isEnabled(); 
  }

  
}
