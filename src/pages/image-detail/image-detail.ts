import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { CameraProvider } from './../../providers/camera/camera.provider';
import { NativeActionsProvider } from './../../providers/native-actions/native-actions';
import { CognitiveService } from './../../providers/cognitive-services/cognitive-services.service';

@IonicPage()
@Component({
  selector: 'page-image-detail',
  templateUrl: 'image-detail.html',
})
export class ImageDetailPage {

  translateTexts: Array<{title: string, text: string}>;
  picture: boolean|string = false;
  imageDescription: string = '';
  isSpeak: boolean = false;

  constructor(
    private cameraProvider: CameraProvider,
    private nativeActionsProvider: NativeActionsProvider,
    private cognitiveService: CognitiveService,
    private translateService: TranslateService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewCanEnter() {
    this.translateTexts = [
      { title: 'LOADING', text: '' },
      { title: 'ANALYZING_IMAGE', text: '' }
    ];

    this.translateTexts.forEach(el => {
      this.translateService.get(el.title.toUpperCase()).subscribe((res: string) => {
        el.text = res;
      });
    });
  }

  ionViewDidLoad() {
    return this.takePicture();
  }

  async takePicture(): Promise<any> {
    const loading = this.loadingCtrl.create({
      content: `${this.translateTexts[0].text} ...`
    });

    let descriptionAnalyzedImage;

    loading.present();

    this.isSpeak = false;
    this.imageDescription = '';

    try {
      await this.cameraProvider.getPictureFromCamera().then(picture => {
        if (picture) {
          this.picture = picture;
        }

        this.nativeActionsProvider.playAudio(this.translateTexts[1].text);
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
        this.nativeActionsProvider.vibrate();
        this.nativeActionsProvider.playAudio(translated.text);
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
      await this.nativeActionsProvider.playAudio(this.imageDescription);
    }
    catch(error) {
      console.error(error);
    }
  }

}
