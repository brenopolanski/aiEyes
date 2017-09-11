import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CameraProvider } from './../../providers/camera/camera.provider';
import { ComputerVisionService } from './../../providers/computer-vision/computer-vision.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  picture: string = 'https://raw.githubusercontent.com/ionic-team/ionic-preview-app/master/src/assets/img/card-saopaolo.png';
  isSpeak: boolean = false;

  debug: any;

  constructor(
    private cameraProvider: CameraProvider,
    private computerVisionService: ComputerVisionService,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) {

  }

  async takePicture(): Promise<any> {
    const loading = this.loadingCtrl.create();

    loading.present();

    try {
      await this.cameraProvider.getPictureFromCamera().then(picture => {
        if (picture) {
          this.picture = picture;
          this.isSpeak = true;

          /*this.computerVisionService.analyzeImage(this.picture).then(text => {
            this.debug = text;

            this.test1 = Object.keys(text);
            this.test2 = text;
          });*/
        }
        
        loading.dismiss();
      }, error => {
        console.error(error);
      });

      await this.computerVisionService.analyzeImage(this.picture).then(text => {
        this.debug = text;
      }, error => {
        console.error(error);
      });

      await this.computerVisionService.translateText(this.debug).subscribe(data => {
        this.debug = data.text;
      });
    } 
    catch (error) {
      console.error(error);
    }
  }

}
