import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CognitiveService } from './../../providers/cognitive-services/cognitive-services.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private cognitiveService: CognitiveService,
    public navCtrl: NavController
  ) {

  }

  takePicture() {
    this.navCtrl.push('ImageDetailPage');
  }

  ionViewDidLoad() {
    this.cognitiveService.playAudio('Toque na tela e tire uma foto');
  }

}
