import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeActionsProvider } from './../../providers/native-actions/native-actions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  translateTexts: Array<{title: string, text: string}>;

  constructor(
    private translateService: TranslateService,
    private nativeActionsProvider: NativeActionsProvider,
    public navCtrl: NavController
  ) {

  }

  async ionViewCanEnter(): Promise<any> {
    const delay = time => new Promise(res => setTimeout(() => res(), time));
    await delay(1000);

    this.translateTexts = [
      { title: 'TOUCH_SCREEN_TAKE_PHOTO', text: '' }
    ];

    this.translateTexts.forEach(el => {
      this.translateService.get(el.title.toUpperCase()).subscribe((res: string) => {
        el.text = res;
      });
    });
  }

  ionViewDidLoad() {
    this.nativeActionsProvider.playAudio(this.translateTexts[0].text);
  }

  takePicture() {
    this.navCtrl.setRoot('ImageDetailPage');
  }

}
