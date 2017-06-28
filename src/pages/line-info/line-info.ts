import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InfoServiceProvider } from '../../providers/info-service/info-service';
import { DeviceInfoPage } from '../device-info/device-info';


@Component({
  selector: 'page-line-info',
  templateUrl: 'line-info.html',
})
export class LineInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public botService: InfoServiceProvider) {
  }

  takeLine(numero: string) {
    this.botService.takeLine(numero);
    this.navCtrl.push(DeviceInfoPage);
  }

}
