import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CameraProvider } from './../../providers/camera/camera.provider';
import { CognitiveService } from './../../providers/cognitive-services/cognitive-services.service';

@IonicPage()
@Component({
  selector: 'page-image-detail',
  templateUrl: 'image-detail.html',
})
export class ImageDetailPage {

  picture: string;
  imageDescription: string;
  isSpeak: boolean;

  constructor(
    private cameraProvider: CameraProvider,
    private cognitiveService: CognitiveService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    return this.takePicture();
  }

  async takePicture(): Promise<any> {
    const loading = this.loadingCtrl.create();

    let descriptionAnalyzedImage;

    loading.present();

    this.isSpeak = false;
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
        this.cognitiveService.vibrate();
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
