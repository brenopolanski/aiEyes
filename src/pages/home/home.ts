import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CameraProvider } from './../../providers/camera/camera.provider';
import { CognitiveService } from './../../providers/cognitive-services/cognitive-services.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  picture: string = 'https://raw.githubusercontent.com/ionic-team/ionic-preview-app/master/src/assets/img/card-saopaolo.png';
  isSpeak: boolean = false;
  imageDescription: string;

  constructor(
    private cameraProvider: CameraProvider,
    private cognitiveService: CognitiveService,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) {

  }

  async takePicture(): Promise<any> {
    const loading = this.loadingCtrl.create();

    let descriptionAnalyzedImage;

    loading.present();

    try {
      await this.cameraProvider.getPictureFromCamera().then(picture => {
        if (picture) {
          this.picture = picture;
          this.isSpeak = true;
        }
        
        loading.dismiss();
      }, error => {
        console.error(error);
      });

      await this.cognitiveService.analyzeImage(this.picture).then(description => {
        this.imageDescription = description;
        // descriptionAnalyzedImage = description;
      }, error => {
        console.error(error);
      });

      await this.cognitiveService.translateText(this.imageDescription).subscribe(translated => {
        this.imageDescription = translated.text;
      });

      await this.cognitiveService.playAudio(this.imageDescription);
    } 
    catch (error) {
      console.error(error);
    }
  }

  async speakAgain(): Promise<any> {
    try {
      await this.cognitiveService.playAudio(this.imageDescription);
    }
    catch(error) {
      console.error(error);
    }
  }

}
