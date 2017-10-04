import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  appName;
  versionNumber;

  constructor(
    private appVersion: AppVersion,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.appVersion.getAppName().then(data => this.appName = data);
    this.appVersion.getVersionNumber().then(data => this.versionNumber = data);
  }

}
