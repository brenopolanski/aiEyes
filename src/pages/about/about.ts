import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Globalization } from '@ionic-native/globalization';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  getPreferredLanguage: string;
  getLocaleName: string;

  constructor(
    private globalization: Globalization,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

    this.globalization.getPreferredLanguage()
      .then(res => {
        this.getPreferredLanguage = res.value;
      })
      .catch(e => console.log(e));

    this.globalization.getLocaleName()
      .then(res => {
        this.getLocaleName = res.value;
      })
      .catch(e => console.log(e));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
