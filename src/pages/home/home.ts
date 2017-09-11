import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CameraProvider } from './../../providers/camera/camera.provider';
import { CognitiveService } from './../../providers/cognitive-services/cognitive-services.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isSpeak: boolean = false;
  picture: string;
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
    this.imageDescription = '';

    try {
      await this.cameraProvider.getPictureFromCamera().then(picture => {
        if (picture) {
          this.picture = picture;
        }

        this.cognitiveService.playAudio('Analizando a imagem');
      }, error => {
        console.error(error);
      });

      await this.cognitiveService.analyzeImage(this.picture).then(description => {
        descriptionAnalyzedImage = description;
      }, error => {
        console.error(error);
      });

      await this.cognitiveService.translateText(descriptionAnalyzedImage).subscribe(translated => {
        this.imageDescription = translated.text;
        this.cognitiveService.playAudio(translated.text);
        this.isSpeak = true;
      });

      loading.dismiss();
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
