import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  isMute: boolean = false;
  language: string;
  translateTo: string;

  constructor(
    private translateService: TranslateService,
    private nativeStorage: NativeStorage,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  ionViewCanEnter() {
    this.nativeStorage.getItem('isMute').then(data => this.isMute = data);
    this.nativeStorage.getItem('language').then(data => this.language = data);
    this.nativeStorage.getItem('translateTo').then(data => this.translateTo = data);
  }

  updateItem(key, value) {
    this.nativeStorage.setItem(key, value)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item!', error)
      );
  }

  updateLanguage(value) {
    this.translateService.use(value);

    this.nativeStorage.setItem('language', value)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item!', error)
      );
  }

}
